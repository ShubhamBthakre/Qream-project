import { createContext, useContext } from "react";

const businessContext = createContext({
  activeNavbarTitle: "",
  setActiveNavbarTitle: (title) => {},
  itemDetails: "",
  setItemDetails: (data) => {},
  isNavbarOpen: true,
  setNavbarOpen: () => {},
});

export const BusinessContextProvider = businessContext.Provider;

export const useBusinessContext = () => {
  return useContext(businessContext);
};
