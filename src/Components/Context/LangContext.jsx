import { createContext, useState } from 'react';
import i18n from '../Language/i18n.jsx';

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);

  };

  const translate = (key) => {
    return i18n.t(key);
  };
  return (
    <LangContext.Provider value={{ currentLanguage, handleChangeLanguage, t: translate }}>
      {children}
    </LangContext.Provider>
  );
};