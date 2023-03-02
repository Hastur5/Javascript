import express from "express";
import morgan from "morgan";

import productRoutes from "./routes/index.routes"


const app = express();

/* Setting the port to 4000. */
app.set("port",3000);

/* Middlewares */
app.use(morgan("dev"));
app.use(express.json());

/* Importing the productRoutes from the product.routes file. */
app.use("/api-restful/products",productRoutes);

export default app;

