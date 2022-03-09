import { useDisclosure } from "@chakra-ui/react";
import React, { createContext, useContext } from "react";

interface NavbarContextProps {
  isNavbarOpen: boolean;
  onNavbarToggle: () => void;
}

const NavbarContext = createContext<NavbarContextProps>(
  {} as ReturnType<typeof useNavbarToggle>
);

const useNavbarToggle = () => {
  const { isOpen: isNavbarOpen, onToggle: onNavbarToggle } = useDisclosure();
  return {
    isNavbarOpen,
    onNavbarToggle,
  };
};

export const NavbarProvider: React.FC = ({ children }) => {
  return (
    <NavbarContext.Provider value={useNavbarToggle()}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => useContext(NavbarContext);
