const fs = require("fs");
module.exports.config = {
	name: "gali",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "abal",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("fuck")==0 || event.body.indexOf("mc")==0 || event.body.indexOf("chod")==0 || event.body.indexOf("bal")==0 || event.body.indexOf("bc")==0 || event.body.indexOf("maa ki chut")==0 || event.body.indexOf("xod")==0 || event.body.indexOf("behen chod")==0 || event.body.indexOf("🖕")==0 || event.body.indexOf("madarchod")==0 || event.body.indexOf("chudi")==0 || event.body.indexOf("gala gali")==0) {
		var msg = {
				body: "(Tui 𝐙𝐈𝐒𝐀𝐍 Boss Re Chinos Na Tor Mare Kutta Diya Chudi Khankir pola tor mare akashe niya dj ganer tale tale chudi notir put 𝐙𝐈𝐒𝐀𝐍 Boss re abba dak naile khobor ache tor khankir put)","(Tui 𝐙𝐈𝐒𝐀𝐍 Boss Re Chinos Na Tor Mare Kutta Diya Chudi Khankir pola tor mare akashe niya dj ganer tale tale chudi notir put 𝐙𝐈𝐒𝐀𝐍 Boss re abba dak naile khobor ache tor khankir put)","(Tui 𝐙𝐈𝐒𝐀𝐍 Boss Re Chinos Na Tor Mare Kutta Diya Chudi Khankir pola tor mare akashe niya dj ganer tale tale chudi notir put 𝐙𝐈𝐒𝐀𝐍 Boss re abba dak naile khobor ache tor khankir put)",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
