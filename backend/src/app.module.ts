import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configDotenv } from 'dotenv';
import { UsersModule } from './users/users.module';

configDotenv();
@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI!), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
