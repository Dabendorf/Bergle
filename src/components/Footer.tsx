import React from "react";
import { Bergle } from "./Bergle";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="flex justify-center text-sm mt-8 mb-1">
      ❤️ <Bergle />? -
      <a
        className="underline pl-1"
        href="https://github.com/Dabendorf/Bergle"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("contributeOnGitHub")}
      </a>
    </footer>
  );
};

export default Footer;
