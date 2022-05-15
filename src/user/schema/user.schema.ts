import * as mogoose from 'mongoose';

export const UserScheama = new mogoose.Schema(
  {
    name: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

UserScheama.index({ userName: 1 }, { unique: true });
UserScheama.index({ email: 1 }, { unique: true });
