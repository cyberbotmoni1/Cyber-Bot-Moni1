module.exports.config = {
  name: "trollmurgi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Ferdous Wahid",
  description: "Fake murgi the mentioned user",
  commandCategory: "fun",
  usages: "@tag",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event }) {
  const mention = Object.keys(event.mentions)[0];
  if (!mention) return api.sendMessage("Tag someone to murgi! 🥵", event.threadID);

  const name = event.mentions[mention].replace("@", "");

  const steps = [
    `👿 এই খানকীর পোলা আমার বস 𝐙𝐈𝐒𝐀𝐍 এর সাথে লাগছিস কেন ${name}...`,
    "👿তুই চিনিস আমার বস 𝐙𝐈𝐒𝐀𝐍 রে তোরে চুদতে চুদতে ভার্চুয়াল ছাড়া কইরা ফেলবে মাগীর পুত",
    "👿তোর মারে কুত্তা দিয়া চুদী নডির পুত",
    "☣️ শোন তুই আমার বস 𝐙𝐈𝐒𝐀𝐍 এর পা চাটা কুত্তা বুজছিস",
    "🤬𝐙𝐈𝐒𝐀𝐍 নাম টা মাথায় রাখিস নাহলে কনডম ছাড়াই তোর মারে আবার আমার বস 𝐙𝐈𝐒𝐀𝐍 রে দিয়া চুদে নিবো বোকাচোদা🤬",
    "🥵তোর মার গরম ভোদায় নরম করে উম্মাহ🥵(wow, broke)",
    "আর একবার যদি আমার বস 𝐙𝐈𝐒𝐀𝐍এর নামে উল্টাপাল্টা কথা বলিস তোর মার পচা মাসিক তোরে খাওয়ামু মাথায় রাখিস",
    "☣️এখনো সময় আছে আমার বস 𝐙𝐈𝐒𝐀𝐍 রে আব্বা ডাক😈",
    "আর জিসি থেকে লিভ নে যাওয়ার আগে সালাম দিয়ে যা আমার বস 𝐙𝐈𝐒𝐀𝐍 কে🤣"
  ];

  for (let i = 0; i < steps.length; i++) {
    setTimeout(() => {
      api.sendMessage(steps[i], event.threadID);
    }, i * 2000);
  }
};
