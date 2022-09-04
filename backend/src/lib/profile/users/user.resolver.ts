import {RU_User} from '@lib/profile/users/entities'
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql'

import {UserService} from '@lib/profile/users/user.service'
import {CreateUserInput} from '@lib/profile/users/inputs/create-user.input'
import {UpdateUserInput} from '@lib/profile/users/inputs/update-user.input'

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // @Mutation(() => RU_User)
  // async createUser(@Args('createUser') createUserInput: CreateUserInput): Promise<RU_User> {
  //   return await this.userService.createUser(createUserInput)
  // }

  // @Mutation(() => RU_User)
  // async updateUser(@Args('updateUser') updateUserInput: UpdateUserInput): Promise<RU_User> {
  //   return await this.userService.updateUser(updateUserInput)
  // }

  @Mutation(() => Number)
  async removeUser(@Args('id') id: number): Promise<number> {
    return await this.userService.removeUser(id)
  }

  @Query(() => RU_User)
  async getOneUser(@Args('id') id: number): Promise<RU_User> {
    return await this.userService.getOneUser(id)
  }

  @Query(() => [RU_User])
  async getAllUsers(): Promise<RU_User[]> {
    return await this.userService.getAllUsers()
  }
}
