import { Router } from "express";
import { GetCepService } from "./services/cepService";

const router = Router();

const getCepService = new GetCepService();

router.get("/api/v1/ceps", getCepService.handle);

export { router };
