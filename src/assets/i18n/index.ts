import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./languages/en";
import vi from "./languages/vi";

const config = (): void => {
  i18n.use(initReactI18next).init({
    resources: {
      en,
      vi,
    },
    lng: localStorage.getItem("language-code") || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
};

const changeLanguage = (lng: string): void => {
  i18n.changeLanguage(lng).then((t) => {
    t("key");
  });
};

export default {
  config,
  changeLanguage,
};
