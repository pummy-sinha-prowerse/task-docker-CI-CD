import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateCalculatorDto } from './dto/create-calculator.dto';
import { Calculator } from './schemas/calculator.schema';
import { CalculatorService } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
  constructor(private calculatorService: CalculatorService) {}

  @Post()
  @UseGuards(AuthGuard())
  async createCalculator(
    @Body() calculatorDto: CreateCalculatorDto,
    @Req() req,
    @Res() res,
  ) {
    try {
      const user = req.user;
      const newCalculator = await this.calculatorService.createCalculator(calculatorDto, user);
      return res.status(201).json(newCalculator); // Send the response with status 201 and the created calculator
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  }
}

