import { Injectable } from "@nestjs/common";

@Injectable()
export class SystemService {
    constructor(){
        
    }
    getEnv(){
        return {
            env:"开发环境"
        }
    }
}