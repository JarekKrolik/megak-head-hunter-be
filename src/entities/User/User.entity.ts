import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm"
import { UserInterface } from "../types/User";
import { Roles } from "../types/Roles";
import { Contains, IsEnum } from 'class-validator';

@Entity()
export class User extends BaseEntity implements UserInterface {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: "varchar", length: 100, unique: true })
    @Contains('@', {
        message: '$property: Is wrong.',
    })
    email: string

    @Column({ type: "varchar", length: 100 })
    password: string

    @Column({ type: "varchar", length: 512, unique: true, nullable: true })
    token: string

    @Column({ type: "varchar", length: 512, unique: true, nullable: true })
    registerToken: string

    @Column({ type: 'enum', enum: Roles, default: Roles.STUDENT })
    @IsEnum(Roles)
    role: Roles
}