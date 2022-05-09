import React, { createContext, useState, useEffect, useCallback } from 'react';
import { HOCProps, AlertStateObject, ShowAlertFunction } from '../models/types';

const UiContext = createContext<{
  alert: AlertStateObject | null;
  resumeIsShown: boolean;
  sideDrawerIsShown: boolean;
  theme: string;
  showAlert: ShowAlertFunction;
  setAlert: React.Dispatch<React.SetStateAction<AlertStateObject | null>>;
  toggleResume: () => void;
  toggleSideDrawer: () => void;
  toggleTheme: () => void;
}>({
  alert: null,
  resumeIsShown: false,
  sideDrawerIsShown: false,
  theme: 'light',
  showAlert: () => {},
  setAlert: () => {},
  toggleResume: () => {},
  toggleSideDrawer: () => {},
  toggleTheme: () => {},
});

const isBrowser = typeof window !== "undefined";

export const UiContextProvider = ({ children }: HOCProps) => {
  const [alert, setAlert] = useState<AlertStateObject | null>(null);
  const [resumeIsShown, setResumeIsShown] = useState(false);
  const [sideDrawerIsShown, setSideDrawerIsShone] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (isBrowser) {
      const localTheme = window.localStorage.getItem('theme');
      localTheme && setTheme(localTheme);
    }
  }, []);

  const setMode = (mode: string) => {
    if (isBrowser) {
      window.localStorage.setItem('theme', mode);
      setTheme(mode);
    }
  };

  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  const toggleSideDrawer = () => {
    setSideDrawerIsShone((prevState) => !prevState);
  };

  const toggleResume = () => {
    setResumeIsShown((prevState) => !prevState);
  };

  const showAlert: ShowAlertFunction = useCallback(
    (type, message, error) => {
      let alertMessage = message;

      if (type === 'error' && error instanceof Error) {
        alertMessage = error.message;
      }

      setAlert({
        message: alertMessage,
        type: type,
      });
    },
    [setAlert]
  );

  const contextValue = {
    alert,
    resumeIsShown,
    sideDrawerIsShown,
    theme,
    showAlert,
    setAlert,
    toggleResume,
    toggleSideDrawer,
    toggleTheme,
  };

  return (
    <UiContext.Provider value={contextValue}>{children}</UiContext.Provider>
  );
};

export default UiContext;
