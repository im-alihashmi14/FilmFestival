import React, {createContext, useContext, useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {InitialLayout, Layout} from 'src/config/screenSize';
const AppContext = createContext<typeof InitialLayout>(InitialLayout);
export const AppContextProvider: React.FC = ({children}) => {
  const [layout, setLayout] = useState(InitialLayout);

  useEffect(() => {
    Dimensions.addEventListener('change', window => {
      const layoutIntance = new Layout(window.screen);
      setLayout(layoutIntance);
    });
  }, []);

  return <AppContext.Provider value={layout}>{children}</AppContext.Provider>;
};

export const useLayout = () => {
  return useContext(AppContext);
};

export default AppContext;
