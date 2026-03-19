import React, { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext";


interface ThemeTogglerProps {
  onClick?: () => void;
}

function ThemeToggler(props: ThemeTogglerProps) {
  const { onClick = () => {} } = props;
  const context = useContext(AppContext);
  const [isMounted, setIsMounted] = useState(false);
  const [ToggleComponent, setToggleComponent] = useState<any>(null);

  useEffect(() => {
    setIsMounted(true);
    const loadToggle = async () => {
      try {
        const module: any = await import("react-dark-mode-toggle");
        // Handle potential nested default exports from CJS-to-ESM interop
        const component = module.default?.default || module.default || module;
        setToggleComponent(() => component);
      } catch (err) {
        console.error("Failed to load DarkModeToggle:", err);
      }
    };
    loadToggle();
  }, []);

  if (!context || !isMounted || !ToggleComponent) {
    return <div style={{ marginBottom: 8, height: 50 }} />;
  }

  const handleOnChange = () => {
    context.darkMode.toggle();
    onClick();
  };

  return (
    <div style={{ marginBottom: 8 }}>
      <ToggleComponent
        onChange={handleOnChange}
        checked={context.darkMode.value}
        size={50}
      />
    </div>
  );
}

export default ThemeToggler;
