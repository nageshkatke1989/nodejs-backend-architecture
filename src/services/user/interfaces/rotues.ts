import express  from "express";

const router = express.Router();

export const authRoutes = (constroller: any) => {

    router.post("/register", constroller.register);
    router.post("/login", constroller.login);

    return router;
}