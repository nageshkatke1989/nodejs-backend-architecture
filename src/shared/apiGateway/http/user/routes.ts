import express from "express";
import { PrismaUserRepository } from "../../../../services/user/infrastructure/repositories/PrismaUserRepository";
import { RegisterUser } from "../../../../services/user/application/usecases/RegisterUser";
import { AuthController } from "../../../../services/user/interfaces/controllers/AuthController";
import { authRoutes } from "../../../../services/user/interfaces/rotues";

const apiGateway = express();
apiGateway.use(express.json());


const repo = new PrismaUserRepository();
const useCase = new RegisterUser(repo);
const constroller = new AuthController(useCase);

apiGateway.use("/auth", authRoutes(constroller));

export default apiGateway;