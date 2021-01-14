import { Module } from '@nestjs/common';
import { BikeController } from './bike.controller';
import { BikeService } from './bike.service';
import {BikeSchema} from "./schemas/bike.schema";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  controllers: [BikeController],
  providers: [BikeService],
  imports: [
    MongooseModule.forFeature([
      { name: 'Bike', schema: BikeSchema }
    ])
  ]
})
export class BikeModule {}
