import express from "express";
import { PrismaUserRepository } from "../../../../services/user/infrastructure/repositories/PrismaUserRepository";
import { RegisterUser } from "../../../../services/user/application/usecases/RegisterUser";
import { AuthController } from "../../../../services/user/interfaces/controllers/UserController";
import { authRoutes } from "../../../../services/user/interfaces/rotues";
import { LoginUser } from "../../../../services/user/application/usecases/LoginUser";

const apiGateway = express();
apiGateway.use(express.json());

``
const repo = new PrismaUserRepository();
const RegisterUseCase = new RegisterUser(repo);
const LoginUseCase = new LoginUser(repo);
const constroller = new AuthController(RegisterUseCase, LoginUseCase);

apiGateway.use("/auth", authRoutes(constroller));

export default apiGateway;