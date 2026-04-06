import { User } from "../entities/User";

export interface UserRepository {
    create(user: User) : Promise<User>;
    findByEmail(email: string) : Promise<User | null>;
    findByMobile(mobile: number) : Promise<User | null>;    
}