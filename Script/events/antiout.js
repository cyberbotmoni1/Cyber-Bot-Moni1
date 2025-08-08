module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "Koi Ase Pichware Mai Lath Marta Hai?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`সরি 𝐙𝐈𝐒𝐀𝐍 বস আবালরে অ্যাড করতে পারলাম না \n ${name} এই বোকাচোদা হয়তো আমাকে ব্লক করছে নয়তো তার আইডিতে মেসেঞ্জার ই নাই তাই এড করতে পারলাম না😞 \n\n ──────·····✦·····──── \n 𝐓𝐄𝐀𝐌 𝐒𝐀𝐑𝐏𝐗 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁 | 𝐙𝐈𝐒𝐀𝐍 `, event.threadID)
   } else api.sendMessage(`শোন, ${name} এই গ্রুপ হইলো 𝐙𝐈𝐒𝐀𝐍 বস এর মাফিয়া গ্যাং! \n এখান থেকে যাইতে হইলে 𝐙𝐈𝐒𝐀𝐍 বস এর ক্লিয়ারেন্স লাগে! \nতুই 𝐙𝐈𝐒𝐀𝐍 বস এর পারমিশন ছাড়া লিভ নিছোস – তোকে আবার 𝐙𝐈𝐒𝐀𝐍 বস এর অনুমতিতে মাফিয়া স্টাইলে এড় দিলাম। \n\n ── ·······✦·······──── \n 𝐓𝐄𝐀𝐌 𝐒𝐀𝐑𝐏𝐗 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁 | 𝐙𝐈𝐒𝐀𝐍 `, event.threadID);
  })
 }
}
