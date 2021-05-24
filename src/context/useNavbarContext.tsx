import { useDisclosure } from "@chakra-ui/react";
import { createContext, useContext } from "react";

interface NavbarContextProps {
  isNavbarOpen: boolean;
  onNavbarToggle: () => void;
}

const NavbarContext = createContext<NavbarContextProps>(undefined);

export const NavbarProvider = ({ children }) => {
  const { isOpen: isNavbarOpen, onToggle: onNavbarToggle } = useDisclosure();

  return (
    <NavbarContext.Provider value={{ isNavbarOpen, onNavbarToggle }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => useContext(NavbarContext);
