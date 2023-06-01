import { Test, TestingModule } from '@nestjs/testing';
import { DayplansResolver } from './dayplans.resolver';
import { DayplansService } from './dayplans.service';

describe('DayplansResolver', () => {
  let resolver: DayplansResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DayplansResolver, DayplansService],
    }).compile();

    resolver = module.get<DayplansResolver>(DayplansResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
