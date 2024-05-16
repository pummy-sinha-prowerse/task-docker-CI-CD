import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../../auth/schemas/user.schema';

export enum Category {
  ADD = 'add',
  SUB = 'sub',
  MULTIPICATION = 'multi',
  DIVIDE = 'divide',
}

@Schema({
  timestamps: true,
})
export class Calculator {

  @Prop()
  firstValue: number;

  @Prop()
  secondValue: number;

  @Prop()
  category: Category;
  
  @Prop()
  result: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const CalculatorSchema = SchemaFactory.createForClass(Calculator);
