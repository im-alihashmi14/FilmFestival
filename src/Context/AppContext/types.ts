import React from 'react';

export interface AppContextStates {
  isDarkTheme: boolean;
}

export interface AppContextMethods {
  setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDarkTheme: () => void;
}

export type AppContextTypes = AppContextStates & AppContextMethods;
