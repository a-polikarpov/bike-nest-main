import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from 'mongoose'

import {validateEmail} from "../../../utils/validation.utils";

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({
    unique: true,
    validate: [validateEmail, 'The email is incorrect!']
  })
  email: string;

  @Prop()
  card: string;

  @Prop({
    required: true,
  })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.index({ email: 1 }, { unique: true });