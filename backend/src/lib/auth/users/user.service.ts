import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'

import {dbName} from '@db/db.providers'
import {UserEntity} from '@lib/auth/users/entities/user.entity'
import {CreateUserInput} from '@lib/auth/users/inputs/create-user.input'
import {UpdateUserInput} from '@lib/auth/users/inputs/update-user.input'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity, dbName.CONNECT)
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
