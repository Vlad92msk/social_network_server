import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { GetUsersArgs } from './args/get-users.args'
import { RU_User } from './entities'
import { CreateUserInput } from './inputs/create-user.input'
import { UserService } from './user.service'

@Resolver(() => RU_User)
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

  @Query(() => [RU_User])
  async getAllUsers(@Args() findUser?: GetUsersArgs): Promise<RU_User[]> {
    return await this.userService.getAllUsers(findUser)
  }
}
