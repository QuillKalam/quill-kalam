import { PartialType } from '@nestjs/mapped-types';
import { RegisterUserDto } from './registerUser.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(RegisterUserDto) {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  password?: never; // Prevent password from being updated through this DTO
}
