require('dotenv').config();
const fs = require('fs');
const chalk = require('chalk');

// Contact details
global.sessionid = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"yOqQXHqb76a2D4igyF0GfzCnerD0+RNuUEqvaR7DF2E="},"public":{"type":"Buffer","data":"UT9NhpS0Rib5nU7ew59uss4xqXKpkR0urpnUVbXaqwo="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"SO6ocseREFwC/TnXoteYeSNGGdJ2MVRRoPfkLra0uXo="},"public":{"type":"Buffer","data":"kmBBcuwg0k8VqF9GXrMkbBEekcg7TvxxywKb3TBhzUc="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"qLuO9R1ybGI5EabfbGBQiGRTiqEhEm9FrVub9vKKvUs="},"public":{"type":"Buffer","data":"7qBbOGD2KpESrwaBHj2OZxR/fkCeD2FdHchJReAC9Vw="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"sDP2Lj+EQxV/XhWg4i3yHRjtKSlIX3pjEA2w2lPWJnw="},"public":{"type":"Buffer","data":"OXN0Pas+3cz5VOaRuIkAm5OPW7jJ5Vu3YDh+bqzpCVc="}},"signature":{"type":"Buffer","data":"iKRZ0wjc2AqySWCO1g0PUUh+wo3lGkGmbnFmpfOWaSbL83jW5Jd9fNVCUvOywOzLu9wvLZ3sRXcT1IoiwGPEjA=="},"keyId":1},"registrationId":126,"advSecretKey":"YslnE0Wmnf70OK6IIm5lqzYqwgk/O9PNp0oycU75btc=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"8MA1TM7A","me":{"id":"27687394237:60@s.whatsapp.net","lid":"168560890503416:60@lid","name":"️"},"account":{"details":"CKP58t0DEIPZ0sUGGAEgACgA","accountSignatureKey":"g2IpEnsCHkRMjHZtQebqR+VZqJBCZveShAzalb6+4is=","accountSignature":"oTcv2tVnEES176AAcK1XBmv7KnaxcxDSh1WmHwoKquS35kBg/+AwEEVf+U3qUFXAXrlguRIrnBNEq6/3dlTnCg==","deviceSignature":"gG5JQOpvj8TDnCoae9bJ3fuMVVk6CygISMXUH9GSo+cumYFjkpMAAcKhqXfPiIS25OiCMFUxh+J70mMZ5KKDhA=="},"signalIdentities":[{"identifier":{"name":"27687394237:60@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BYNiKRJ7Ah5ETIx2bUHm6kflWaiQQmb3koQM2pW+vuIr"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CA0ICA=="},"lastAccountSyncTimestamp":1756671115,"lastPropHash":"2V77qU","myAppStateKeyId":"AAAAAKWu"}';
global.ytname = process.env.YT_NAME || "YT: @EliteProTechs";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.ownernumber = process.env.OWNER_NUMBER || '27687394237';
global.ownername = process.env.OWNER_NAME || 'ElitePro';
global.botname = process.env.BOT_NAME || 'ELITE-PRO-V1';

// Default settings 
global.prefix = process.env.PREFIX || '.';
// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'false';
global.autoTyping = process.env.AUTO_TYPING === 'false';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'false';
global.autoread = process.env.AUTO_READ === 'falsee';
global.autobio = process.env.AUTO_BIO !== 'false'; // default true
global.anti92 = process.env.ANTI_92 === 'true';
global.autoswview = process.env.AUTO_SW_VIEW !== 'false'; // default true
global.welcome = process.env.WELCOME !== 'false'; // default true
global.autoreact = process.env.AUTO_REACT === 'false';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'false';

// Thumbnail profile picture
global.elitepropp = process.env.ELITE_PRO_PP || 'https://i.ibb.co/jk0ynvbn/7a8c4b5b617fa11a1e9a61190f427546.jpg';
// Default emoji
global.themeemoji = process.env.THEME_EMOJI || '👨‍💻';


// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'ELITEPRO\n\nContact: +2348109263390';
// Default settings 2
global.wm = process.env.WM || "Youtube @EliteProTechs";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Reply messages
global.mess = {
    done: '[✔] Task executed successfully.',
    prem: '[403] Access denied. Premium user required.',
    admin: '[401] Admin privileges required.',
    botAdmin: '[401] Bot must be an admin to run this command.',
    owner: '[403] Command restricted to bot owner.',
    group: '[400] Command available only in group chats.',
    private: '[400] Command available only in private chats.',
    wait: '[⏳] Processing... Please wait.',
    error: '[500] Unexpected error occurred.',
};

global.thumb = fs.readFileSync('./EliteProMedia/thumb.jpg');

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update'${__filename}'`));
    delete require.cache[file];
    require(file);
});
