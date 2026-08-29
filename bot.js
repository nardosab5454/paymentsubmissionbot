require("dotenv").config();

const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

const GROUP_ID = -1004425250477; // 

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

bot.launch();

console.log("🤖 Bot is running...");