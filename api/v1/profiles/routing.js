import express from 'express';
import {getAllProfiles, getProfileById, createProfile, updateProfile, deleteProfile} from "./controller.js";
import { restrict } from '../middleware/restrict.js';

const profileRouter = express.Router();

//define the routes
profileRouter.use(restrict);
profileRouter.get("/api/v1/profiles", getAllProfiles);
profileRouter.get("/api/v1/profiles/:id", getProfileById);
profileRouter.post("/api/v1/profiles", createProfile);
profileRouter.put("/api/v1/profiles/:id", updateProfile);
profileRouter.delete("/api/v1/profiles/:id", deleteProfile);


export default profileRouter;