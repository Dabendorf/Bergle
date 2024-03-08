import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  no: {
    translation: {
      placeholder: "Område i Bergen",
      guess: "Gjett",
      share: "Dabb tjommiene dine",
      showOnOSM: "👀 på OpenStreetMap",
      welldone: "Bra jobbet!",
      unknownCountry: "Ukjent sted, det er meget kleint",
      alreadyGuessed: "Allerede gjettet før!",
      copy: "Resultatene ble kopiert til utklippstavlen",
      showCountry: "🗺️ Vis kartet!",
      cancelRotation: "🌀 Stop rotasjon",
      settings: {
        title: "Innstillinger",
        theme: "Tema",
        difficultyModifiers: "E' du ekte bergenser?",
        startsNextDay: "Bevis at du kan mer enn bare Hansa øl og Brann ved å prøve deg på Bergle... Begynner i morgen",
        noMapMode: "Uten kart",
        rotationMode: "Med et tilfeldig rotert kart",
      },
      contributeOnGitHub: "Bidra på GitHub!",
      mapTitle: "Kart over Norges viktigste by",
      mapMobileWarning: "Dette kartet er boss på mobil. Bruk den på større skjerm eller naviger kun med to fingre."
    },
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: "no",
  lng: "no",
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
