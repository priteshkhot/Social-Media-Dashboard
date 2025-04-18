const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const TELEGRAM_BOT_TOKEN = "(TOKEN)"; //make a telegram bot and add its token here
const CHAT_ID = "@(urchatid)"; //you group id goes here after making the bot admin

app.get("/api/telegram/members", async (req, res) => {
  try {
    const response = await axios.get(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getChatMembersCount`, {
      params: {
        chat_id: CHAT_ID
      }
    });

    res.json({ count: response.data.result });
  } catch (error) {
    console.error("Telegram API Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch Telegram members count" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/api/telegram/members`);
});
