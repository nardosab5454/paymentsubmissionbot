
require("dotenv").config();

const { Telegraf, Markup, session } = require("telegraf");
const express = require("express");

const bot = new Telegraf(process.env.BOT_TOKEN);

// Session allows the bot to temporarily remember
// the user's name, university, package, etc.
bot.use(session());

const GROUP_ID = -1004425250477; // YOUR PRIVATE GROUP ID


// ==================================================
// KEYBOARDS
// ==================================================

const mainKeyboard = Markup.keyboard([
    ["🏆 Our Golden Past Years"],
    ["📚 Teaching Methods"],
    ["ℹ️ About Us"],
    ["📝 Registration"]
]).resize();


const registrationKeyboard = Markup.keyboard([
    ["👨‍🎓 Freshman Alone"],
    ["🎓 COC Alone"],
    ["👨‍🎓 + 🎓 Freshman + COC"],
    ["🔙 Main Menu"]
]).resize();


const cocKeyboard = Markup.keyboard([
    ["💊 Medicine, Pharmacy & Dental"],
    ["⚖️ Law COC"],
    ["🔙 Registration"]
]).resize();


const freshmanCocKeyboard = Markup.keyboard([
    ["🏥 Freshman + Health COC"],
    ["⚖️ Freshman + Law COC"],
    ["🔙 Registration"]
]).resize();


const aboutKeyboard = Markup.keyboard([
    ["🎥 About TTS - Video 1"],
    ["🎥 About TTS - Video 2"],
    ["🎥 About TTS - Video 3"],
    ["🔙 Main Menu"]
])
    .resize();


const paymentKeyboard = Markup.keyboard([
    ["📸 Send Payment Proof"],
    ["🔙 Registration"]
]).resize();


// ==================================================
// START
// ==================================================

bot.start(async (ctx) => {

    // Clear any old registration session
    ctx.session.registration = null;

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


// ------------------------------
// GOLDEN PAST YEARS
// ------------------------------

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


// ------------------------------
// TEACHING METHODS
// ------------------------------

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


// ==================================================
// ABOUT US
// ==================================================

bot.hears("ℹ️ About Us", async (ctx) => {

    await ctx.reply(
        `ℹ️ ABOUT US\n\n` +
        `Learn more about TTS Academy through our videos. 🎥\n\n` +
        `Choose a video:`,
        aboutKeyboard
    );
});


// ==================================================
// ABOUT US VIDEOS
// ==================================================
// ==================================================
// ABOUT US VIDEO 1
// ==================================================

bot.hears("🎥 About TTS - Video 1", async (ctx) => {

    try {

        await ctx.replyWithVideo(
            "BAACAgQAAxkBAANEapNeMpVDrJnxAsBPvNUvDxEVug8AAqsgAAJI86BQAgbmkcAcsXE9BA",
            {
                caption: "🎥 About TTS Academy"
            }
        );

        await ctx.reply(
            "Choose another video:",
            aboutKeyboard
        );

    } catch (error) {

        console.error("VIDEO 1 ERROR:", error);

        await ctx.reply(
            "❌ Sorry, I couldn't load this video right now.",
            aboutKeyboard
        );
    }
});


// ==================================================
// ABOUT US VIDEO 2
// ==================================================

bot.hears("🎥 About TTS - Video 2", async (ctx) => {

    try {

        await ctx.replyWithVideo(
            "BAACAgQAAxkBAANHapNguArQEkcwGL2zgus-Uar2uvQAAtYgAAJI86BQVZ0mmY-GqAE9BA",
            {
                caption: "🎥 Frequently Asked Questions"
            }
        );

        await ctx.reply(
            "Choose another video:",
            aboutKeyboard
        );

    } catch (error) {

        console.error("VIDEO 2 ERROR:", error);

        await ctx.reply(
            "❌ Sorry, I couldn't load this video right now.",
            aboutKeyboard
        );
    }
});


// ==================================================
// ABOUT US VIDEO 3
// ==================================================

bot.hears("🎥 About TTS - Video 3", async (ctx) => {

    try {

        await ctx.replyWithVideo(
            "BAACAgQAAxkBAANJapNhL_KoDfWXzkyxe2XKEKEGHQMAAuIgAAJI86BQC5kfkcGqYgABPQQ",
            {
                caption: "🎥 Advice and Warning"
            }
        );

        await ctx.reply(
            "Choose another video:",
            aboutKeyboard
        );

    } catch (error) {

        console.error("VIDEO 3 ERROR:", error);

        await ctx.reply(
            "❌ Sorry, I couldn't load this video right now.",
            aboutKeyboard
        );
    }
});


// ==================================================
// REGISTRATION
// ==================================================

bot.hears("📝 Registration", async (ctx) => {

    // Clear any unfinished registration
    ctx.session.registration = null;

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

    // Remember the package
    ctx.session.registration = {
        package: "Freshman Alone",
        fee: "400 ETB"
    };

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
        `3. Press "📸 Send Payment Proof" below.\n\n` +

        `💰 Fee: 400 ETB`,
        paymentKeyboard
    );
});


// ==================================================
// COC ALONE
// ==================================================

bot.hears("🎓 COC Alone", async (ctx) => {

    // Clear old package selection
    ctx.session.registration = null;

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

    ctx.session.registration = {
        package: "COC - Medicine, Pharmacy & Dental",
        fee: "350 ETB"
    };

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
        `3. Press "📸 Send Payment Proof" below.\n\n` +

        `💰 Fee: 350 ETB`,
        paymentKeyboard
    );
});


// ==================================================
// COC LAW
// ==================================================

bot.hears("⚖️ Law COC", async (ctx) => {

    ctx.session.registration = {
        package: "COC - Law",
        fee: "300 ETB"
    };

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
        `3. Press "📸 Send Payment Proof" below.\n\n` +

        `💰 Fee: 300 ETB`,
        paymentKeyboard
    );
});


// ==================================================
// FRESHMAN + COC
// ==================================================

bot.hears("👨‍🎓 + 🎓 Freshman + COC", async (ctx) => {

    ctx.session.registration = null;

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

    ctx.session.registration = {
        package: "Freshman + Health COC",
        fee: "700 ETB"
    };

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
        `3. Press "📸 Send Payment Proof" below.\n\n` +

        `💰 Fee: 700 ETB`,
        paymentKeyboard
    );
});


// ==================================================
// FRESHMAN + LAW COC
// ==================================================

bot.hears("⚖️ Freshman + Law COC", async (ctx) => {

    ctx.session.registration = {
        package: "Freshman + Law COC",
        fee: "600 ETB"
    };

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
        `3. Press "📸 Send Payment Proof" below.\n\n` +

        `💰 Fee: 600 ETB`,
        paymentKeyboard
    );
});


// ==================================================
// START PAYMENT PROOF PROCESS
// ==================================================

bot.hears("📸 Send Payment Proof", async (ctx) => {

    // Make sure the user selected a package
    if (!ctx.session.registration) {

        await ctx.reply(
            `❌ Please select your registration package first.\n\n` +
            `Go to 📝 Registration and choose your program.`,
            registrationKeyboard
        );

        return;
    }

    // Save the current step
    ctx.session.registration.step = "name";

    await ctx.reply(
        `👤 Please enter your FULL NAME:`
    );
});


// ==================================================
// COLLECT FULL NAME + UNIVERSITY
// ==================================================

bot.on("text", async (ctx, next) => {

    const registration = ctx.session?.registration;

    // If user isn't currently registering,
    // let the other bot.hears() handlers process the message.
    if (!registration) {
        return next();
    }


    // ==================================================
    // STEP 1: FULL NAME
    // ==================================================

    if (registration.step === "name") {

        const fullName = ctx.message.text.trim();

        if (!fullName) {

            await ctx.reply(
                `❌ Please enter your full name.`
            );

            return;
        }

        registration.fullName = fullName;
        registration.step = "university";

        await ctx.reply(
            `🎓 Thanks!\n\n` +
            `Now enter your UNIVERSITY name:`
        );

        return;
    }


    // ==================================================
    // STEP 2: UNIVERSITY
    // ==================================================

    if (registration.step === "university") {

        const university = ctx.message.text.trim();

        if (!university) {

            await ctx.reply(
                `❌ Please enter your university name.`
            );

            return;
        }

        registration.university = university;
        registration.step = "photo";

        await ctx.reply(
            `✅ Information received!\n\n` +
            `📸 Now send your PAYMENT SCREENSHOT.\n\n` +
            `Make sure the receipt is clear and readable.`
        );

        return;
    }


    // ==================================================
    // STEP 3: WAITING FOR PHOTO
    // ==================================================

    if (registration.step === "photo") {

        await ctx.reply(
            `📸 Please send your payment screenshot as an image.`
        );

        return;
    }

    return next();
});


// ==================================================
// RECEIVE PAYMENT SCREENSHOT
// ==================================================

bot.on("photo", async (ctx) => {

    try {

        // Make sure user started payment registration
        if (!ctx.session?.registration) {

            await ctx.reply(
                `Please select your registration package first from 📝 Registration.`,
                registrationKeyboard
            );

            return;
        }

        const registration = ctx.session.registration;


        // Make sure name and university exist
        if (
            !registration.fullName ||
            !registration.university
        ) {

            await ctx.reply(
                `❌ Please complete your Full Name and University information first.`
            );

            return;
        }


        // ==================================================
        // USER TELEGRAM INFORMATION
        // ==================================================

        const user = ctx.from;

        const telegramName =
            user.first_name || "Unknown";

        const username =
            user.username
                ? `@${user.username}`
                : "No username";

        const userId = user.id;


        // ==================================================
        // GET HIGHEST QUALITY PHOTO
        // ==================================================

        const photos = ctx.message.photo;

        const fileId =
            photos[photos.length - 1].file_id;


        // ==================================================
        // GROUP MESSAGE
        // ==================================================

        const caption =
            `💳 PAYMENT PROOF\n\n` +

            `📦 Package: ${registration.package}\n` +
            `💰 Fee: ${registration.fee}\n\n` +

            `👤 Full Name: ${registration.fullName}\n` +
            `🎓 University: ${registration.university}\n\n` +

            `📱 Telegram Name: ${telegramName}\n` +
            `🔗 Username: ${username}\n` +
            `🆔 Telegram ID: ${userId}`;


        // ==================================================
        // SEND PHOTO TO PRIVATE GROUP
        // ==================================================

        await ctx.telegram.sendPhoto(
            GROUP_ID,
            fileId,
            {
                caption: caption
            }
        );


        // ==================================================
        // CLEAR REGISTRATION DATA
        // ==================================================

        ctx.session.registration = null;


        // ==================================================
        // CONFIRM TO USER
        // ==================================================

        await ctx.reply(
            `✅ Payment proof received!\n\n` +

            `Thank you, ${registration.fullName}.\n\n` +

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


// ------------------------------
// MAIN MENU
// ------------------------------

bot.hears("🔙 Main Menu", async (ctx) => {

    ctx.session.registration = null;

    await ctx.reply(
        `🏠 MAIN MENU\n\n` +
        `Choose an option:`,
        mainKeyboard
    );
});


// ------------------------------
// REGISTRATION
// ------------------------------

bot.hears("🔙 Registration", async (ctx) => {

    ctx.session.registration = null;

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

    res.send("TTS Academy Bot is running! 🤖");

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(
        `🌐 Server running on port ${PORT}`
    );

});


// ==================================================
// START BOT
// ==================================================

bot.launch();

console.log(
    "🤖 TTS Academy Bot is running!"
);


// ==================================================
// GRACEFUL STOP
// ==================================================

process.once("SIGINT", () => bot.stop("SIGINT"));

process.once("SIGTERM", () => bot.stop("SIGTERM"));

