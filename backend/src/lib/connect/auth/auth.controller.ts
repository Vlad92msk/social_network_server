import {Controller, Post, Body, ValidationPipe, Get, Query} from '@nestjs/common'
import {from, Observable, of} from 'rxjs'
import {switchMap} from 'rxjs/operators'

import {AuthService} from './auth.service'
import {CreateUsersInput} from '../users/inputs/create-user.input'
import {ConfirmAccountInput} from './inputs/confirm-account.input'
import {UserType} from '@server/lib/connect/users/entitys'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signUp')
  signUp(@Body(ValidationPipe) createUserDto: CreateUsersInput): Observable<(string | UserType)[]> {
    return from(this.authService.signUp(createUserDto))
  }

  @Get('/confirm')
  confirm(@Query(ValidationPipe) query: ConfirmAccountInput): void {
    from([this.authService.confirmRegistrationToLink(query.token), true]).pipe(switchMap((a) => of(a)))
  }
}
