import { app } from "./app";

app.listen(process.env.PORT, () =>
  console.log("Runnig server " + process.env.PORT)
);
