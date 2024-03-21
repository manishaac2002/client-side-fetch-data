import express from "express";
import { cronScheduler } from "./cron.server.js";

const application = express()
application.use(express.json())

// port
const port = 2001
application.listen(port, async () => {
  console.log(`🟢 Server is running on the port ${port}`);
  await cronScheduler()
})