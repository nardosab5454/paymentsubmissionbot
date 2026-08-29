require("dotenv").config();

const { Telegraf } = require("telegraf");
const express = require("express");

const bot = new Telegraf(process.env.BOT_TOKEN);

const GROUP_ID = -1001234567890;

// Telegram bot
bot.start((ctx) => {
    ctx.reply("Please send your payment screenshot 📸");
});

bot.on("photo", async (ctx) => {
    try {
        const photos = ctx.message.photo;
        const fileId = photos[photos.length - 1].file_id;

        await ctx.telegram.sendPhoto(GROUP_ID, fileId);

        await ctx.reply(
            "✅ Screenshot received.\n\n" +
            "We will accept you once we verify your payment."
        );

    } catch (error) {
        console.error("ERROR:", error);

        await ctx.reply(
            "❌ I couldn't send your screenshot. Please try again."
        );
    }
});

// Start Telegram bot
bot.launch();

console.log("🤖 Bot is running...");

// Web server for Render
const app = express();

app.get("/", (req, res) => {
    res.send("Payment bot is running!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🌐 Server running on port ${PORT}`);
});