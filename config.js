const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://smith1_user:NktpwkE2MTNUResDhnWRxed5wa2tFfs1@dpg-cqv5k1jtq21c73a2clsg-a.oregon-postgres.render.com/smith1"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/smith-pixe/RIVEX-MD";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/DvlAsj0BhA5FgQS7LARxBo";
global.website=process.env.GURL || "https://chat.whatsapp.com/DvlAsj0BhA5FgQS7LARxBo" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/3a71e89ed186e4b75352e.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/images (6).jpeg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝑷𝑶𝑾𝑬𝑹𝑬𝑫 𝑩𝒀 𓀬C̥ͦo̥ͦl̥ͦl̥ͦi̥ͦn̥ͦs̥ͦ𓅓-𝑴𝑫ᵗᵉᶜʰ!" 


global.devs = "254752588323" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254752588323";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/3a71e89ed186e4b75352e.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_06_08_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA3MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTExLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNixcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDg5LFxuICAgICAgICAzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAzNixcbiAgICAgICAgMTU3LFxuICAgICAgICA5MixcbiAgICAgICAgODIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDczLFxuICAgICAgICAxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MixcbiAgICAgICAgOTMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDczLFxuICAgICAgICA3NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgNzMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTExLFxuICAgICAgICA4MSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDkyLFxuICAgICAgICA2NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDcxLFxuICAgICAgICAxODQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNCxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNyxcbiAgICAgICAgODgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDk2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MixcbiAgICAgICAgODAsXG4gICAgICAgIDY5LFxuICAgICAgICA4OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMixcbiAgICAgICAgMTQxLFxuICAgICAgICA5MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxbTMwdEN3bmF3TWIyUWt5SDllWVA0OWVFbXJmbzJCVkVsbWRvMnozRnFZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4WmEyLWJJQVJOMkV2eFc5VFNNZU93XCIsXG4gIFwicGhvbmVJZFwiOiBcIjgyNWExMjY0LWIyZTEtNDI5Ny05NWUxLTQyY2ZmZTg1MWFjNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NixcbiAgICAgIDIwMSxcbiAgICAgIDg3LFxuICAgICAgNzAsXG4gICAgICAyMTUsXG4gICAgICAyMyxcbiAgICAgIDIxNCxcbiAgICAgIDI3LFxuICAgICAgNCxcbiAgICAgIDEzNCxcbiAgICAgIDIyNixcbiAgICAgIDExOCxcbiAgICAgIDI0OSxcbiAgICAgIDEzNSxcbiAgICAgIDExOCxcbiAgICAgIDkxLFxuICAgICAgMTQyLFxuICAgICAgMzcsXG4gICAgICAyNTIsXG4gICAgICA4M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OCxcbiAgICAgIDc0LFxuICAgICAgMTYwLFxuICAgICAgMTU0LFxuICAgICAgMTEyLFxuICAgICAgMTAzLFxuICAgICAgNDQsXG4gICAgICAxMzcsXG4gICAgICAxMTYsXG4gICAgICAzOSxcbiAgICAgIDIxMixcbiAgICAgIDAsXG4gICAgICAxODksXG4gICAgICAxNjYsXG4gICAgICA1MSxcbiAgICAgIDE3NyxcbiAgICAgIDE0OCxcbiAgICAgIDMzLFxuICAgICAgMTYxLFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZRRjFNNUxLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NTI1ODgzMjM6ODhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2MzI3MzM0MTU1OTAzMTo4OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPM1ZxcmNGRVArbXNiWUdHQW9nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImRSRWhSbGIzWTBJQmtmNGpabTg1LzB0YXhpRHZMNG5SYTJ1QVRFNXJUVWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicmdqcWplSzhScFprVlNVWjNadGEwc244SGZoOTZUSFhKWFBsMGhyWm9JTjdnc1liL0pKcEVCK29qWnFJMWpwWFdSZktjcHlWRDVnVERWTGdHZVdkRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTlhJZUZHOG1BOVp6VVgyUGQ2bitzUm1PQ1ZwYzNETW9RZ1dIekorYUw3NVM2MDI1Y2R4UkxEampMNUVsYytmWmVrVzg2MmhTZHRENGw3RnM4M2JnZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzUyNTg4MzIzOjg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI0NjY2NzU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ0haXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDSFouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3blVoQzgrZkt2L1c5dldPUmhHdUE0Sml1QkFHbEZndEwwVmZ1OG1JN0I4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NTgyMTk3NTcsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 𝑷𝑶𝑾𝑬𝑹𝑬𝑫 𝑩𝒀 𓀬C̥ͦo̥ͦl̥ͦl̥ͦi̥ͦn̥ͦs̥ͦ𓅓-𝑴𝑫ᵗᵉᶜʰ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝑹𝑰𝑽𝑬𝑿-𝑴𝑫",
  ownername:process.env.OWNER_NAME|| "𓀬C̥ͦo̥ͦl̥ͦl̥ͦi̥ͦn̥ͦs̥ͦ𓅓",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "RIVEX-MD"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
