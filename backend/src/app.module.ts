import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { configDotenv } from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';

configDotenv();
@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI!)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
