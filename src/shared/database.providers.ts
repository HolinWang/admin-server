import { ConfigService } from "@nestjs/config";
const path = require('path');
import { DataSource, DataSourceOptions } from "typeorm";

// 设置数据库类型
const databaseType: DataSourceOptions['type'] = 'mongodb';
export const DataBaseProviders = [
    {
        provide:'MONGODB_DATA_SOURCE',
        // 注入数据库地址，账户密码
        inject:[ConfigService],

        // 利用工厂类创建数据源
        useFactory:async (configService:ConfigService) => {
            const config = {
                type: databaseType,
                url: configService.get<string>('database.url'),
                username: configService.get<string>('database.user'),
                password: configService.get<string>('database.pass'),
                database: configService.get<string>('database.name'),
                // 对entity分类读取
                entities: [path.join(__dirname, `../../**/*.mongo.entity{.ts,.js}`)],
                logging: configService.get<boolean>('database.logging'),
                synchronize: configService.get<boolean>('database.synchronize'),
                useUnifiedTopology:true
            }
            const dataSource = new DataSource(config)
            await dataSource.initialize()
            return dataSource
        }
    }
];