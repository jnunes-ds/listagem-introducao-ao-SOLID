import swaggerUI from "swagger-ui-express";

import { app } from ".";
import swaggerfile from "./swagger.json";

app.listen(3333, () => console.log("Server is running!"));

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerfile));
