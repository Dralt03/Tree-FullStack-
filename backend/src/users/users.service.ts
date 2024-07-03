import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UsersModule } from './users.module';
import { User } from 'src/Schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  createUser(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }
}
