export const environment = {
    production: false,
    GOOGLE_KEY: process.env["GOOGLE_KEY"] || 'NULL',
    API_KEY_FIREBASE: process.env["API_KEY_FIREBASE"],
    AUTH_DOMAIN: process.env["AUTH_DOMAIN"],
    PROJECT_ID: process.env["PROJECT_ID"],
    STORAGE_BUCKET: process.env["STORAGE_BUCKET"],
    MESSAGING_SENDER_ID: process.env["MESSAGING_SENDER_ID"],
    APP_ID: process.env["APP_ID"]
};
  