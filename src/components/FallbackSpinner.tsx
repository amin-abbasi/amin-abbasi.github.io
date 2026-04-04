// src/components/FallbackSpinner.tsx
import { styled, keyframes } from 'styled-components';
import { Theme } from 'src/app/theme/themes';

const grow = keyframes`
  0% { transform: scale(0); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: scale(1); opacity: 0; }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: ${(props) => (props.theme as Theme).background};
`;

const StyledSpinner = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: ${(props) => (props.theme as Theme).accentColor};
  border-radius: 50%;
  animation: ${grow} 0.75s linear infinite;
`;

/**
 * FallbackSpinner Component
 * Lightweight, dependency-free loading state.
 * Replaces React-Bootstrap Spinner.
 */
function FallbackSpinner() {
  return (
    <SpinnerContainer>
      <StyledSpinner />
    </SpinnerContainer>
  );
}

export default FallbackSpinner;
