import { Module } from "@nestjs/common";
import { SystemService } from "./system.service";
import { ConfigModule } from "@nestjs/config";
import { configModuleOptions } from "./configs/module-options";
import { DataBaseProviders } from "./database.providers";
import { ApploggerModule } from "./logger/logger.module";

@Module({
    // 向外部暴露,任意模块都可以使用
    exports:[
        SystemService,
        ConfigModule,
        ApploggerModule,
        ...DataBaseProviders
    ],
    
    // 可以自动注入
    providers:[
        SystemService,
        ...DataBaseProviders
    ],

    // 注入Config
    imports:[
        ConfigModule.forRoot(configModuleOptions),
        ApploggerModule
    ],


})
export class SharedModule{}