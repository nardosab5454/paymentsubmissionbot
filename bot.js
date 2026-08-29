
require("dotenv").config();

const { Telegraf, Markup } = require("telegraf");
const express = require("express");

const bot = new Telegraf(process.env.BOT_TOKEN);

const GROUP_ID = -1004425250477; // YOUR PRIVATE GROUP ID


// ==================================================
// KEYBOARDS
// ==================================================

const mainKeyboard = Markup.keyboard([
    ["🏆 Our Golden Past Years"],
    ["📚 Teaching Methods"],
    ["ℹ️ About Us"],
    ["📝 Registration"]
])
    .resize();


const registrationKeyboard = Markup.keyboard([
    ["👨‍🎓 Freshman Alone"],
    ["🎓 COC Alone"],
    ["👨‍🎓 + 🎓 Freshman + COC"],
    ["🔙 Main Menu"]
])
    .resize();


const cocKeyboard = Markup.keyboard([
    ["💊 Medicine, Pharmacy & Dental"],
    ["⚖️ Law COC"],
    ["🔙 Registration"]
])
    .resize();


const freshmanCocKeyboard = Markup.keyboard([
    ["🏥 Freshman + Health COC"],
    ["⚖️ Freshman + Law COC"],
    ["🔙 Registration"]
])
    .resize();


const paymentKeyboard = Markup.keyboard([
    ["📸 Send Payment Proof"],
    ["🔙 Registration"]
])
    .resize();


// ==================================================
// START
// ==================================================

bot.start(async (ctx) => {

    const name = ctx.from.first_name || "there";

    await ctx.reply(
        `Hey ${name} 👋\n\n` +
        `Welcome to TTS Academy! 🎓\n\n` +
        `Please choose an option below:`,
        mainKeyboard
    );
});


// ==================================================
// MAIN MENU
// ==================================================

// Golden Past Years
bot.hears("🏆 Our Golden Past Years", async (ctx) => {

    await ctx.reply(
        `🏆 OUR GOLDEN PAST YEARS\n\n` +

        `🙏🙏 A huge thank you to the best math teacher\n\n` +

        `They say a good teacher explains, but a great teacher inspires. ` +
        `Maths teacher helped me secure my A by breaking down the most ` +
        `complex problems into simple steps.\n\n` +

        `Thanks a lot all TTS teachers and members 🙏🙏\n\n` +

        `⭐ Our students' success is our greatest achievement.`,
        mainKeyboard
    );
});


// Teaching Methods
bot.hears("📚 Teaching Methods", async (ctx) => {

    await ctx.reply(
        `📱 HOW WILL YOU LEARN?\n\n` +

        `Everything is delivered on Telegram and on Application! 🎓\n\n` +

        `You get:\n\n` +

        `🎥 Ethiopian & International Videos\n\n` +
        `📄 Intensive PPTs & PDFs\n\n` +
        `🎙️ Audio Lessons\n\n` +
        `💬 Telegram Text Notes\n\n` +
        `📝 Daily MCQs & Weekly Mock Tests!\n\n` +

        `> Own Mid and Final Exam preparation with a complete learning system. 💪📚`,
        mainKeyboard
    );
});


// About Us
bot.hears("ℹ️ About Us", async (ctx) => {

    await ctx.reply(
        `ℹ️ ABOUT US\n\n` +
        `Learn more about TTS Academy through our videos. 🎥\n\n` +
        `Choose a video:`
    );

    // About Us video buttons
    await ctx.reply(
        `🎥 Select a video:`,
        Markup.keyboard([
            ["🎥ABOUT US🔥"],
            ["🎥 Frequently Asking Questions"],
            ["🎥 ADVICE and Warning"],
            ["🔙 Main Menu"]
        ])
            .resize()
    );
});


// ==================================================
// ABOUT US VIDEOS
// ==================================================

bot.hears("🎥 About TTS - Video 1", async (ctx) => {

    // Replace with your real Telegram video file ID

    await ctx.replyWithVideo(
        "BAACAgQAAxkBAANEapNeMpVDrJnxAsBPvNUvDxEVug8AAqsgAAJI86BQAgbmkcAcsXE9BA",
        {
            caption: "🎥ABOUT US🔥"
        }
    );

    await ctx.reply(
        "Choose another option:",
        Markup.keyboard([
            ["🎥ABOUT US🔥"],
            ["🎥 Frequently Asking Questions"],
            ["🎥 ADVICE and Warning"],
            ["🔙 Main Menu"]
        ])
            .resize()
    );
});


bot.hears("🎥 About TTS - Video 2", async (ctx) => {

    await ctx.replyWithVideo(
        "BAACAgQAAxkBAANHapNguArQEkcwGL2zgus-Uar2uvQAAtYgAAJI86BQVZ0mmY-GqAE9BA",
        {
            caption: "🎥 Frequently Asking Questions"
        }
    );

    await ctx.reply(
        "Choose another option:",
        Markup.keyboard([
            ["🎥ABOUT US🔥"],
            ["🎥 Frequently Asking Questions"],
            ["🎥 ADVICE and Warning"],
            ["🔙 Main Menu"]
        ])
            .resize()
    );
});


bot.hears("🎥 About TTS - Video 3", async (ctx) => {

    await ctx.replyWithVideo(
        "BAACAgQAAxkBAANJapNhL_KoDfWXzkyxe2XKEKEGHQMAAuIgAAJI86BQC5kfkcGqYgABPQQ",
        {
            caption: "🎥 ADVICE and Warning"
        }
    );

    await ctx.reply(
        "Choose another option:",
        Markup.keyboard([
            ["🎥ABOUT US🔥"],
            ["🎥 Frequently Asking Questions"],
            ["🎥 ADVICE and Warning"],
            ["🔙 Main Menu"]
        ])
            .resize()
    );
});


// ==================================================
// REGISTRATION
// ==================================================

bot.hears("📝 Registration", async (ctx) => {

    await ctx.reply(
        `📝 REGISTRATION\n\n` +
        `Please choose your program:`,
        registrationKeyboard
    );
});


// ==================================================
// FRESHMAN ALONE
// ==================================================

bot.hears("👨‍🎓 Freshman Alone", async (ctx) => {

    await ctx.reply(
        `💳 REGISTRATION & PAYMENT DETAILS\n\n` +

        `🏦 Payment Options\n\n` +

        `CBE: @1000553069387\n` +
        `Holder: Melkamu Godebo\n\n` +

        `Telebirr: +251958738409\n` +
        `Account Holder Name: Melkamu Godebo\n\n` +

        `📲 How to Complete Registration:\n\n` +

        `1. Pay 400 ETB via CBE or Telebirr.\n\n` +
        `2. Take a screenshot of the payment receipt.\n\n` +
        `3. Send the screenshot HERE in this bot.\n\n` +

        `💰 Fee: 400 ETB`,
        paymentKeyboard
    );
});


// ==================================================
// COC ALONE
// ==================================================

bot.hears("🎓 COC Alone", async (ctx) => {

    await ctx.reply(
        `🎓 COC ALONE\n\n` +
        `Choose your field:`,
        cocKeyboard
    );
});


// ==================================================
// COC HEALTH
// ==================================================

bot.hears("💊 Medicine, Pharmacy & Dental", async (ctx) => {

    await ctx.reply(
        `💳 REGISTRATION & PAYMENT DETAILS\n\n` +

        `🏦 Payment Options\n\n` +

        `CBE: @1000553069387\n` +
        `Holder: Melkamu Godebo\n\n` +

        `Telebirr: +251958738409\n` +
        `Account Holder Name: Melkamu Godebo\n\n` +

        `📲 How to Complete Registration:\n\n` +

        `1. Pay 350 ETB via CBE or Telebirr.\n\n` +
        `2. Take a screenshot of the payment receipt.\n\n` +
        `3. Send the screenshot HERE in this bot.\n\n` +

        `💰 Fee: 350 ETB`,
        paymentKeyboard
    );
});


// ==================================================
// COC LAW
// ==================================================

bot.hears("⚖️ Law COC", async (ctx) => {

    await ctx.reply(
        `💳 REGISTRATION & PAYMENT DETAILS\n\n` +

        `🏦 Payment Options\n\n` +

        `CBE: @1000553069387\n` +
        `Holder: Melkamu Godebo\n\n` +

        `Telebirr: +251958738409\n` +
        `Account Holder Name: Melkamu Godebo\n\n` +

        `📲 How to Complete Registration:\n\n` +

        `1. Pay 300 ETB via CBE or Telebirr.\n\n` +

        `2. Take a screenshot of the payment receipt.\n\n` +

        `3. Send the screenshot HERE in this bot.\n\n` +

        `💰 Fee: 300 ETB`,
        paymentKeyboard
    );
});


// ==================================================
// FRESHMAN + COC
// ==================================================

bot.hears("👨‍🎓 + 🎓 Freshman + COC", async (ctx) => {

    await ctx.reply(
        `👨‍🎓 + 🎓 FRESHMAN + COC\n\n` +
        `Choose your program:`,
        freshmanCocKeyboard
    );
});


// ==================================================
// FRESHMAN + HEALTH COC
// ==================================================

bot.hears("🏥 Freshman + Health COC", async (ctx) => {

    await ctx.reply(
        `💳 REGISTRATION & PAYMENT DETAILS\n\n` +

        `🏦 Payment Options\n\n` +

        `CBE: @1000553069387\n` +
        `Holder: Melkamu Godebo\n\n` +

        `Telebirr: +251958738409\n` +
        `Account Holder Name: Melkamu Godebo\n\n` +

        `📲 How to Complete Registration:\n\n` +

        `1. Pay 700 ETB via CBE or Telebirr.\n\n` +

        `2. Take a screenshot of the payment receipt.\n\n` +

        `3. Send the screenshot HERE in this bot.\n\n` +

        `💰 Fee: 700 ETB`,
        paymentKeyboard
    );
});


// ==================================================
// FRESHMAN + LAW COC
// ==================================================

bot.hears("⚖️ Freshman + Law COC", async (ctx) => {

    await ctx.reply(
        `💳 REGISTRATION & PAYMENT DETAILS\n\n` +

        `🏦 Payment Options\n\n` +

        `CBE: @1000553069387\n` +
        `Holder: Melkamu Godebo\n\n` +

        `Telebirr: +251958738409\n` +
        `Account Holder Name: Melkamu Godebo\n\n` +

        `📲 How to Complete Registration:\n\n` +

        `1. Pay 600 ETB via CBE or Telebirr.\n\n` +

        `2. Take a screenshot of the payment receipt.\n\n` +

        `3. Send the screenshot HERE in this bot.\n\n` +

        `💰 Fee: 600 ETB`,
        paymentKeyboard
    );
});


// ==================================================
// SEND PAYMENT PROOF BUTTON
// ==================================================

bot.hears("📸 Send Payment Proof", async (ctx) => {

    await ctx.reply(
        `📸 PAYMENT PROOF\n\n` +
        `Please send your payment screenshot here.\n\n` +
        `Make sure the receipt is clear and readable.`
    );
});


// ==================================================
// RECEIVE PAYMENT SCREENSHOT
// ==================================================

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

        const caption =
            `💳 PAYMENT PROOF\n\n` +
            `👤 Name: ${name}\n` +
            `📱 Username: ${username}\n` +
            `🆔 User ID: ${userId}`;

        // Send image + user information
        // to private group
        await ctx.telegram.sendPhoto(
            GROUP_ID,
            fileId,
            {
                caption: caption
            }
        );

        // Confirm to user
        await ctx.reply(
            `✅ Payment proof received!\n\n` +
            `We will accept you after we verify your payment.`,
            mainKeyboard
        );

    } catch (error) {

        console.error("PAYMENT ERROR:", error);

        await ctx.reply(
            `❌ I couldn't receive your payment proof.\n\n` +
            `Please try again.`
        );
    }
});


// ==================================================
// NAVIGATION
// ==================================================

bot.hears("🔙 Main Menu", async (ctx) => {

    await ctx.reply(
        `🏠 MAIN MENU\n\n` +
        `Choose an option:`,
        mainKeyboard
    );
});


bot.hears("🔙 Registration", async (ctx) => {

    await ctx.reply(
        `📝 REGISTRATION\n\n` +
        `Please choose your program:`,
        registrationKeyboard
    );
});


// ==================================================
// EXPRESS SERVER FOR RENDER
// ==================================================

const app = express();

app.get("/", (req, res) => {
    res.send("TTS Academy Bot is running!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🌐 Server running on port ${PORT}`);
});


// ==================================================
// START BOT
// ==================================================

bot.launch();

console.log("🤖 TTS Academy Bot is running!");

