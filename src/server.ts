import app from "./app";
import { PORT } from "./shared/config/env.config";
import { connectMongo } from "./shared/config/mongodb/connection";
import "./shared/events/listeners/UserActivityListener";

const start = async() => {
  await connectMongo();
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

start();