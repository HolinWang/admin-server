import { Inject } from "@nestjs/common";
import { MongoRepository } from "typeorm";
import { Role } from "../entities/role.mongo.entity";
import { PaginationParamsDto } from "src/shared/dtos/pagination-params.dto";
import { CreateRoleDto } from "../dtos/rule.dto";


export class RoleService{
  constructor(
    @Inject('ROLE_REPOSITORY')
    private readonly RoleRepository:MongoRepository<Role>
  ){}

  create(Role) {
    return this.RoleRepository.save(Role)
}


async findAll({ pageSize,currentPage }: PaginationParamsDto): Promise<{ data: Role[], count: number }> {

    const [data, count] = await this.RoleRepository.findAndCount({
        order: { createdAt: 'DESC' },
        skip: (currentPage - 1) * pageSize,
        take: (pageSize * 1),
        cache: true
    })
    return {
        data, count
    }
}

async findOne(id: string) {
    return await this.RoleRepository.findOneBy(id)


}

async update(id: string, Role: CreateRoleDto) {

    // 去除时间戳和id
    ['_id', 'createdAt', 'updatedAt'].forEach(
        k => delete Role[k]
    )
    // 更新时间戳
    // course.updatedAt = new Date()
    return await this.RoleRepository.update(id, Role)
}

async remove(id: string): Promise<any> {
    return await this.RoleRepository.delete(id)
}
}
