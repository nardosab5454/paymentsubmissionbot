require("dotenv").config();

const { Telegraf } = require("telegraf");
const express = require("express");

const bot = new Telegraf(process.env.BOT_TOKEN);

const GROUP_ID = -1004425250477; // Your private group ID

// /start
bot.start(async (ctx) => {
    const user = ctx.from;

    const name = user.first_name || "there";
    const username = user.username
        ? `@${user.username}`
        : "No username";

    await ctx.reply(
        `Hey ${name} 👋\n\n` +
        `Please send your payment proof 📸\n\n` +
        `We'll accept you after we verify your payment.`
    );
});

// User sends payment screenshot
bot.on("photo", async (ctx) => {
    try {
        const user = ctx.from;

        const name = user.first_name || "Unknown";
        const username = user.username
            ? `@${user.username}`
            : "No username";

        const userId = user.id;

        const photos = ctx.message.photo;
        const fileId = photos[photos.length - 1].file_id;

        // Information that will appear in your private group
        const caption =
            `💳 PAYMENT PROOF\n\n` +
            `👤 Name: ${name}\n` +
            `📱 Username: ${username}\n` +
            `🆔 User ID: ${userId}`;

        // Send screenshot + user information to private group
        await ctx.telegram.sendPhoto(
            GROUP_ID,
            fileId,
            {
                caption: caption
            }
        );

        // Tell the user
        await ctx.reply(
            `✅ Payment proof received!\n\n` +
            `We will accept you after we verify your payment.`
        );

    } catch (error) {
        console.error("ERROR:", error);

        await ctx.reply(
            "❌ I couldn't receive your payment proof. Please try again."
        );
    }
});

// Small web server for Render
const app = express();

app.get("/", (req, res) => {
    res.send("Payment bot is running!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🌐 Server running on port ${PORT}`);
});

// Start bot
bot.launch();

console.log("🤖 Bot is running...");