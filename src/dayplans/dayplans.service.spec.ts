import { Test, TestingModule } from '@nestjs/testing';
import { DayplansService } from './dayplans.service';

describe('DayplansService', () => {
  let service: DayplansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DayplansService],
    }).compile();

    service = module.get<DayplansService>(DayplansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
