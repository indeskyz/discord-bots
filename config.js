require('dotenv').config();

const VOUGE_BOT_TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const SERVER_ID = process.env.SERVER_ID;
const PROD = process.env.PROD;
const REACTIONS = ["✅"]

const SERVER_ROLES = {
    verified: 'Verified',
    audience: 'audience'
}

const SERVER_NAMES = {
    verification: 'verify-yourself',
    test:         'verification',
    
}

const VALID_USER = process.env.USER_ID

const VERIFICATION_CHANNEL = PROD === 'TRUE' ? SERVER_NAMES.verification : SERVER_NAMES.test;

const SERVER_RULES = `
1. Please use the server channels for the reason they are meant to be used. 
2. No discrimination to any member due to their race, religion, sexual orientation. 
3. No any form of doxxing, IP grabbing links to the server. 
4. Please use ENGLISH ONLY in this server. 
5. Have fun in the server.
6. This is not a Meme server so if you came looking for memes and edgy humour you’re not welcomed here.
7. No gore in server.
`

module.exports = {
    VOUGE_BOT_TOKEN,
    CLIENT_ID,
    SERVER_ID, 
    SERVER_NAMES,
    REACTIONS,
    SERVER_ROLES,
    SERVER_NAMES,
    VERIFICATION_CHANNEL,
    VALID_USER,
    SERVER_RULES,
};