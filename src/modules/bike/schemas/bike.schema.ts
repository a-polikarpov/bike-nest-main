import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from 'mongoose'

import {BikeStatus} from "../enums/BikeStatus.enum";
import {validateIp} from "../../../utils/validation.utils";

export type BikeDocument = Bike & Document;

@Schema()
export class Bike {
  @Prop()
  id: string;

  @Prop({
    validate: [validateIp(), 'Ip is not valid']
  })
  ip: string;

  @Prop({
    required: true,
    enum: Object.values(BikeStatus)
  })
  status: string;
}

export const BikeSchema = SchemaFactory.createForClass(Bike);

