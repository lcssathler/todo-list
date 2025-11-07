import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const testPrismaConnection = async () => {
  try {
    await prisma.$connect();
    console.log('Prisma connection OK');
    return true;
  } catch (error: any) {
    console.error('Prisma connection failed: ', error.message);
    return false;
  } finally {
    await prisma.$disconnect();
  }
};

export default prisma;