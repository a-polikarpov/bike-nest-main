import { Module } from '@nestjs/common';
import {UserController} from "./user.controller";
import {UserService} from "./user.service";

@Module({
  providers: [
    UserController,
    UserService
  ],
  exports: [
    UserService
  ]
})
export class UserModule {}
