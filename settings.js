/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUhSSmpMV1VZWVpxa2JXdkR1U01DUWxrSVJiSGF0cVhEM3Z5cHlKeHhIYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejlGcUZnRzVrVXBTL25PMEJZME9NNFQ5c2x4SDZ6T3lIeXF3bHpIN00xdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQld0WlJBZDRON0g0VVBIdVI4NmUwMG1EY1ZzdEJUY3lTWU5paGpFeDNVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXbit4Tmptc0tVUWRuTW51V1kzNDdmNWVleUQwVHZpbHdtR1pnY21lQ1ZzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9GVk1HQ01WUGJ3Vk45MDZWV080d1VUNFFXcm8yc3dmeTlHYmJoTHRZMTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpYNVdmZTdONFlqekZ0RUxSMG44dVlOTzUvMW5ZRStpV0hOR0NDbEdQR0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0cvaGVlNGlwNVhyVDgxamJzUFRBNmsrT3N3Mnh3MktNbXU0MG1DT0RrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMS9IZmh3ZndpYVhRTjhsb1VkQ3VtSXNqNHRORmZERkpXZzg4T2xnb2JYQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InM4NkJLc0NzSUsxbWV6aURVWXVRVjhkck1ZWHhmRG9BaFVFdTNNTVBQdUp6TzBleG9QRlNnZWE4RkdSRTJjZm1pYWQ4NHkxSG5uazBRZHJ2dlhOWENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTYsImFkdlNlY3JldEtleSI6IjhoekY1WW5sVkRrbXZzVzRjNko5MStINVc5N2dEaE5CSE93MERKQllScVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlRudzdxOUpHVFp1dHlQWTJ6WGFaUXciLCJwaG9uZUlkIjoiODRkMjcwMGUtZGJhZS00YjFiLTliNjYtMzBlYjNkYWJlNjBiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpzL3A0Z1FLMUZMbXV4MWp5NjJvRWpvSTNZVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1Zld2WHRqeXNBU0paSXNkMzRKT3JTcmFDb2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSkI3SzlFUTEiLCJtZSI6eyJpZCI6Ijk0NzY4NTQ0NDk2OjRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pMQ3hZUUJFUENjMjdrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imx5c3krVDJHbzNxbXl4R0laZ1JYSWZDbzA4TkhqTTdpb1lrSmR6SHBRRVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlFUbWxIOWUzOFgxcFBlSjBjelN3RnpRNXMyb0ZvL0IzMENNdnBjcUU1eDFQTHpUSVVIb3kvYzlaeHFrcnN0K01iZ08yYVM0QW51NTFNclR1TG1uQUNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvZFQzUkdJcE04Tm9nQ3hIYTU1WWtQRVV5M01HdTRtckZOeGg2NG1SWk05ZElnenlpU0NtQy9SM2RheFM5K2FJeEVDV2tERytidEQzM1JWaDA4Q3VCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY4NTQ0NDk2OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWmNyTXZrOWhxTjZwc3NSaUdZRVZ5SHdxTlBEUjR6TzRxR0pDWGN4NlVCRyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTY0NTA1MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOL0sifQ==';
const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "263";
const author = process.env.STICKER_AUTHOR || 'Akio';
const packname = process.env.PACKNAME || 'akio';
const dev = process.env.DEV || '263714757857';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || '𝙰𝙺𝙸𝙾-𝙼𝙳';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  mode,
  prefix,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
