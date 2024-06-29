import { Router } from "express";
import { crearUser, eliminarUser, listarUser, loginUser, modificarUser, mostrarUser } from "../controllers/controller.user";
import { checkAuth } from "../services/security";


const rutaUser = Router();

rutaUser.get("/user/:id", mostrarUser);
rutaUser.get("/user", listarUser);
rutaUser.post("/user", crearUser);
rutaUser.put("/user",checkAuth, modificarUser);
rutaUser.delete("/user", eliminarUser);
rutaUser.post("/login", loginUser)

export default rutaUser;