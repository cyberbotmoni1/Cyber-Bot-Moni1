module.exports.config = {
  name: "trollhack",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Ferdous Wahid",
  description: "Fake hack the mentioned user",
  commandCategory: "fun",
  usages: "@tag",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event }) {
  const mention = Object.keys(event.mentions)[0];
  if (!mention) return api.sendMessage("Tag someone to hack! 💻", event.threadID);

  const name = event.mentions[mention].replace("@", "");

  const steps = [
    `💻 Initiating hack on ${name}...`,
    "📡 Connecting to Facebook servers...",
    "🔓 Bypassing 2FA...",
    "📂 Accessing private messages...",
    "📁 Downloading embarrassing photos...",
    "💳 Stealing credit card info... (wow, broke)",
    "📤 Uploading data to dark web...",
    "✅ Hack complete! You now own their account 😈",
    "🧠 SIR/MAM APNAR ACCOUNT BOSS 𝐙𝐈𝐒𝐀𝐍 ER KACHE DEWA HOYECHE ☣️",
    `👿  ${name}... JODI APNI APNAR ACCOUNT BACK CHAN TAHOLE AMAR BOSS 𝐙𝐈𝐒𝐀𝐍 ER SATHE JOGAJOG KORUN👿`,
  ];

  for (let i = 0; i < steps.length; i++) {
    setTimeout(() => {
      api.sendMessage(steps[i], event.threadID);
    }, i * 2000);
  }
};
