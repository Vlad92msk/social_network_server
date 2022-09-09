import {RoleEnum} from '@lib/connect/roles/interfaces/role'
import {RoleService} from '@lib/connect/roles/role.service'
import {CreateUserInput} from '@lib/profile/users/inputs/create-user.input'
import {FindUserInput} from '@lib/profile/users/inputs/find-user.input'
import {UpdateUserInput} from '@lib/profile/users/inputs/update-user.input'
import {UpdateUserRolesInput} from '@lib/profile/users/inputs/update-userRoles.input'
import {FindOneUser, StatusEnum, UserType} from '@lib/profile/users/interfaces'
import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {GraphQLError} from 'graphql'
import {Repository} from 'typeorm'
import * as bcrypt from 'bcrypt'

import {Connect, RU_Personal, RU_Progress, RU_Social, RU_User, UserTypeRelations} from '@lib/profile/users/entities'

@Injectable()
export class UserService {
  private readonly saltRounds = 10

  constructor(
    @InjectRepository(RU_User)
    private readonly userRepository: Repository<RU_User>,
    private readonly roleService: RoleService,
  ) {
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.saltRounds)
    return await bcrypt.hash(password, salt)
  }

  // async createUser(createUserInput: CreateUserInput): Promise<RU_User> {
  //   return await this.userRepository.save({...createUserInput})
  // }

  async getOneUser(id: number): Promise<RU_User> {
    return await this.userRepository.findOne({where: {id}})
  }

  /**
   * Найти 1 юзера по условию
   */
  public findOneUserByParam = async (where: FindUserInput, relations?: UserTypeRelations) => {
    return await this.userRepository.findOne({where})
  }

  /**
   * Обновить данные юзера
   */
  public updateUser = async (target: FindUserInput, param: UpdateUserInput) => {
    const find = await this.findOneUserByParam(target)
    if (!find) throw new GraphQLError('Пользователь не найден')

    try {
      return await this.userRepository.update({ id: target.id }, param)
    } catch {
      throw new GraphQLError('Ошибка обновления данных пользователя')
    }
  }

  /**
   * Добавить роль пользователю
   */
  public updateUserRoles = async (target: FindUserInput, {role}: UpdateUserRolesInput): Promise<boolean> => {
    const findUser = await this.findOneUserByParam(target)
    if (!findUser) throw new GraphQLError('Потльзователь не найден')

    try {
      const findRole = await this.roleService.getRoleByValue({value: role})
      const updateUser = await this.userRepository.create({
        ...findUser,
        connect: {
          ...findUser.connect,
          roles: [...findUser.connect.roles, findRole],
        },
      })
      await this.userRepository.save(updateUser)
      return true
    } catch {
      throw new GraphQLError('Ошибка добавления роли пользователю')
    }
  }

  /**
   * Удалить роль у пользователя
   */
  public deleteUserRoles = async (target: FindUserInput, {role}: UpdateUserRolesInput): Promise<boolean> => {
    const findUser = await this.findOneUserByParam(target)
    if (!findUser) throw new GraphQLError('Пользователь не найден')

    try {
      const findRole = await this.roleService.getRoleByValue({value: role})
      const updateUser = await this.userRepository.create({
        ...findUser,
        connect: {
          ...findUser.connect,
          roles: findUser.connect.roles.filter(role => role.id !== findRole.id),
        },
      })
      await this.userRepository.save(updateUser)
      return true
    } catch {
      throw new GraphQLError('Ошибка удаления роли у пользователя')
    }
  }

  /**
   * Создать юзера
   */
  public createUser = async (createUsersInput: CreateUserInput): Promise<UserType> => {
    const found = await this.findOneUserByParam({
      connect: {
        name: createUsersInput.name,
        email: createUsersInput.email,
      },
    })
    if (found) throw new GraphQLError('Пользователь уже существует')

    try {
      const hash = await this.hashPassword(createUsersInput.password)
      const role = await this.roleService.getRoleByValue({value: RoleEnum.visitor})

      const userConnect = await Connect.create({
        name: createUsersInput.name,
        email: createUsersInput.email,
        password: hash,
        roles: [role],
        status: StatusEnum.pending,
      })
      await userConnect.save()

      const userPersonal = await RU_Personal.create()
      await userPersonal.save()

      const userSocial = await RU_Social.create()
      await userSocial.save()

      const userProgress = await RU_Progress.create()
      await userProgress.save()

      const newUser = await RU_User.create()
      newUser.connect = userConnect
      newUser.personal = userPersonal
      newUser.social = userSocial
      newUser.progress = userProgress
      await this.userRepository.manager.save(newUser)

      return newUser

    } catch {
      throw new GraphQLError('Ошибка создания пользователя')
    }
  }

  /**
   * Удалить юзера
   */
  public deleteUser = async (userParam: FindUserInput) => {
    const found = await this.findOneUserByParam(userParam)
    if (!found) throw new GraphQLError('Пользователь не найден')

    try {
      return await this.userRepository.delete({id: found.id})
    } catch {
      throw new GraphQLError('Ошибка удаления пользователя')
    }
  }

  public getAllUsers = async (where?: FindUserInput): Promise<RU_User[]> => {
    return await this.userRepository.find({where})
  }

  async removeUser(id: number): Promise<number> {
    await this.userRepository.delete({id})
    return id
  }

  // async updateUser(updateUserInput: UpdateUserInput): Promise<RU_User> {
  //   await this.userRepository.update({id: updateUserInput.id}, {...updateUserInput})
  //   return await this.getOneUser(updateUserInput.id)
  // }
}
