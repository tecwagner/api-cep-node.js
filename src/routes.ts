import { Router } from "express";
// import { GetCepController } from "./controllers/cepController";
import { GetCepService } from "./services/cepService";

const router = Router();

// const getCepController = new GetCepController();
const getCepService = new GetCepService();

// router.get("/cep", getCepController.handle);
router.get("/cep", getCepService.handle);

export { router };
