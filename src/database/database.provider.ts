import * as mongoose from 'mongoose';
import { ConfigProvider } from '../config/config.provider';
import { Logger } from '@nestjs/common';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () : Promise<typeof mongoose> =>  { 
      const connection = await mongoose.createConnection(ConfigProvider.get('MONGODB_URI'), {
        useNewUrlParser: true,
        useCreateIndex: true,
        poolSize: 10,
      })
      new Logger('DatabaseConnection', true).log('Database connection stablished');
      return connection;
    } 
  },
];
