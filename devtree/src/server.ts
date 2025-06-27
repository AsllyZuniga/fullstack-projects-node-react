import express from "express";
import router from "./router";

const app = express();
app.get('/', router)

export default app;
