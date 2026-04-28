import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppError } from "../../../../shared/errors/AppError";

export class LoginUser {
    constructor(private repo: any) { }

    async execute(data: any) {
        try {
            const user = (data.email) ? await this.repo.findByEmail(data.email) : await this.repo.findByMobile(data.mobile);

            if (!user) {
                throw new AppError("Invalid Credentials", 401);
            }

            const isPasswordValid = await bcrypt.compare(data.password, user.password);

            if (!isPasswordValid) {
                throw new AppError("Invalid Credentials", 401);
            }

            const token = jwt.sign(
                { userId: user.id },
                process.env.JWT_SECRET!,
                { expiresIn: "1h" }
            )

            return {
                // user,
                token
            }
        } catch (error: any) {
            console.error("ERROR MESSAGE:", error.message);
            console.error("ERROR CODE:", error.code);
            console.error("ERROR META:", error.meta); // 👈 MOST IMPORTANT
            throw error;
        }
    }
}