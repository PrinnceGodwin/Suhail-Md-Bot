const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348152828676";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_18_49_08_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDY2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDM2LFxuICAgICAgICA0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDIyLFxuICAgICAgICAyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDg0LFxuICAgICAgICAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg0LFxuICAgICAgICA2NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcsXG4gICAgICAgIDM4LFxuICAgICAgICA3NixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxODgsXG4gICAgICAgIDc4LFxuICAgICAgICA1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjksXG4gICAgICAgIDYsXG4gICAgICAgIDYxLFxuICAgICAgICA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MixcbiAgICAgICAgNjksXG4gICAgICAgIDU5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc2LFxuICAgICAgICA2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDk0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMixcbiAgICAgICAgMTgxLFxuICAgICAgICAzLFxuICAgICAgICA1OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMixcbiAgICAgICAgMjUzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDk2LFxuICAgICAgICA1NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NixcbiAgICAgICAgODMsXG4gICAgICAgIDMwLFxuICAgICAgICA0NixcbiAgICAgICAgMTUzLFxuICAgICAgICA5MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjdLd0ZXcnUvMWZRbG03MEkwSzdNa3hoZUVVRGlja3FoUkVSdmRyeFJCRXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImwyVGVYUFlsVF9TRC1VN09DVF9EZVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGJjYWUxZjItYTcxOS00YzMzLTg5NzItYzUwMTUzYzFlYmNjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NCxcbiAgICAgIDM3LFxuICAgICAgMzIsXG4gICAgICAxMzMsXG4gICAgICAyMzcsXG4gICAgICAyMjcsXG4gICAgICAxNjcsXG4gICAgICAxNDgsXG4gICAgICAxMDcsXG4gICAgICAyNDcsXG4gICAgICAxNDgsXG4gICAgICAxMjAsXG4gICAgICAxNjYsXG4gICAgICAzOCxcbiAgICAgIDI1MyxcbiAgICAgIDEzMyxcbiAgICAgIDY3LFxuICAgICAgMTQxLFxuICAgICAgNzAsXG4gICAgICAyMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA1LFxuICAgICAgMjI1LFxuICAgICAgNDQsXG4gICAgICAxOSxcbiAgICAgIDE3NCxcbiAgICAgIDMsXG4gICAgICAzMixcbiAgICAgIDY4LFxuICAgICAgNDIsXG4gICAgICAxOSxcbiAgICAgIDU4LFxuICAgICAgMTgzLFxuICAgICAgMTE1LFxuICAgICAgMjU0LFxuICAgICAgMTM4LFxuICAgICAgMjA5LFxuICAgICAgOTksXG4gICAgICAyNDYsXG4gICAgICAxNjgsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUOFNCNDU1UlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE1MjgyODY3Njo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUHJpbm5jZSBHb2R3aW4gMlwiLFxuICAgIFwibGlkXCI6IFwiMTM0MzY4NDcxMzM0OTIzOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUFdxMHd3UXM4dk50Z1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJETDV0alJ2Q0pCdDdUVWFwUjlhZXA0UUwxaFgwQi80eXY2RkFOaW1yb2lzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVUN2xJVU9ITjRXdTNSZXdPZ2lmaVovamxWU1l1dkpRMFZaUjd1TU04VWQzbW1TOFFBcndUWWZGNHlhSm10TUx0cFlldzgxd2xVZUdEOW02VGRjL0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi96cSsxYkZXdlNTcnBrV1FhVHEzb2VENmsrMUpUSldqcnJqS0VwL2E4emNPdUxwLzJHSUgyTEt2UFluQWJXWUxSUi91dG5KK3lndUxiaE1mZzBZc2dBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNTI4Mjg2NzY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1MTMwMTY3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUFZ2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQVnYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1VHBRQktzV3o2WmJ1NGdEZWtpUDVDM3g3YkFBUU54Wkd1Q1hmQThtSFFnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI2NTMxMTg2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTgxMjA3MDIwNjFcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
