require('dotenv').config();

module.exports = {
  SERVER_HOST: process.env.SERVER_HOST || 'play.uo-enigma.com',
  CHECK_INTERVAL: parseInt(process.env.CHECK_INTERVAL || '15000'),
  DISCORD_WEBHOOK_URL: process.env.DISCORD_WEBHOOK_URL
};