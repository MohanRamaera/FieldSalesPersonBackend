import { Injectable } from '@nestjs/common';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';
import { PrismaService } from 'nestjs-prisma';
import { FindLocationInput } from './dto/find-loaction.input';

@Injectable()
export class LocationsService {
  constructor(private prisma: PrismaService) {}

  create(userId, createLocationInput: CreateLocationInput) {
    return this.prisma.location.create({
      data: {
        user_id: userId,
        ...createLocationInput,
      },
    });
  }

  findAll() {
    return this.prisma.location.findMany({});
  }

  findLocationByDay(locationInput: FindLocationInput) {
    return this.prisma.location.findMany({
      where: {
        // timestamp: locationInput.locationStartDate,
        AND: [
          { user_id: locationInput.user_id },
          {
            timestamp: {
              gte: locationInput.locationStartDate,
              lte: locationInput.locationEndDate,
            },
          },
        ],
      },
    });
  }

  update(id: number, updateLocationInput: UpdateLocationInput) {
    return `This action updates a #${id} location`;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }
}
