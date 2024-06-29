import { Router } from "express";
import rutaUser from "./routes.user";
import rutaProduct from "./routes.product";
const ruta = Router();
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../tools/swagger-output.json';

ruta.use("/api", rutaUser);
ruta.use("/api", rutaProduct);
ruta.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export default ruta;