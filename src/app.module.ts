import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import {MongooseModule} from "@nestjs/mongoose";
import { BikeModule } from './modules/bike/bike.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UserModule,
    AuthModule,
    BikeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
