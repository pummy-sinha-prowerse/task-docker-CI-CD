import {
    IsEmpty,
    IsEnum,
    IsNotEmpty,
    IsNumber
  } from 'class-validator';
  import { User } from '../../auth/schemas/user.schema';
  import { Category } from '../schemas/calculator.schema';
  
  export class CreateCalculatorDto {
    @IsNotEmpty()
    @IsNumber()
    readonly firstValue: number;
  
    @IsNotEmpty()
    @IsNumber()
    readonly secondValue: number;
  
    @IsNotEmpty()
    @IsEnum(Category, { message: 'Please enter correct category.' })
    readonly category: Category;
  
    @IsEmpty({ message: 'You cannot pass user id' })
    readonly user: User;
  }
  