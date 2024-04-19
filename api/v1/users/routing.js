import express from 'express';
import {getAllUsers, getUserById, createUser, updateUser, deleteUser, createUserWithProfile, userLogin, testVerifyToken} from "./controller.js";
import { restrict } from '../middleware/restrict.js';


const userRouter = express.Router();

//define the routes
// public routes
userRouter.post("/api/auth/login", userLogin);
userRouter.post("/api/auth/register", createUserWithProfile);

//private routes
userRouter.use(restrict);
userRouter.get("/api/auth/authenticate", testVerifyToken)
userRouter.post("/api/v1/users", createUserWithProfile);
userRouter.get("/api/v1/users", getAllUsers);
userRouter.get("/api/v1/users/:id", getUserById);
userRouter.put("/api/v1/users/:id", updateUser);
userRouter.delete("/api/v1/users/:id", deleteUser);


export default userRouter;