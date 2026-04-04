import app from "./app";
import { PORT } from "./shared/config/env.config";

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});