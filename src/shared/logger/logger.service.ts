import { Logger, createLogger,format, transport, transports } from "winston";

export class AppLogger{
    private context? : string;
    private logger: Logger;


    public setContext(context:string) : void{
        this.context = context;
    }

    constructor(){
        this.logger = createLogger({
            // 日志分级
            level: process.env.LOGGER_LEVEL,

            format : format.combine(
                format.timestamp(),
                format.prettyPrint()
            ),
            // 打印日志，按格式按级别
            transports:[
                new transports.File({
                    filename:'logs/error.log',
                    level:'error'
                }),
                new transports.File({
                    filename:'logs/combined.log',
                }),
                new transports.Console()
            ]
        })
    }

    // 自定义日志方法
    
    error(ctx:any, message:string, meta?:Record<string, any>) : Logger{
        return this.logger.error({
            message,
            contextName:this.context,
            ctx,
            ...meta
        })
    }

    warn(ctx:any, message:string, meta?:Record<string, any>) : Logger{
        return this.logger.warn({
            message,
            contextName:this.context,
            ctx,
            ...meta
        })
    }

    debug(ctx:any, message:string, meta?:Record<string, any>) : Logger{
        return this.logger.debug({
            message,
            contextName:this.context,
            ctx,
            ...meta
        })
    }

    info(ctx:any, message:string, meta?:Record<string, any>) : Logger{
        return this.logger.info({
            message,
            contextName:this.context,
            ctx,
            ...meta
        })
    }
}