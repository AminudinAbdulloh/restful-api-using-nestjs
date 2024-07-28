import { Injectable } from "@nestjs/common";
import { PrismaService } from "../src/common/prisma.service";
import * as bcrypt from 'bcrypt';
import { User } from "@prisma/client";
import { UserResponse } from "src/model/user.model";

@Injectable()
export class TestService {
    constructor(private prismaService: PrismaService) {}

    async deleteUser() {
        await this.prismaService.user.deleteMany({
            where: {
                username: 'test',
            }
        });
    }

    async createUser() {
        await this.prismaService.user.create({
            data: {
                username: 'test',
                password: await bcrypt.hash('test', 10),
                name: 'test',
                token: 'test'
            }
        });
    }

    async getUser(): Promise<User> {
        return this.prismaService.user.findUnique({
            where: {
                username: 'test',
            }
        });
    }
}