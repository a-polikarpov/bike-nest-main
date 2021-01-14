import {Body, Controller, Param, Post} from '@nestjs/common';
import {BikeService} from "./bike.service";
import {CreateBikeDto} from "./dto/create-bike.dto";
import {BikeStatus} from "./enums/BikeStatus.enum";

@Controller('bike')
export class BikeController {
  constructor(
    private bikeService: BikeService
  ) {}

  @Post()
  create(@Body() dto: CreateBikeDto): Promise<any> {
    return this.bikeService.create(dto);
  }

  @Post(':id/rent')
  rent(@Param('id') id: string, @Body('status') status: BikeStatus): Promise<any> {
    return this.bikeService.rent(id);
  }

  @Post(':id/unlock')
  unlock(@Param('id') id: string, @Body('status') status: BikeStatus): Promise<any> {
    return this.bikeService.unlock(id);
  }

  @Post(':id/break')
  brake(@Param('id') id: string, @Body('status') status: BikeStatus): Promise<any> {
    return this.bikeService.brake(id);
  }
}
