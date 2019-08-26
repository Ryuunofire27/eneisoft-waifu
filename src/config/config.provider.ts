import { ConfigService } from '../config/config.service';

export const ConfigProvider = new ConfigService(`${(process.env.NODE_ENV || 'DEV').toLowerCase()}.env`)