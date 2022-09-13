import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { RU_User } from './entities'
import { CreateUserInput } from './inputs/create-user.input'

import { UserService } from './user.service'

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => Number)
  async removeUser(@Args('id') id: number): Promise<number> {
    return await this.userService.removeUser(id)
  }

  @Mutation(() => RU_User, { description: 'Создать юзера' })
  async usersCreate(@Args('user') user: CreateUserInput) {
    return await this.userService.createUser(user)
  }

  @Query(() => RU_User)
  async getOneUser(@Args('id') id: number): Promise<RU_User> {
    return await this.userService.getOneUser(id)
  }

  @Query(() => [RU_User], { name: 'getAllUsers' })
  async getAllUsers(): // @Args({nullable: true, name: 'dwedwed', description: 'dwwwwwwww', type: () => GetUsersArgs})
  // args: GetUsersArgs
  Promise<RU_User[]> {
    // const {where} = args
    return await this.userService.getAllUsers()
  }
}
