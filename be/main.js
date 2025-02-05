import express from "express";
import cors from "cors"; // Import cors
import connectdb from "./database/connect.js";
import router from "./router/product.js";
import routerCategory from "./router/categorys.js";
import authRouter from "./router/auth.js";
import routerUser from "./router/user.js";

const app = express();
const port = 4200;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use("/api", router);
app.use("/api", routerCategory);
app.use("/api", authRouter);
app.use("/api", routerUser);

app.listen(port, async () => {
  await connectdb();
  console.log(`Endpoint http://localhost:${port}/api/`);
});
