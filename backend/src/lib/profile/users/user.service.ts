import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import * as bcrypt from 'bcrypt'
import { GraphQLError } from 'graphql'
import { Repository } from 'typeorm'

import { RoleEnum } from '@lib/connect/roles/interfaces/role'
import { RoleService } from '@lib/connect/roles/role.service'
import { Connect, RU_Personal, RU_Progress, RU_Social, RU_User, UserTypeRelations } from './entities'
import { CreateUserInput } from './inputs/create-user.input'
import { FindUserInput } from './inputs/find-user.input'
import { UpdateUserInput } from './inputs/update-user.input'
import { UpdateUserRolesInput } from './inputs/update-userRoles.input'
import { StatusEnum, UserType } from './interfaces'

@Injectable()
export class UserService {
  private readonly saltRounds = 10

  constructor(
    @InjectRepository(RU_User)
    private readonly userRepository: Repository<RU_User>,
    private readonly roleService: RoleService
  ) {}

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.saltRounds)
    return await bcrypt.hash(password, salt)
  }

  // async createUser(createUserInput: CreateUserInput): Promise<RU_User> {
  //   return await this.userRepository.save({...createUserInput})
  // }

  async getOneUser(id: number): Promise<RU_User> {
    return await this.userRepository.findOne({
      where: { id },
    })
  }

  /**
   * Найти 1 юзера по условию
   */
  public findOneUserByParam = async (where?: FindUserInput, relations?: UserTypeRelations) => {
    return await this.userRepository.findOne({
      where,
      relations: ['connect', 'personal', 'social', 'progress'],
    })
  }

  /**
   * Обновить данные юзера
   */
  public updateUser = async (where: FindUserInput, param: UpdateUserInput) => {
    const find = await this.findOneUserByParam(where)
    if (!find) throw new GraphQLError('Пользователь не найден')

    try {
      return await this.userRepository.update({ id: where.id }, param)
    } catch {
      throw new GraphQLError('Ошибка обновления данных пользователя')
    }
  }

  /**
   * Добавить роль пользователю
   */
  public updateUserRoles = async (target: FindUserInput, { role }: UpdateUserRolesInput): Promise<boolean> => {
    const findUser = await this.findOneUserByParam(target)
    if (!findUser) throw new GraphQLError('Потльзователь не найден')

    try {
      const findRole = await this.roleService.getRoleByValue({
        value: role,
      })
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
  public deleteUserRoles = async (target: FindUserInput, { role }: UpdateUserRolesInput): Promise<boolean> => {
    const findUser = await this.findOneUserByParam(target)
    if (!findUser) throw new GraphQLError('Пользователь не найден')

    try {
      const findRole = await this.roleService.getRoleByValue({
        value: role,
      })
      const updateUser = await this.userRepository.create({
        ...findUser,
        connect: {
          ...findUser.connect,
          roles: findUser.connect.roles.filter((role) => role.id !== findRole.id),
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
        userName: createUsersInput.name,
        email: createUsersInput.email,
      },
    })
    if (found) throw new GraphQLError('Пользователь уже существует')

    try {
      const hash = await this.hashPassword(createUsersInput.password)
      const role = await this.roleService.getRoleByValue({ value: RoleEnum.visitor })

      const userConnect = await Connect.create({
        userName: createUsersInput.name,
        email: createUsersInput.email,
        password: hash,
        roles: [role],
        status: StatusEnum.pending,
      }).save()
      const userPersonal = await RU_Personal.create()
      const userSocial = await RU_Social.create()
      const userProgress = await RU_Progress.create()

      return await RU_User.create({
        connect: userConnect,
        personal: userPersonal,
        social: userSocial,
        progress: userProgress,
      }).save()
    } catch (e) {
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
      return await this.userRepository.delete({
        id: found.id,
      })
    } catch {
      throw new GraphQLError('Ошибка удаления пользователя')
    }
  }

  public getAllUsers = async (where?: FindUserInput) => {
    return await this.userRepository.find({
      where,
      relations: {
        personal: true,
        connect: true,
        social: true,
        progress: true,
      },
    })
  }

  async removeUser(id: number): Promise<number> {
    await this.userRepository.delete({ id })
    return id
  }

  // async updateUser(updateUserInput: UpdateUserInput): Promise<RU_User> {
  //   await this.userRepository.update({id: updateUserInput.id}, {...updateUserInput})
  //   return await this.getOneUser(updateUserInput.id)
  // }
}
