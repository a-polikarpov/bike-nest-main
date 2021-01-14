import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";

import {BikeDocument} from "./schemas/bike.schema";
import {BikeStatus} from "./enums/BikeStatus.enum";
import {CreateBikeDto} from "./dto/create-bike.dto";

const bikeException = new HttpException('The bike with this id does not exist', HttpStatus.NOT_FOUND);

@Injectable()
export class BikeService {

  constructor(
    @InjectModel('Bike') private readonly bikeModel: Model<BikeDocument>
  ) {}

  async create(dto: CreateBikeDto): Promise<BikeDocument> {
    const createdBike = await this.bikeModel.create(dto);
    return await createdBike.save();
  }

  async rent(id: string): Promise<BikeDocument> {
    const bike = await this.bikeModel.findOne({id});
    if (!bike) {
      throw bikeException;
    }
    if (bike.status === BikeStatus.Busy) {
      throw new HttpException('The bike is already busy!', HttpStatus.NOT_FOUND)
    }
    if (bike.status === BikeStatus.Broken) {
      throw new HttpException('The bike is broken!', HttpStatus.NOT_FOUND)
    }

    bike.status = BikeStatus.Busy;
    return await bike.save();
  }

  async unlock(id: string): Promise<BikeDocument> {
    const bike = await this.bikeModel.findOne({ id });
    if (!bike) {
      throw bikeException;
    }
    if (bike.status === BikeStatus.Free) {
      throw new HttpException('The bike is already free!', HttpStatus.NOT_FOUND)
    }
    if (bike.status === BikeStatus.Broken) {
      throw new HttpException('The bike is broken!', HttpStatus.NOT_FOUND)
    }

    bike.status = BikeStatus.Free;
    return await bike.save();
  }

  async brake(id: string): Promise<BikeDocument> {
    const bike = await this.bikeModel.findOne({ id });
    if (!bike) {
      throw bikeException;
    }
    if (bike.status === BikeStatus.Broken) {
      throw new HttpException('The bike is already broken!', HttpStatus.NOT_FOUND)
    }

    bike.status = BikeStatus.Broken;
    return await bike.save();
  }
}
