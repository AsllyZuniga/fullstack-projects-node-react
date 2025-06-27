import { Router } from "express";

const router = Router();

//Autenticación y Registro
router.post("/auth/register", (require, res) => {
  console.log(res.app);
});
export default router;
