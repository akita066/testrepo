const { SERVER_HOST, CHECK_INTERVAL, DISCORD_WEBHOOK_URL } = require('./config');
const { checkServerStatus } = require('./serverChecker');
const { sendDiscordMessage } = require('./discordNotifier');
const { StatusTracker } = require('./monitoring/statusTracker');
const { getFormattedTimestamp } = require('./utils/timeUtils');

const statusTracker = new StatusTracker();

async function monitorServer() {
  const isUp = await checkServerStatus(SERVER_HOST);
  const result = statusTracker.updateStatus(isUp);
  
  if (result.changed) {
    const status = result.status ? 'ONLINE ✅' : 'OFFLINE ❌';
    console.log(`[${result.timestamp}] Server is ${status}`);
    
    const discordMessage = `Server ${SERVER_HOST} is ${status}`;
    await sendDiscordMessage(DISCORD_WEBHOOK_URL, discordMessage);
  }
}

console.log(`Monitoring ${SERVER_HOST}\nChecking every ${CHECK_INTERVAL / 1000} seconds...\n`);
monitorServer();

setInterval(monitorServer, CHECK_INTERVAL);