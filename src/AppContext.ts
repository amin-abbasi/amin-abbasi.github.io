import { createContext } from "react";

interface DarkMode {
  value: boolean;
  enable: () => void;
  disable: () => void;
  toggle: () => void;
}

interface AppContextType {
  darkMode: DarkMode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export default AppContext;
export type { AppContextType, DarkMode };
