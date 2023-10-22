const cors = require("cors");
require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const TOKEN = process.env.TELEGRAM_BOT_API;

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", (message: any) => {
  console.log(message);
  // send a message to the chat acknowledging receipt of their message
  //   bot.sendMessage(chatId, "Received your message");
  bot.sendMessage(message.from.id, "I'm busy, I will reply for free.");
});
