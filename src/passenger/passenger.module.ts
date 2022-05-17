import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PASSENGER } from 'src/common/models/models';
import { BaseRepository } from 'src/core/base-repository';
import { PassengerController } from './controllers/passenger/passenger.controller';
import { PassengerSchema } from './schema/passenger.schema';
import { PassengerService } from './services/passenger/passenger.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PASSENGER.name,
        schema: PassengerSchema,
      },
    ]),
  ],
  controllers: [PassengerController],
  providers: [PassengerService, BaseRepository],
})
export class PassengerModule {}
