import i18next from "i18next";

const english = require("./english");
const german = require("./german");

i18next.init({
  lng: localStorage.getItem("lng") || "de",
  debug: false,
  resources: {
    en: { translation: english },
    de: { translation: german }
  }
});


// Add this line to your app entrypoint. Usually it is src/index.js
// import './i18n/init';