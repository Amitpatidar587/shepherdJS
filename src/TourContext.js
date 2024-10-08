import React, { createContext, useContext, useState } from 'react';

const TourContext = createContext();

export const TourProvider = ({ children }) => {
  const [isTourActive, setIsTourActive] = useState(false);
  const [isActiveComponent,setIsActiveComponent]=useState('home')
  const endTour = () => setIsTourActive(false);
  const [isDarkMode,setIsDarkMode]=useState(false)


  return (
    <TourContext.Provider value={{ isTourActive,setIsTourActive, endTour ,isDarkMode,setIsDarkMode,isActiveComponent,setIsActiveComponent}}>
      {children}
    </TourContext.Provider>
  );
};

export const useTour = () => useContext(TourContext);
