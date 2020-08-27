import { Controller, Get, Post, Body, Redirect, Param, HostParam } from '@nestjs/common';
import { UserService } from './services/user.service';
import { PairService } from './services/pair.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService, private pairService: PairService) {}


  @Post('register/parent')
  registerParent(@Body() body): string {
    this.userService.createModelMongoUser(body);

    return 'modelParent'
  }

  @Post('register/child')
  registerChild(@Body() body): string {
    this.userService.createModelMongoUser(body);

    return 'modelChild'
  }

  @Post('register/pair')
  registerPair(@Body() body): string {
    // this.pairService.createModelMongoPair();
    console.log(body)
    return 'modelPair'
  }
}
