import { useContext } from "react";
import { styled } from "styled-components";
import AppContext from "../app/AppContext";

const ToggleButton = styled.button<{ $isDark: boolean }>`
  background: ${({ $isDark }) => ($isDark ? "#1e3a8a" : "#87CEEB")};
  border: 1px solid ${({ $isDark }) => ($isDark ? "#1e40af" : "#AEE0F8")};
  border-radius: 25px;
  width: 50px;
  height: 26px;
  position: relative;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin-bottom: 8px;
  transition: all 0.3s ease;

  .knob {
    width: 20px;
    height: 20px;
    background: ${({ $isDark }) => ($isDark ? "#FFF" : "#FFDF00")};
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: ${({ $isDark }) => ($isDark ? "26px" : "2px")};
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

interface ThemeTogglerProps {
  onClick?: () => void;
}

function ThemeToggler(props: ThemeTogglerProps) {
  const { onClick = () => {} } = props;
  const context = useContext(AppContext);

  if (!context) {
    return <div style={{ marginBottom: 8, height: 26, width: 50 }} />;
  }

  const isDark = context.darkMode.value;

  const handleOnChange = () => {
    context.darkMode.toggle();
    onClick();
  };

  return (
    <ToggleButton
      $isDark={isDark}
      onClick={handleOnChange}
      aria-label="Toggle dark mode"
    >
      <div className="knob" />
    </ToggleButton>
  );
}

export default ThemeToggler;
