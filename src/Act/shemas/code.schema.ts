import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Code extends Document {
  @Prop({ required: true, unique: true })
  code: string;
}

export const CodeSchema = SchemaFactory.createForClass(Code);
