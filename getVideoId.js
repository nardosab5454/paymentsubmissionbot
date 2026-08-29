require("dotenv").config();

const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on("video", async (ctx) => {
    console.log("VIDEO FILE ID:");
    console.log(ctx.message.video.file_id);

    await ctx.reply(
        `Your video file ID is:\n\n${ctx.message.video.file_id}`
    );
});

bot.launch();

console.log("🤖 Send me a video...");