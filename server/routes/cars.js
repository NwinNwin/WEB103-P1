import express from "express";
import path from "path";

import { fileURLToPath } from "url";

import CarsController from "../controllers/cars.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", CarsController.getCars);

router.get("/:carId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/car.html"));
});

export default router;
