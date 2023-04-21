import { Module } from "@nestjs/common";
import { SystemService } from "./system.service";
import { ConfigModule } from "@nestjs/config";
import { configModuleOptions } from "./configs/module-options";

@Module({
    // 向外部暴露
    exports:[SystemService,ConfigModule],
    
    // 可以自动注入
    providers:[SystemService],

    // 注入Config
    imports:[
        ConfigModule.forRoot(configModuleOptions)
    ],


})
export class SharedModule{}