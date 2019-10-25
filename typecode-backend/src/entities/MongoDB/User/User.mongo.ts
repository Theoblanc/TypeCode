import { model, Document, Schema } from "mongoose";

interface IUser extends Document {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
  userId: string;
  name: string;
  email?: string | null;
  password: string;
  picture?: string | null;
}

const schema = new Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedYn: { type: Boolean, default: false },
  userId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String },
  password: { type: String, required: true },
  picture: { type: String }
});

schema.virtual("id").get(function(this: any) {
  return this._id.toHexString();
});

export const User = model<IUser>("IUser", schema);
