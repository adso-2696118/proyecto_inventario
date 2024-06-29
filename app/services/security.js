import { checkToken } from "../middleware/auth.js";

// chequeo del autenticador
export const checkAuth = (req, res, next) => {
  const CORREO = req.body.correo;
  checkToken.confirmToken(req, CORREO);

  next();
};