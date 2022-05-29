import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { IFlight } from 'src/common/interfaces/flight.interface';
import { BaseController } from 'src/core/base-controller';
import { FlightDto } from 'src/flight/dto/flight.dto';
import { FlightService } from 'src/flight/services/flight/flight.service';
import { PassengerService } from 'src/passenger/services/passenger/passenger.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('flights')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('v1/flight')
export class FlightController extends BaseController<FlightDto, IFlight> {
  constructor(
    private readonly flightService: FlightService,
    private readonly passengerService: PassengerService,
  ) {
    super(flightService);
  }

  @Get()
  async findAll() {
    return this.flightService.getAll();
  }

  @Post(':flightId/passenger/:passengerId')
  async addPassenger(
    @Param('flightId') flightId: string,
    @Param('passengerId') passengerId: string,
  ) {
    const passenger = await this.passengerService.getById(passengerId);
    if (!passenger)
      throw new HttpException('Paasenger Not Found', HttpStatus.NOT_FOUND);
    return this.flightService.addPassenger(flightId, passengerId);
  }
}
