import {UserEntity} from '@lib/profile/users/entities/user.entity'
import {CreateUserInput} from '@lib/profile/users/inputs/create-user.input'
import {UpdateUserInput} from '@lib/profile/users/inputs/update-user.input'
import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'

import {db} from '@db/db.map'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity, db.PROFILE)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async createUser(createUserInput: CreateUserInput): Promise<UserEntity> {
    return await this.userRepository.save({...createUserInput})
  }

  async getOneUser(id: number): Promise<UserEntity> {
    return await this.userRepository.findOne({id})
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find()
  }

  async removeUser(id: number): Promise<number> {
    await this.userRepository.delete({id})
    return id
  }

  async updateUser(updateUserInput: UpdateUserInput): Promise<UserEntity> {
    await this.userRepository.update({id: updateUserInput.id}, {...updateUserInput})
    return await this.getOneUser(updateUserInput.id)
  }
}
