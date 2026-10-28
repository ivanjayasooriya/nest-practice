import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

// npm install class-validator class-transformer

export class CreateUserDto {
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}
