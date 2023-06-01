import { Module } from '@nestjs/common';
import { DayplansService } from './dayplans.service';
import { DayplansResolver } from './dayplans.resolver';

@Module({
  providers: [DayplansResolver, DayplansService]
})
export class DayplansModule {}
