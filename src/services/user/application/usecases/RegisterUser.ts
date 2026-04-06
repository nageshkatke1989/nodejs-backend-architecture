import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { User } from "../../domain/entities/User";

export class RegisterUser {
    constructor(private repo: UserRepository) { }

    async execute(input: { email: string, password: string, name: string, mobile: number }) {
        const hashed = await bcrypt.hash(input.password, 10);

        const user = new User(input.email, hashed, input.name, input.mobile);

        const saved = await this.repo.create(user);

        const token = jwt.sign(
            { userId: saved.id },
            process.env.JWT_SECRET!
        )

        return { user: saved, token }
    }
}