import { Module } from "@nestjs/common";
import { SystemService } from "./system.service";

@Module({
    // 向外部暴露
    exports:[SystemService],
    
    // 可以自动注入
    providers:[SystemService]
})
export class SharedModule{}