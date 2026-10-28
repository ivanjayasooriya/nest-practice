import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

// npm install class-validator class-transformer

export class CreateUserDto {
  @IsEmpty()
  id?: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
