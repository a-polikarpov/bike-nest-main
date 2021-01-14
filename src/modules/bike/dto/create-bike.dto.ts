import {BikeStatus} from "../enums/BikeStatus.enum";

export class CreateBikeDto {
  readonly id: string;

  readonly ip: string;

  readonly status: BikeStatus;
}