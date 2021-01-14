import {IsEmail, IsNotEmpty, MinLength} from "class-validator";

export class CreateUserDto {
  @IsEmail({}, { message: 'email is not correct!' })
  readonly email: string;

  readonly card: string = '';

  @MinLength(6, { message: 'password should contain at least 6 characters' })
  readonly password: string;
}