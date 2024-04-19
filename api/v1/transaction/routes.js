import express from 'express';
import {getAllTransactions, getTransactionById, transferTransaction} from "./controller.js";
import { restrict } from '../middleware/restrict.js';

const transactionRouter = express.Router();

//define the routes
transactionRouter.use(restrict);
transactionRouter.get("/api/v1/transactions", getAllTransactions);
transactionRouter.get("/api/v1/transactions/:id", getTransactionById);
transactionRouter.post("/api/v1/transactions", transferTransaction);

export default transactionRouter;