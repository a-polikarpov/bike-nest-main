import { Injectable } from '@nestjs/common';
import {Model} from "mongoose";
import {InjectModel} from "@nestjs/mongoose";
import {UserDocument} from "./schemas/user.schema";
import {CreateUserDto} from "./dto/create-user.dto";
import * as bcrypt from 'bcrypt';
import { assignIn } from 'lodash'

@Injectable()
export class UserService {
  constructor(
    // @InjectModel('User') private readonly userModel: Model<UserDocument>
  ) {}
  //
  // async create(dto: CreateUserDto): Promise<UserDocument> {
  //   const saltRounds = 10;
  //   const salt = await bcrypt.genSalt(saltRounds);
  //   const hash = await bcrypt.hash(dto.password, salt);
  //
  //   const createdUser = this.userModel.create(assignIn(dto, { password: hash }));
  //   return await createdUser.save();
  // }
}
