import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { prismaService } from 'src/prisma/prisma.service';
import { HashService } from './utils/hash.service';

@Module({
  providers: [UsersService, prismaService, HashService],
  controllers: [UsersController],
})
export class UsersModule {}
