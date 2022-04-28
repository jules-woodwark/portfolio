import React, { useState, useEffect } from 'react';
import { HOCProps } from '../models/types';

const UiContext = React.createContext<{
  theme: string;
  resumeIsShown: boolean;
  toggleTheme: () => void;
  toggleResume: () => void;
}>({
  theme: 'light',
  resumeIsShown: false,
  toggleTheme: () => {},
  toggleResume: () => {},
});

export const UiContextProvider = ({ children }: HOCProps) => {
  const [theme, setTheme] = useState('light');
  const [resumeIsShown, setResumeIsShown] = useState(false);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  const toggleResume = () => {
    setResumeIsShown((prevState) => !prevState);
  };

  const contextValue = {
    theme: theme,
    resumeIsShown: resumeIsShown,
    toggleTheme: toggleTheme,
    toggleResume: toggleResume,
  };

  return (
    <UiContext.Provider value={contextValue}>{children}</UiContext.Provider>
  );
};

export default UiContext;
