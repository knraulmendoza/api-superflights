import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PASSENGER } from 'src/common/models/models';
// import { BaseRepository } from 'src/core/base-repository';
import { PassengerController } from './controllers/passenger/passenger.controller';
import { PassengerSchema } from './schema/passenger.schema';
import { PassengerService } from './services/passenger/passenger.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PASSENGER.name,
        useFactory: () => PassengerSchema,
      },
    ]),
  ],
  controllers: [PassengerController],
  providers: [PassengerService],
  exports: [PassengerService],
})
export class PassengerModule {}
