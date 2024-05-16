import { Injectable } from '@nestjs/common';
import { Calculator } from './schemas/calculator.schema';
import { User } from '../auth/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { CreateCalculatorDto } from './dto/create-calculator.dto';

@Injectable()
export class CalculatorService {
  constructor(
    @InjectModel(Calculator.name)
    private calculatorModel: mongoose.Model<Calculator>,
  ) {}

  async createCalculator(
    calculatorDto: CreateCalculatorDto,
    user: any,
  ): Promise<Calculator> {
    let result: number;
    const calculator = new Calculator();
    switch (calculatorDto.category) {
      case 'add':
        result = calculatorDto.firstValue + calculatorDto.secondValue;
        break;
      case 'sub':
        result = calculatorDto.firstValue - calculatorDto.secondValue;
        break;
      case 'multi':
        result = calculatorDto.firstValue * calculatorDto.secondValue;
        break;
      case 'divide':
        result = calculatorDto.firstValue / calculatorDto.secondValue;
        break;
      default:
        throw new Error('Invalid category');
    }
    calculator.user = user; // Assuming you have a relation with user
      const data = {
      ...calculatorDto,
      result,
      user: user._id,
    };
    const res = await this.calculatorModel.create(data);
    return res;
    // return await this.calculatorRepository.save(calculator);
  }
}
