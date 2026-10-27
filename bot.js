
require("dotenv").config();

const { Telegraf, Markup, session } = require("telegraf");
const express = require("express");

const bot = new Telegraf(process.env.BOT_TOKEN);

const GROUP_ID = -1004425250477;

// ==================================================
// SESSION
// ==================================================

bot.use(
    session({
        defaultSession: () => ({
            registration: null
        })
    })
);


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
]).resize();


const paymentKeyboard = Markup.keyboard([
    ["📸 Send Payment Proof"],
    ["🔙 Registration"]
]).resize();


// ==================================================
// START
// ==================================================

bot.start(async (ctx) => {

    // Completely reset registration
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
// GOLDEN PAST YEARS
// ==================================================

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
        `Ke Mid exam yeterdanew neger ke Wollo University malet new betam kelal new.\n\n` +
        `Ke high school bebelete neger gn betam shewaj new ena ` +
        `enanten lamsegnachu efelfalgalehu. Fetenawu ley yewetawun hulu ` +
        `astemrachunal ena deom ye enanten mid exam ysera mnm aykebdewum ` +
        `yegibu fetena.\n\n` +
        `May Allah bless you all course instructor 🥰🥰`,
        mainKeyboard
    );

    await ctx.reply(
        `🏆 OUR GOLDEN PAST YEARS\n\n` +
        `Be mejeemerya derja fetrain eyamesegenku le tekettay 5 werat ` +
        `laderegachulin gulh አስተዋፅኦ kelib amsegnalehu kebadu freshman ` +
        `ke enantega huno kelual ena lezihm mulu teamun eyamesegenku.\n\n` +

        `Especially cordinetachinin, thank you 🥰 ena eskahun dires ` +
        `abrewun yekoyut memhranochin mulu bemulu amsegnalehu.\n\n` +

        `Ena yalemakoraret siasystmren yeneberwun maths instructor ` +
        `ena kebadun logic kelal yaderegelinini. Logic instructor betam ` +
        `amsegnalehi, ewdachulaehu. Psycho arif neber. Geo yetwsene ` +
        `bizegegym timhrtu arif new koy 😍.\n\n` +

        `Ersichewu engilish instructrachinim thank you. Ke exam stayl ga ` +
        `yemhed yehone tmhirtin astemronal endatekaley ye hulum coursoch ` +
        `instructor, thank youu. Much love for you 🥰🥰🥰.\n\n` +

        `Ena ende hasab lewdefit bitastekakilut bye yemilewu instructeroch ` +
        `tyake biseru, especially physic course ley harif yihon ` +
        `yimeslegnal. Chershalehu abrewun simareu yekoyut tamriochim ` +
        `lemakerbachewu commentoch lesetachugn feedback. Thank you 😍`,
        mainKeyboard
    );

    await ctx.reply(
        `🏆 OUR GOLDEN PAST YEARS\n\n` +
        `ሰላም TTS እንዴት ናችሁ። የቲቶሪያላችሁ አባል በመሆኔ ` +
        `በጣም ኩራት ይሰማኛል።\n\n` +

        `በእውነት የሄን ቲቶሪያል በመጀመራችሁ በጣም ብዙ ` +
        `ተማሪ ተጠቃሚ እንደሆነ እርግጠኛ ነኝ። እኔም ` +
        `አንዱ የቲቶሪያላችሁ ተጠቃሚ ነኝ።\n\n` +

        `TTS በጣም አከብራቸዋለሁ እወዳቸዋለሁ 🙏🙏🙏\n\n` +

        `Attention Students! 📢\n\n` +

        `If you haven't already, I highly encourage you to join this ` +
        `channel! It's not just any educational channel; it’s the best ` +
        `place to enhance your knowledge and skills.\n\n` +

        `With engaging content, interactive sessions, and a supportive ` +
        `community, you won't want to miss out! ❤️📚`,
        mainKeyboard
    );

    await ctx.reply(
        `🏆 OUR GOLDEN PAST YEARS\n\n` +
        `እኛም አንተን በአቅማችን ማገዝ ስለቻልን ትልቅ ደስታ ይሰማናል! 😊\n\n` +
        `ከልብ እናመሰግናለን በሁሉም ነገር። ` +
        `መልካም እንድሆንልህ እንመኛለን! 🥰🙏🙌\n\n` +
        `❤️ Much Love & Respect`,
        mainKeyboard
    );
});


// ==================================================
// TEACHING METHODS
// ==================================================

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
// VIDEOS
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
// REGISTRATION MENU
// ==================================================

bot.hears("📝 Registration", async (ctx) => {

    ctx.session.registration = null;

    await ctx.reply(
        `📝 REGISTRATION\n\n` +
        `Please choose your program:`,
        registrationKeyboard
    );
});


// ==================================================
// PAYMENT DETAILS HELPER
// ==================================================

async function sendPaymentDetails(ctx, packageName, fee) {

    ctx.session.registration = {
        package: packageName,
        fee: fee,
        step: null,
        fullName: null,
        university: null
    };

    await ctx.reply(
        `💳 REGISTRATION & PAYMENT DETAILS\n\n` +

        `🏦 Payment Options\n\n` +

        `CBE: @1000553069387\n` +
        `Holder: Melkamu Godebo\n\n` +

        `Telebirr: +251958738409\n` +
        `Account Holder Name: Melkamu Godebo\n\n` +

        `📲 How to Complete Registration:\n\n` +

        `1. Pay ${fee} via CBE or Telebirr.\n\n` +

        `2. Take a screenshot of the payment receipt.\n\n` +

        `3. Press "📸 Send Payment Proof" below.\n\n` +

        `💰 Fee: ${fee}`,
        paymentKeyboard
    );
}


// ==================================================
// FRESHMAN ALONE
// ==================================================

bot.hears("👨‍🎓 Freshman Alone", async (ctx) => {

    await sendPaymentDetails(
        ctx,
        "Freshman Alone",
        "400 ETB"
    );
});


// ==================================================
// COC ALONE
// ==================================================

bot.hears("🎓 COC Alone", async (ctx) => {

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

    await sendPaymentDetails(
        ctx,
        "COC - Medicine, Pharmacy & Dental",
        "350 ETB"
    );
});


// ==================================================
// COC LAW
// ==================================================

bot.hears("⚖️ Law COC", async (ctx) => {

    await sendPaymentDetails(
        ctx,
        "COC - Law",
        "300 ETB"
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
// FRESHMAN + HEALTH
// ==================================================

bot.hears("🏥 Freshman + Health COC", async (ctx) => {

    await sendPaymentDetails(
        ctx,
        "Freshman + Health COC",
        "700 ETB"
    );
});


// ==================================================
// FRESHMAN + LAW
// ==================================================

bot.hears("⚖️ Freshman + Law COC", async (ctx) => {

    await sendPaymentDetails(
        ctx,
        "Freshman + Law COC",
        "600 ETB"
    );
});


// ==================================================
// START PAYMENT PROOF
// ==================================================

bot.hears("📸 Send Payment Proof", async (ctx) => {

    if (!ctx.session.registration) {

        await ctx.reply(
            `❌ Please select your registration package first.\n\n` +
            `Go to 📝 Registration and choose your program.`,
            registrationKeyboard
        );

        return;
    }

    ctx.session.registration.step = "name";

    await ctx.reply(
        `👤 Please enter your FULL NAME:`
    );
});


// ==================================================
// COLLECT NAME + UNIVERSITY
// ==================================================

bot.on("text", async (ctx, next) => {

    const registration = ctx.session?.registration;

    if (!registration) {
        return next();
    }

    // STEP 1
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

    // STEP 2
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

    // STEP 3
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

        const registration = ctx.session?.registration;

        if (!registration) {

            await ctx.reply(
                `❌ Please select your registration package first.`,
                registrationKeyboard
            );

            return;
        }

        if (
            registration.step !== "photo" ||
            !registration.fullName ||
            !registration.university
        ) {

            await ctx.reply(
                `❌ Please complete your Full Name and University information first.`
            );

            return;
        }


        const user = ctx.from;

        const telegramName =
            user.first_name || "Unknown";

        const username =
            user.username
                ? `@${user.username}`
                : "No username";

        const userId = user.id;


        const photos = ctx.message.photo;

        const fileId =
            photos[photos.length - 1].file_id;


        const caption =
            `💳 PAYMENT PROOF\n\n` +

            `📦 Package: ${registration.package}\n` +
            `💰 Fee: ${registration.fee}\n\n` +

            `👤 Full Name: ${registration.fullName}\n` +
            `🎓 University: ${registration.university}\n\n` +

            `📱 Telegram Name: ${telegramName}\n` +
            `🔗 Username: ${username}\n` +
            `🆔 Telegram ID: ${userId}`;


        await ctx.telegram.sendPhoto(
            GROUP_ID,
            fileId,
            {
                caption: caption
            }
        );


        const submittedName = registration.fullName;

        ctx.session.registration = null;


        await ctx.reply(
            `✅ Payment proof received!\n\n` +
            `Thank you, ${submittedName}.\n\n` +
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
// MAIN MENU
// ==================================================

bot.hears("🔙 Main Menu", async (ctx) => {

    ctx.session.registration = null;

    await ctx.reply(
        `🏠 MAIN MENU\n\n` +
        `Choose an option:`,
        mainKeyboard
    );
});


// ==================================================
// REGISTRATION BACK
// ==================================================

bot.hears("🔙 Registration", async (ctx) => {

    ctx.session.registration = null;

    await ctx.reply(
        `📝 REGISTRATION\n\n` +
        `Please choose your program:`,
        registrationKeyboard
    );
});


// ==================================================
// EXPRESS SERVER
// ==================================================

const app = express();

app.use(express.json());


// Health check
app.get("/", (req, res) => {

    res.status(200).send(
        "TTS Academy Bot is running! 🤖"
    );
});


// ==================================================
// TELEGRAM WEBHOOK
// ==================================================

app.post("/telegram/webhook", async (req, res) => {

    try {

        await bot.handleUpdate(req.body);

        res.sendStatus(200);

    } catch (error) {

        console.error("Webhook error:", error);

        res.sendStatus(500);
    }
});


// ==================================================
// START SERVER + SET WEBHOOK
// ==================================================

const PORT = process.env.PORT || 3000;

const RENDER_URL =
    process.env.RENDER_URL ||
    "https://paymentsubmissionbot.onrender.com";


app.listen(PORT, async () => {

    console.log(`🌐 Server running on port ${PORT}`);

    try {

        const webhookURL =
            `${RENDER_URL}/telegram/webhook`;

        await bot.telegram.setWebhook(webhookURL);

        console.log(
            `✅ Telegram webhook configured: ${webhookURL}`
        );

    } catch (error) {

        console.error(
            "❌ Failed to configure Telegram webhook:",
            error
        );
    }
});


console.log(
    "🤖 TTS Academy Bot is running in WEBHOOK mode!"
);


// ==================================================
// GRACEFUL STOP
// ==================================================

process.once("SIGINT", () => bot.stop("SIGINT"));

process.once("SIGTERM", () => bot.stop("SIGTERM"));

