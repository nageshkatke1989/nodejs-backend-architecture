import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { User } from "../../domain/entities/User";
// import { ActivityRepository } from "../../../activity/infrastructure/ActivityRepository";
import { eventBus } from "../../../../shared/events/EventBus";
import { EVENTS } from "../../../../shared/events/events";

export class RegisterUser {
    constructor(private repo: UserRepository) { }

    async execute(input: { email: string, password: string, name: string, mobile: string }) {
        try {

            const hashed = await bcrypt.hash(input.password, 10);

            const user = new User(input.email, hashed, input.name, input.mobile);

            const saved = await this.repo.create(user);
            
            // create user activity
            /* const activityRepo = new ActivityRepository();
            await activityRepo.create({
                type: "USER_CREATED",
                userId: user.id,
                email: user.email,
                mobile: user.mobile,
                createdAt: new Date()
            }) */

            eventBus.publish(EVENTS.USER_REGISTERED, {
                userId: saved.id,
                email: saved.email,
                mobile: saved.mobile
            })

            //  auto login after register
            const token = jwt.sign(
                { userId: saved.id },
                process.env.JWT_SECRET!,
                { expiresIn: "1h" }
            )

            return { user: saved, token }
        } catch (error: any) {
            console.error("ERROR MESSAGE:", error.message);
            console.error("ERROR CODE:", error.code);
            console.error("ERROR META:", error.meta); // 👈 MOST IMPORTANT
            throw error;
        }
    }
}