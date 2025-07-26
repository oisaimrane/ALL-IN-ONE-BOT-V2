require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "",
    clientID: process.env.CLIENT_ID || "1261255639955410995", 
    prefix: process.env.PREFIX || "!", 
    ownerID: process.env.OWNER_ID || "793877159966015548",
    guildID: process.env.GUILD_ID || "1309556698901381150",
    SpotifyID: process.env.SPOTIFY_ID || "94e2f2da021f4d1aa8b585dcfb65e201",
    SpotifySecret: process.env.SPOTIFY_SECRET || "98e7a5626ddf4458a53925a9933926bb",
    mongourl: process.env.MONGO_URL || "mongodb+srv://sestro:sestro@cluster0.zldd64l.mongodb.net/?retryWrites=true&w=majority",
    embedColor: process.env.EMBED_COLOR || 0xcc0000,
    logs: process.env.LOGS || "",
    logs1: process.env.LOGS1 || "",
    errorLogsChannel: process.env.ERROR_LOGS_CHANNEL || "1309556699647967253",
    buglogschannel: process.env.BUG_LOGS_CHANNEL || "1309556699647967253",
    SearchPlatform: "youtube",
    AggregatedSearchOrder: process.env.AGGREGATED_SEARCH_ORDER ||"youtube ,youtube music,youtube,soundcloud",
    links: {
        img: process.env.IMG || 'https://discord.com/channels/1247444478512336896/1247444478713659421/1254450678152167425', 
        support: process.env.SUPPORT || 'https://discord.gg/coderplanet',
        invite: process.env.INVITE || 'https://discord.com/oauth2/authorize?client_id=1200011771151396864&permissions=279205464384&scope=applications.commands%20bot' 
    },
    nodes: [
           {
            host: process.env.NODE_HOST || "ambani.ncop.tech",
            port: parseInt(process.env.NODE_PORT || "2334"),
            password: process.env.NODE_PASSWORD || "ambaniop",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),
            }
           ],

}


function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
