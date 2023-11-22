import mongoose, { Model, Schema, model } from 'mongoose';

import { User } from '@/interfaces';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: {
        values: ['admin', 'client'],
        message: '{VALUE} no es un role válido',
        default: 'client',
        required: true,
      },
    },
  },
  {
    timestamps: true,
  },
);

const UserModel: Model<User> = mongoose.models.User || model('User', userSchema);

export default UserModel;
