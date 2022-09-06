import {RU_User} from '@lib/profile/users/entities'
import {CreateUserInput} from '@lib/profile/users/inputs/create-user.input'
import {UpdateUserInput} from '@lib/profile/users/inputs/update-user.input'
import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(RU_User)
    private readonly userRepository: Repository<RU_User>,
  ) {
  }

  // async createUser(createUserInput: CreateUserInput): Promise<RU_User> {
  //   return await this.userRepository.save({...createUserInput})
  // }

  async getOneUser(id: number): Promise<RU_User> {
    return await this.userRepository.findOne({where: {id}})
  }

  async getAllUsers(): Promise<RU_User[]> {
    return await this.userRepository.find()
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
