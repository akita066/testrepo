# Server Status Monitor

A Discord webhook-based monitoring system that tracks the status of a game server and sends notifications when the server state changes.

## Features

- Monitors server availability every 15 seconds
- Sends Discord notifications only when server status changes
- Clean and minimal status messages
- Configurable through environment variables

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
4. Configure your `.env` file with your Discord webhook URL:
   ```
   SERVER_HOST=play.uo-enigma.com
   CHECK_INTERVAL=15000
   DISCORD_WEBHOOK_URL=your_webhook_url_here
   ```

## Running the Application

```bash
npm start
```

## Deployment

This application can be deployed to various platforms like Render, Railway, or any other Node.js hosting service. Make sure to set up the environment variables in your deployment platform.

## License

MIT