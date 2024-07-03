import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private usersServices: UsersService) {}
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
  }
}
