import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { omit } from 'lodash'
import { GetUserArgs, UpdateUserArgs } from './args'
import { RU_User } from './entities'
import { CreateUserInput } from './inputs'
import { UserService } from './user.service'

@Resolver(() => RU_User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => Number, { description: 'Удалить пользователя' })
  async removeUser(@Args('id') id: number) {
    return await this.userService.removeUser(id)
  }

  @Mutation(() => RU_User, { description: 'Создать юзера' })
  async usersCreate(@Args('user') user: CreateUserInput) {
    return await this.userService.createUser(user)
  }

  @Mutation(() => RU_User, { description: 'Обновить данные пользователя' })
  async usersUpdate(@Args() param: UpdateUserArgs) {
    const { id } = param
    return await this.userService.updateUser(id, omit(param, 'id'))
  }

  @Query(() => RU_User, { description: 'Получить 1 пользователя' })
  async getOneUser(@Args('id') id: number) {
    return await this.userService.getOneUser(id)
  }

  @Query(() => [RU_User], { description: 'Получить всех пользователей' })
  async getAllUsers(@Args({ nullable: true }) findUser?: GetUserArgs) {
    return await this.userService.getAllUsers(findUser)
  }
}
