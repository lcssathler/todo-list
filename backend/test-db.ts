import { testPrismaConnection } from './src/database/prisma.config.ts';

const run = async () => {
  const success = await testPrismaConnection();
  
  if (success) {
    console.log('DB connection ok');
  } else {
    console.log('Error connecting to DB');
  }
  
  process.exit(success ? 0 : 1);
};

run();