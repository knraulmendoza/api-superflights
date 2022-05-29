import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { PassengerDto } from 'src/passenger/dto/passenger.dto';
import { PassengerService } from 'src/passenger/services/passenger/passenger.service';
import { BaseController } from 'src/core/base-controller';
import { IPassenger } from 'src/common/interfaces/passenger.interface';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
@ApiTags('passengers')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('v1/passenger')
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @Get()
  async getAll() {
    return await this.passengerService.getAll();
  }

  @Post()
  async create(@Body() passengerDto: PassengerDto) {
    return await this.passengerService.create(passengerDto);
  }
}
