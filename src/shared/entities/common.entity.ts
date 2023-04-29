import { Column, CreateDateColumn, ObjectId, ObjectIdColumn, UpdateDateColumn, VersionColumn } from "typeorm";

export abstract class Common{
    @ObjectIdColumn()
    _id:ObjectId

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @Column({
        default:false
    })

    
    isDeleted:boolean

    @VersionColumn({
        select:false
    })
    version:number
}