import { createContext } from "react";

interface DarkMode {
  value: boolean;
  enable: () => void;
  disable: () => void;
  toggle: () => void;
}

interface BackgroundSettings {
  initials: string;
  showLogo: boolean;
  logoSize: number;
  logoThickness: number;
  setLogo: (show: boolean, initials?: string, size?: number, thickness?: number) => void;
}

interface AppContextType {
  darkMode: DarkMode;
  background: BackgroundSettings;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export default AppContext;
export type { AppContextType, DarkMode };
