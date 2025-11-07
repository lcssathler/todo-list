import { testConnection } from './src/database/connection.ts';

const run = async () => {
  const success = await testConnection();
  
  if (success) {
    console.log('DB connection ok');
  } else {
    console.log('Error connecting to DB');
  }
  
  process.exit(success ? 0 : 1);
};

run();