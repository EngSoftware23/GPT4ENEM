export const environment = {
    production: false,
    BACKEND_API_REST_URL: process.env["PLCD_BACKEND_URL"],
    GOOGLE_KEY: process.env["PLCD_GOOGLE_KEY"] || 'NULL',
    API_KEY_FIREBASE: process.env["PLCD_API_KEY_FIREBASE"],
    AUTH_DOMAIN: process.env["PLCD_AUTH_DOMAIN"],
    PROJECT_ID: process.env["PLCD_PROJECT_ID"],
    STORAGE_BUCKET: process.env["PLCD_STORAGE_BUCKET"],
    MESSAGING_SENDER_ID: process.env["PLCD_MESSAGING_SENDER_ID"],
    APP_ID: process.env["PLCD_APP_ID"],
    USER:  {},
    USER_PHOTO_URL: '',
    USER_NAME: '',
    USER_EMAIL: '',
    USER_UID: ''
};
  