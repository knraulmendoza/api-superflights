// import * as mogoose from 'mongoose';

// export const UserScheama = new mogoose.Schema(
//   {
//     name: { type: String, required: true },
//     userName: { type: String, required: true },
//     email: { type: String, required: true },
//     password: { type: String, required: true },
//   },
//   { timestamps: true },
// );

// UserScheama.index({ userName: 1 }, { unique: true });
// UserScheama.index({ email: 1 }, { unique: true });

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true, unique: true })
  username: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
