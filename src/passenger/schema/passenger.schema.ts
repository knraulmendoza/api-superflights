import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PassengerDocument = Passenger & Document;

@Schema()
export class Passenger {
  @Prop()
  name: string;
  @Prop({ required: true, unique: true })
  email: string;
}

export const PassengerSchema = SchemaFactory.createForClass(Passenger);
