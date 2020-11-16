import cors from "cors";
import express from "express";
import { CBD, ENV } from "./config";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", routes);

CBD(ENV.DB.URI)
  .then(() => {
    console.log(`[EMS-API] Connection established.`);
    app.listen(ENV.API.PORT, () => {
      console.log(`[EMS-API] The server is running on ${ENV.API.PORT}.`);
    });
  })
  .catch((err) => {
    console.log(`[EMS-API] ERROR: ${err.message}`);
  });
