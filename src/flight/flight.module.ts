import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FLIGHT } from 'src/common/models/models';
import { PassengerModule } from 'src/passenger/passenger.module';
import { FlightController } from './controllers/flight/flight.controller';
import { FlightSchema } from './schemas/flight.scehma';
import { FlightService } from './services/flight/flight.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: FLIGHT.name,
        useFactory: () => {
          const schema = FlightSchema;
          schema.plugin(require('mongoose-autopopulate'));
          return schema;
        },
      },
    ]),
    PassengerModule,
  ],
  controllers: [FlightController],
  providers: [FlightService],
})
export class FlightModule {}
