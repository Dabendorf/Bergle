import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      placeholder: "Område i Bergen",
      guess: "Gjett",
      share: "Del",
      showOnGoogleMaps: "👀 på Google Maps",
      welldone: "Godt gjort",
      unknownCountry: "Ukjent sted!",
      copy: "Resultatene ble kopiert til utklippstavlen",
      showCountry: "🗺️ Vis kartet!",
      cancelRotation: "🌀 Stop rotasjon",
      settings: {
        title: "Innstillinger",
        theme: "Tema",
        difficultyModifiers: "Forvanskere",
        startingNextDay: "Begynner neste dag",
        noImageMode: "Uten kart",
        rotationMode: "Roter kart",
      },
      buyMeACoffee: "Kjøp oss en kaffe☕!",
    },
  }
};

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    resources,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
