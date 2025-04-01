const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUS5KiSBi+SkdutVoBQTSiIgZRFFFREUUmepFAiggmj0xArHA5yz7ALOcOdYq5Rd1kgnpE1WK6pmaXkSRffvk9/geA44AgDVWg/wCSLCggRfWSVgkCfTDIDweUgSbwIIWgD/IBT5mdkVpWlnonE+IyVZhkjzQsyQdh7ETyeNSgFhG283twa4Ikd6LA/QRwxHS47dDR9Tiye+HmkmXsWdfaPjdmzABf5qeGyGVqrJ6q+B7cakQYZAH2R8kRnVEGIw1VSxhkX6OPZkh1R6Mhv8rTKJn4eNIWJ6tTejnmk5WgT+RFYZMJX21Z92v0K3IdjPfGGhuzsrXVs42u5Nd8YFylrmgJfut81k4bJ68mUvhCnwQ+Rp7qIUwDWn1Zd3bhpsYSHrHYKjuOveh1Lww/UeVTsO7JRC+t9ci5Mi1V3KlfI56ZfDUqFTvnKmuXKA6jGopmTjA/Y8vSlHAOQ8+27KWzIx+JL7O3rIT/R/dUUTuTo01PyGSWldvaMr6765aL6HJlpvOGP+dRduK3ZBWZX6OfDnik7LmN3TiYggfdgidRzztvDWcscYYgOzDUXWFbjCfzd/qQ5tlnLPfh1R4FR3OZRtXobBSlOR8K7PVisFtr6ngjcdmqjsJ5eHKusJxKYTcJKp6L863UC1tOqpmqjcJiPa0My3GQNWOjRkP2759fFKJK9UCfuTVBhvyA0AzSIMb1Hsv0mgB6hYHcDNFnecEgLOZRWFSa2XXHontt211+JzJddd0SYsmyZOa4Mk5KdMTte9AESRa7iBDkTQJC46yaI0Kgjwjo//6jCTC60Bfj6us4pgkOQUaoifMkiqH35urbR+i6cY6pUWFXrhcoA/32+zaiNMA+qXXMMczcY1Ag+QgpAf0DjAi6NYGHisBFNR443g2xE8fSWjLiBbUWG+46Z/ya8jHGL0f4dhuKHa53x3Fd767DcsKd2D04dz1eQAzveR7faYMmCF47U//zSwuPopNMrlN5R6Oo3Ko6IxeWrMxTnQmfbXjRHmXIA32a5agJHOiGebKJQ4Q/wZ0m54uZN46Dhrb29YRz9fjasJZxRfcfcF88Bf2H9zklx16NpwhjZTmSJqAJzs8RDOqXswLXFTuiIDIC32e7v5HvZS0kTJLvGFHQBBjWp8Hffz49/vX0+PPb5enx59PjH9+4+s5XQ2o0D1EYRAT0gawahNXV4WjW8MhMHI+luS/JvgTeDXxrwkvSHN9f9tRVy0m3U5MtdfdUinhEFS1pmfteXvXYHR3P/bMS7u//BQT0Qau3bB8ExLKbcW/qBcWOt057hofKSexchDTTq7lkaYc5PhUj3SkgTm3nnLGmTzfTjbTAiq11Y2nlKuZWRSJSfMFipLo2b0H6eNkQrxt7aTVXxFZ7b29LTdr1AnXmlLOdLUchapn+amNnravNMAwhjCoyWtxesFrPjMbrZXKZNCJGDOhObxhr/xrrWk4Hrx19nhHR62wOntvz8Bq7Q4CeR92rIf9p3HsD2rfmB4zX4fmLlA12HXXYMkZLVoiM7YIMsSoup5fZ2kgPzHjpkMKLsvVJnR7tMbjdfjRBEkF6iLMz6ANydiBogggSKr03eBOcEaHwnIA+0+1wPMvxnfbtH96ljY/3BwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

