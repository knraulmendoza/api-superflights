import { Controller } from '@nestjs/common';
import { PassengerDto } from 'src/passenger/dto/passenger.dto';
import { PassengerService } from 'src/passenger/services/passenger/passenger.service';
import { BaseController } from 'src/core/base-controller';

@Controller('v1/passenger')
export class PassengerController extends BaseController<PassengerDto> {
  constructor(passengerService: PassengerService) {
    super(passengerService);
  }
}
