import { prisma } from "../../../../shared/config/postgres";
import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";

export class PrismaUserRepository implements UserRepository {

    async create(user: User): Promise<User> {
        const created = await prisma.user.create({
            data: {
                email: user.email,
                password: user.password,
                mobile: user.mobile,
                name: user.name
            }
        });
        return new User(created.email, created.password, created.name, created.mobile, created.id);
    }

    async findByEmail(email: string) {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return null;

        return new User(user.email, user.password, user.name, user.mobile, user.id);
    }

    async findByMobile(mobile: number) {
        const user = await prisma.user.findUnique({ where: { mobile } });
        if (!user) return null;

        return new User(user.email, user.password, user.name, user.mobile, user.id);
    }

}