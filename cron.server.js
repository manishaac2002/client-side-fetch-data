import cron from "node-cron";
import { fetchApi } from "./client.side.js";

export const cronScheduler = async (start) => {

  // Schedule the task to run every minute
  cron.schedule('* * * * *', async () => {
    console.log('Running every one minute...!')
    fetchApi(true)
  }); // Runs every minute

  console.log('🟢 Cron server started🔄️..')

} 
