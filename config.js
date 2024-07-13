//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU5mUWF3MnVMeVdhaFpVcUpVRGkyTU54QWtBRmI2QUtTdC9pWVR6WU0xQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2NCNlUxSUp1blMzT2IxTXFpVlF1eWJ3bi9TVER1cFMzTlMwbDVzcWVVcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTR3FtNW9JTndvUHZFNEZxSWM0azNJU1BZUFdkcVVaak5pWUR5Rk16b1ZrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaRUtLTkpZVXZJeHEzUkRRRExzVmM2bzlOc0dYckJQSWRMRisrSVRhMlRBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVQVzRsa3lCVkZLR1U3blljSTlaamR4VG84MzVlUTV0V3NlZ3hSdVJrblU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktLcGYvSVJZMUVoN3FYSzN5OUZUSHQxOTUyMmpCS1o5bHZEYXVzejVSVjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0hXYmMxNHBwRmFRdWZjb1FobW9maUdVb2JQOUZJTGN5QjQ2akI5aE4yND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnJPWGw0M29TWXpWQ2JMQ25ta1ZKSVVMUUY2L1cwT3EzTDBzUHBqekVGaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFIcWU4bWFSUENQN0V3T2Q2azMvUVhRVGxXK29Yd0lvWU9IVDBPcFozS1pabWhoaFhmVDg0NWNqL2FZVXNWZVdRNGNHcCt6VGR6bXVlalAvejlEUkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM2LCJhZHZTZWNyZXRLZXkiOiJ1VFo3V2l3bjQ5NUdsYy9IVzdwRW84VmxyUittTzBJc01JYndDakFiYSswPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU1NDExNTY4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE0NjlENjY5NjQ4MEJBMzY2QkJDREU4ODhFQzU3MUFCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA4MzIwNzB9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU1NDExNTY4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjE1NTMwQjc5NzZEOEMzOUI1QTQxN0M1REFBRkQ0QzU1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA4MzIwNzB9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU1NDExNTY4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjhBQUY1Q0FDMkEwNEVENzkwQTg3RjFDQjA0NzJBRDg2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA4MzIwNzJ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzU1NDExNTY4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdCOEMwRDAyNTg2MEZERkVCMzY1NUNBNjY2NjBDOTIzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA4MzIwNzJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im9hZ1NOd0EzVGFTRGdWUGdzUm5pZHciLCJwaG9uZUlkIjoiMDZiOTEwMTYtZGZkYS00MzNlLWIwMDktZWQ0NDdhNGZmNDRmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InB6UmM5TWpsWUlOMit3QUJBN00raW5nbU1Bdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrMjBST1dsNGt1ZVVjc0hySWJ0V1FHMzVBek09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMVpXRzEzVjUiLCJtZSI6eyJpZCI6Ijk0NzU1NDExNTY4OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSXJ1c2hhIE5pbWVzaCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkRlajkwQ0VMaWd4N1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiR0dBRzQ1d3NEc3ZTMHFGY0xwb25EYlRQVWJ2SmNUeDdYSi9TcGdHS2VrOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoidDN6MHd1WlhkYnk3MVdKM3dVd25ZYlZRZnBwbVFsV0x1TGpCMlhnZ3diQzk0MDdabHRLdmRCbld6MWJoN25TS0ZCMUhFMlJJOTVpdjRqTWxvZTBhQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6InRDMDM4VGxnYUdvSU90eXZOYlM5OWtLUytRUElIK2k1K1Z5T3VaL2dEcy9LYndPWmRkUGliQ1l1UmtWMmZsQnliNWdxM0hxdmJzOGVvYVYySUhUeERRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTU0MTE1Njg6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSaGdCdU9jTEE3TDB0S2hYQzZhSncyMHoxRzd5WEU4ZTF5ZjBxWUJpbnBQIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwODMyMDY5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU04UCJ9="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
