import { Module } from '@nestjs/common';
import { CalculatorController } from './calculator.controller';
import { CalculatorService } from './calculator.service';


import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { CalculatorSchema } from './schemas/calculator.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Calculator', schema: CalculatorSchema }]),
  ],
  controllers: [CalculatorController],
  providers: [CalculatorService]
})
export class CalculatorModule {}
