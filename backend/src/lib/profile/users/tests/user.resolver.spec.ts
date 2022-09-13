import { Test, TestingModule } from '@nestjs/testing'
import { UserResolver } from '@lib/profile/users/user.resolver'
import { UserService } from '@lib/profile/users/user.service'

describe('UserResolver', () => {
  let resolver: UserResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, UserResolver],
    }).compile()

    resolver = module.get<UserResolver>(UserResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
