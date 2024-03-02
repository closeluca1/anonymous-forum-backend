import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  publicToken: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
