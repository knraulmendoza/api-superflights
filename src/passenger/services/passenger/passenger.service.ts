import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPassenger } from 'src/common/interfaces/passenger.interface';
import { PASSENGER } from 'src/common/models/models';
import { BaseRepository } from 'src/core/base-repository';
import { PassengerDto } from 'src/passenger/dto/passenger.dto';

@Injectable()
export class PassengerService {
  constructor(
    @InjectModel(PASSENGER.name) private readonly model: Model<IPassenger>,
  ) {}

  async getAll(): Promise<IPassenger[]> {
    return this.model.find();
  }

  async create(passengerDto: PassengerDto): Promise<IPassenger> {
    const newUser = new this.model(passengerDto);
    return await newUser.save();
  }

  async getById(passengerId: string): Promise<IPassenger> {
    return this.model.findById(passengerId);
  }
}
