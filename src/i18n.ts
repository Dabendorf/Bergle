import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  no: {
    translation: {
      placeholder: "Område i Bergen",
      guess: "Gjett",
      share: "Del",
      showOnOSM: "👀 på OpenStreetMap",
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
      contributeOnGitHub: "Bidra på GitHub!",
    },
  }
};

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'no',
    lng: 'no',
    resources,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
