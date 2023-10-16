import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as csv from 'csv-parser';
const prisma = new PrismaClient();

const SeedCommand = async () => {
  const filePath =
    '/Users/apple/Documents/Field Sales Person Backend/prisma/SS&DB.csv';
  const dataset = [];
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => dataset.push(data));

  await prisma.$connect();
  console.log('Seeding...');

  for (const row of dataset) {
    const feedCustomerData = await prisma.customer.create({
      data: {
        name: row.Name_of_Business,
        type: row.Firm_Type,
        contact_number: row.Mobile_No,
        address: row.Address_of_Business,
        GSTNO: row.GST_No,
        metaData: {
          Terriotory: row.Territory,
          Distribution_Design: row.Distribution_Design,
          Zone_Incharge: row.Zone_Incharge,
          Proprietor: row.Name_Of_the_Proprietor,
          PAN_No: row.PAN_No,
          Year_of_Establishment: row.Year_of_Establishment,
          State: row.State,
        },
      },
    });
  }
};

async function main() {
  const check = await SeedCommand();

  console.log('Seeding...');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
