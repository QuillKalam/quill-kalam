import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { prismaService } from 'src/prisma/prisma.service';
import { RegisterUserDto } from './dto/registerUser.dto';
import { HashService } from './utils/hash.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(
    private db: prismaService,
    private hashService: HashService,
  ) {}

  // Create a new user
  async createUser(RegisterUserDto: RegisterUserDto) {
    const { firstName, lastName, email, password, roles } = RegisterUserDto;

    const allowedRoles = ['author', 'reviewer'];
    const invalidRoles = roles.filter((role) => !allowedRoles.includes(role));

    if (invalidRoles.length > 0) {
      throw new BadRequestException(
        `Invalid roles: ${invalidRoles.join(', ')}`,
      );
    }

    const existingUser = await this.db.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      throw new ConflictException('This email is already registered');
    }

    const hashedPassword = await this.hashService.hash(password);
    const verificationToken = uuidv4();

    const user = await this.db.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        verificationToken,
        roles: {
          connect: roles.map((role) => ({ name: role })),
        },
      },
      include: {
        roles: true,
      },
    });

    // Remove sensitive information
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, verificationToken: __, ...result } = user;
    return result;
  }
}
