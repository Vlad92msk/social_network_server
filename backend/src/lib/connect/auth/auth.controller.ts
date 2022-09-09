import {CreateUserInput} from '@lib/profile/users/inputs/create-user.input'
import {UserType} from '@lib/profile/users/interfaces'
import {Controller, Post, Body, ValidationPipe, Get, Query} from '@nestjs/common'
import {from, Observable, of} from 'rxjs'
import {switchMap} from 'rxjs/operators'

import {AuthService} from './auth.service'
import {ConfirmAccountInput} from './inputs/confirm-account.input'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signUp')
  signUp(@Body(ValidationPipe) createUserDto: CreateUserInput): Observable<(string | UserType)[]> {
    return from(this.authService.signUp(createUserDto))
  }

  @Get('/confirm')
  confirm(@Query(ValidationPipe) query: ConfirmAccountInput): void {
    from([this.authService.confirmRegistrationToLink(query.token), true]).pipe(switchMap((a) => of(a)))
  }
}
