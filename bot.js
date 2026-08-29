require("dotenv").config();

const { Telegraf, Markup } = require("telegraf");
const express = require("express");

const bot = new Telegraf(process.env.BOT_TOKEN);

const GROUP_ID = -1004425250477; // YOUR PRIVATE GROUP ID


// =========================
// MAIN MENU
// =========================

function mainMenu() {
    return Markup.inlineKeyboard([
        [
            Markup.button.callback("🏆 Our Golden Past Years", "golden"),
        ],
        [
            Markup.button.callback("📚 Teaching Methods", "teaching"),
        ],
        [
            Markup.button.callback("ℹ️ About Us", "about"),
        ],
        [
            Markup.button.callback("📝 Registration", "registration"),
        ],
    ]);
}


// =========================
// /START
// =========================

bot.start(async (ctx) => {
    const name = ctx.from.first_name || "there";

    await ctx.reply(
        `Hey ${name} 👋\n\n` +
        `Welcome to TTS Academy! 🎓\n\n` +
        `Please choose an option below:`,
        mainMenu()
    );
});


// =========================
// GOLDEN PAST YEARS
// =========================

bot.action("golden", async (ctx) => {

    await ctx.answerCbQuery();

    await ctx.editMessageText(
        `🏆 *OUR GOLDEN PAST YEARS*\n\n` +

        `🙏🙏 *A huge thank you to the best math teacher*\n\n` +

        `They say a good teacher explains, but a great teacher inspires. ` +
        `Maths teacher helped me secure my *A* by breaking down the most ` +
        `complex problems into simple steps.\n\n` +

        `Thanks a lot all TTS teachers and members 🙏🙏\n\n` +

        `━━━━━━━━━━━━━━\n\n` +

        `⭐ *Our students' success is our greatest achievement.*\n\n` +

        `━━━━━━━━━━━━━━`,
        {
            parse_mode: "Markdown",
            ...Markup.inlineKeyboard([
                [Markup.button.callback("🔙 Main Menu", "main")]
            ])
        }
    );
});


// =========================
// TEACHING METHODS
// =========================

bot.action("teaching", async (ctx) => {

    await ctx.answerCbQuery();

    await ctx.editMessageText(
        `📱 *HOW WILL YOU LEARN?*\n\n` +

        `Everything is delivered on *Telegram* and on *Application!* 🎓\n\n` +

        `You get:\n\n` +

        `🎥 Ethiopian & International Videos\n\n` +
        `📄 Intensive PPTs & PDFs\n\n` +
        `🎙️ Audio Lessons\n\n` +
        `💬 Telegram Text Notes\n\n` +
        `📝 Daily MCQs & Weekly Mock Tests!\n\n` +

        `> Own Mid and Final Exam preparation with a complete learning system. 💪📚`,
        {
            parse_mode: "Markdown",
            ...Markup.inlineKeyboard([
                [Markup.button.callback("🔙 Main Menu", "main")]
            ])
        }
    );
});


// =========================
// ABOUT US
// =========================

bot.action("about", async (ctx) => {

    await ctx.answerCbQuery();

    await ctx.editMessageText(
        `ℹ️ *ABOUT US*\n\n` +
        `Learn more about TTS Academy through our videos. 🎥\n\n` +
        `Choose a video below:`,
        {
            parse_mode: "Markdown",
            ...Markup.inlineKeyboard([
                [Markup.button.callback("🎥 About TTS - Video 1", "video1")],
                [Markup.button.callback("🎥 About TTS - Video 2", "video2")],
                [Markup.button.callback("🎥 About TTS - Video 3", "video3")],
                [Markup.button.callback("🔙 Main Menu", "main")]
            ])
        }
    );
});


// =========================
// ABOUT US VIDEOS
// =========================

// Replace the placeholders with your actual Telegram video file IDs.

bot.action("video1", async (ctx) => {

    await ctx.answerCbQuery();

    await ctx.replyWithVideo(
        "VIDEO_FILE_ID_1",
        {
            caption: "🎥 About TTS Academy"
        }
    );
});

bot.action("video2", async (ctx) => {

    await ctx.answerCbQuery();

    await ctx.replyWithVideo(
        "VIDEO_FILE_ID_2",
        {
            caption: "🎥 About TTS Academy"
        }
    );
});

bot.action("video3", async (ctx) => {

    await ctx.answerCbQuery();

    await ctx.replyWithVideo(
        "VIDEO_FILE_ID_3",
        {
            caption: "🎥 About TTS Academy"
        }
    );
});


// =========================
// REGISTRATION MAIN MENU
// =========================

bot.action("registration", async (ctx) => {

    await ctx.answerCbQuery();

    await ctx.editMessageText(
        `📝 *REGISTRATION*\n\n` +
        `Please choose your program:`,
        {
            parse_mode: "Markdown",
            ...Markup.inlineKeyboard([
                [
                    Markup.button.callback(
                        "👨‍🎓 Freshman Alone",
                        "freshman_alone"
                    )
                ],
                [
                    Markup.button.callback(
                        "🎓 COC Alone",
                        "coc_alone"
                    )
                ],
                [
                    Markup.button.callback(
                        "👨‍🎓 + 🎓 Freshman + COC",
                        "freshman_coc"
                    )
                ],
                [
                    Markup.button.callback("🔙 Main Menu", "main")
                ]
            ])
        }
    );
});


// =========================
// FRESHMAN ALONE
// =========================

bot.action("freshman_alone", async (ctx) => {

    await ctx.answerCbQuery();

    await ctx.editMessageText(
        `💳 *REGISTRATION & PAYMENT DETAILS*\n\n` +

        `🏦 *Payment Options*\n\n` +

        `*CBE:* @1000553069387\n` +
        `Holder: Melkamu Godebo\n\n` +

        `*Telebirr:* +251958738409\n` +
        `Account Holder Name: Melkamu Godebo\n\n` +

        `📲 *How to Complete Registration:*\n\n` +

        `1. Pay *400 ETB* via CBE or Telebirr.\n\n` +
        `2. Take a screenshot of the payment receipt.\n\n` +
        `3. Send the screenshot *HERE in this bot*.\n\n` +

        `💰 *Fee: 400 ETB*`,
        {
            parse_mode: "Markdown",
            ...Markup.inlineKeyboard([
                [
                    Markup.button.callback(
                        "📸 Send Payment Proof",
                        "payment"
                    )
                ],
                [
                    Markup.button.callback(
                        "🔙 Registration",
                        "registration"
                    )
                ]
            ])
        }
    );
});


// =========================
// COC ALONE
// =========================

bot.action("coc_alone", async (ctx) => {

    await ctx.answerCbQuery();

    await ctx.editMessageText(
        `🎓 *COC ALONE*\n\n` +
        `Choose your field:`,
        {
            parse_mode: "Markdown",
            ...Markup.inlineKeyboard([
                [
                    Markup.button.callback(
                        "💊 Medicine, Pharmacy & Dental",
                        "coc_health"
                    )
                ],
                [
                    Markup.button.callback(
                        "⚖️ Law COC",
                        "coc_law"
                    )
                ],
                [
                    Markup.button.callback(
                        "🔙 Registration",
                        "registration"
                    )
                ]
            ])
        }
    );
});


// =========================
// COC HEALTH
// =========================

bot.action("coc_health", async (ctx) => {

    await ctx.answerCbQuery();

    await ctx.editMessageText(
        `💳 *REGISTRATION & PAYMENT DETAILS*\n\n` +

        `🏦 *Payment Options*\n\n` +

        `*CBE:* @1000553069387\n` +
        `Holder: Melkamu Godebo\n\n` +

        `*Telebirr:* +251958738409\n` +
        `Account Holder Name: Melkamu Godebo\n\n` +

        `📲 *How to Complete Registration:*\n\n` +

        `1. Pay *350 ETB* via CBE or Telebirr.\n\n` +
        `2. Take a screenshot of the payment receipt.\n\n` +
        `3. Send the screenshot *HERE in this bot*.\n\n` +

        `💰 *Fee: 350 ETB*`,
        {
            parse_mode: "Markdown",
            ...Markup.inlineKeyboard([
                [
                    Markup.button.callback(
                        "📸 Send Payment Proof",
                        "payment"
                    )
                ],
                [
                    Markup.button.callback(
                        "🔙 COC Alone",
                        "coc_alone"
                    )
                ]
            ])
        }
    );
});


// =========================
// COC LAW
// =========================

bot.action("coc_law", async (ctx) => {

    await ctx.answerCbQuery();

    await ctx.editMessageText(
        `💳 *REGISTRATION & PAYMENT DETAILS*\n\n` +

        `🏦 *Payment Options*\n\n` +

        `*CBE:* @1000553069387\n` +
        `Holder: Melkamu Godebo\n\n` +

        `*Telebirr:* +251958738409\n` +
        `Account Holder Name: Melkamu Godebo\n\n` +

        `📲 *How to Complete Registration:*\n\n` +

        `1. Pay *300 ETB* via CBE or Telebirr.\n\n` +
        `2. Take a screenshot of the payment receipt.\n\n` +
        `3. Send the screenshot *HERE in this bot*.\n\n` +

        `💰 *Fee: 300 ETB*`,
        {
            parse_mode: "Markdown",
            ...Markup.inlineKeyboard([
                [
                    Markup.button.callback(
                        "📸 Send Payment Proof",
                        "payment"
                    )
                ],
                [
                    Markup.button.callback(
                        "🔙 COC Alone",
                        "coc_alone"
                    )
                ]
            ])
        }
    );
});


// =========================
// FRESHMAN + COC
// =========================

bot.action("freshman_coc", async (ctx) => {

    await ctx.answerCbQuery();

    await ctx.editMessageText(
        `👨‍🎓 + 🎓 *FRESHMAN + COC*\n\n` +
        `Choose your program:`,
        {
            parse_mode: "Markdown",
            ...Markup.inlineKeyboard([
                [
                    Markup.button.callback(
                        "🏥 Freshman + Health COC",
                        "freshman_health"
                    )
                ],
                [
                    Markup.button.callback(
                        "⚖️ Freshman + Law COC",
                        "freshman_law"
                    )
                ],
                [
                    Markup.button.callback(
                        "🔙 Registration",
                        "registration"
                    )
                ]
            ])
        }
    );
});


// =========================
// FRESHMAN + HEALTH
// =========================

bot.action("freshman_health", async (ctx) => {

    await ctx.answerCbQuery();

    await ctx.editMessageText(
        `💳 *REGISTRATION & PAYMENT DETAILS*\n\n` +

        `🏦 *Payment Options*\n\n` +

        `*CBE:* @1000553069387\n` +
        `Holder: Melkamu Godebo\n\n` +

        `*Telebirr:* +251958738409\n` +
        `Account Holder Name: Melkamu Godebo\n\n` +

        `📲 *How to Complete Registration:*\n\n` +

        `1. Pay *700 ETB* via CBE or Telebirr.\n\n` +
        `2. Take a screenshot of the payment receipt.\n\n` +
        `3. Send the screenshot *HERE in this bot*.\n\n` +

        `💰 *Fee: 700 ETB*`,
        {
            parse_mode: "Markdown",
            ...Markup.inlineKeyboard([
                [
                    Markup.button.callback(
                        "📸 Send Payment Proof",
                        "payment"
                    )
                ],
                [
                    Markup.button.callback(
                        "🔙 Freshman + COC",
                        "freshman_coc"
                    )
                ]
            ])
        }
    );
});


// =========================
// FRESHMAN + LAW
// =========================

bot.action("freshman_law", async (ctx) => {

    await ctx.answerCbQuery();

    await ctx.editMessageText(
        `💳 *REGISTRATION & PAYMENT DETAILS*\n\n` +

        `🏦 *Payment Options*\n\n` +

        `*CBE:* @1000553069387\n` +
        `Holder: Melkamu Godebo\n\n` +

        `*Telebirr:* +251958738409\n` +
        `Account Holder Name: Melkamu Godebo\n\n` +

        `📲 *How to Complete Registration:*\n\n` +

        `1. Pay *600 ETB* via CBE or Telebirr.\n\n` +
        `2. Take a screenshot of the payment receipt.\n\n` +
        `3. Send the screenshot *HERE in this bot*.\n\n` +

        `💰 *Fee: 600 ETB*`,
        {
            parse_mode: "Markdown",
            ...Markup.inlineKeyboard([
                [
                    Markup.button.callback(
                        "📸 Send Payment Proof",
                        "payment"
                    )
                ],
                [
                    Markup.button.callback(
                        "🔙 Freshman + COC",
                        "freshman_coc"
                    )
                ]
            ])
        }
    );
});


// =========================
// PAYMENT
// =========================

bot.action("payment", async (ctx) => {

    await ctx.answerCbQuery();

    await ctx.reply(
        `📸 *Payment Proof*\n\n` +
        `Please send your payment screenshot here.\n\n` +
        `Make sure the receipt is clear and readable.`,
        {
            parse_mode: "Markdown"
        }
    );
});


// =========================
// RECEIVE PAYMENT SCREENSHOT
// =========================

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

        // Send screenshot + sender information
        // to the private group
        await ctx.telegram.sendPhoto(
            GROUP_ID,
            fileId,
            {
                caption: caption
            }
        );

        // Tell user
        await ctx.reply(
            `✅ Payment proof received!\n\n` +
            `We will accept you after we verify your payment.`
        );

    } catch (error) {

        console.error("PAYMENT ERROR:", error);

        await ctx.reply(
            `❌ I couldn't receive your payment proof.\n\n` +
            `Please try again.`
        );
    }
});


// =========================
// MAIN MENU BUTTON
// =========================

bot.action("main", async (ctx) => {

    await ctx.answerCbQuery();

    await ctx.editMessageText(
        `🏠 *MAIN MENU*\n\n` +
        `Welcome back! Choose an option:`,
        {
            parse_mode: "Markdown",
            ...mainMenu()
        }
    );
});


// =========================
// EXPRESS SERVER FOR RENDER
// =========================

const app = express();

app.get("/", (req, res) => {
    res.send("TTS Academy Bot is running!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🌐 Server running on port ${PORT}`);
});


// =========================
// START BOT
// =========================

bot.launch();

console.log("🤖 TTS Academy Bot is running!");