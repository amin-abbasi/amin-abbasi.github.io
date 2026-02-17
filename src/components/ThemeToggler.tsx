import React, { useContext } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import AppContext from "../AppContext";

interface ThemeTogglerProps {
  onClick?: () => void;
}

function ThemeToggler(props: ThemeTogglerProps) {
  const { onClick = () => {} } = props;
  const context = useContext(AppContext);

  if (!context) {
    return null;
  }

  const handleOnChange = () => {
    context.darkMode.toggle();
    onClick();
  };

  return (
    <div style={{ marginBottom: 8 }}>
      <DarkModeToggle
        onChange={handleOnChange}
        checked={context.darkMode.value}
        size={50}
      />
    </div>
  );
}

export default ThemeToggler;
