require('dotenv').config();

const VOUGE_BOT_TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const SERVER_ID = process.env.SERVER_ID;

module.exports = {
    VOUGE_BOT_TOKEN,
    CLIENT_ID,
    SERVER_ID
};