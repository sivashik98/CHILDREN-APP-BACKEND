import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pair extends Document {
  @Prop({ required: true })
  father: string;

  @Prop({ required: true })
  child: string;
}

export const PairSchema = SchemaFactory.createForClass(Pair);
