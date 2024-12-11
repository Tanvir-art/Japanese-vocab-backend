// import cookieParser from 'cookie-parser';
// import cors from 'cors';
import express, { Application, Request, Response } from "express";
// import router from "./app/routes";

import cors from "cors";
import router from "./app/routes";
import notFound from "./app/middleware/notFound";
import globalErrorHandler from "./app/middleware/globalErrorhandler";
const app: Application = express();

//parsers
app.use(express.json());

app.use(cors());

app.use("/api", router);
app.use(globalErrorHandler);
app.use(notFound);
app.get("/", (req: Request, res: Response) => {
  res.send("Wellcome To Japanese Language Learning App");
});
export default app;
