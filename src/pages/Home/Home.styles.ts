// src/pages/Home/Home.styles.ts
import { styled, keyframes } from 'styled-components';

export const bpBounce = keyframes`
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
`;

export const pulseBeacon = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 230, 118, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 8px rgba(0, 230, 118, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 230, 118, 0);
  }
`;

export const HeroWrapper = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 100px;

  @media (max-width: 991px) {
    padding-top: 120px;
  }

  @media (max-width: 480px) {
    padding-top: calc(140px + env(safe-area-inset-top)) !important;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  zIndex: 2;
  text-align: center;
  padding: 0 24px;
  max-width: 760px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 480px) {
    padding-bottom: 80px;
  }
`;

export const SystemInitLabel = styled.p<{ accent: string }>`
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${props => props.accent};
  margin-bottom: 1rem;
  opacity: 0.85;
`;

export const NameHeading = styled.h1`
  font-family: var(--font-mono);
  font-size: clamp(2.6rem, 6vw, 5rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.5;
  color: var(--text-primary);
  margin: 2rem 0 2rem;
`;

export const TypewriterContainer = styled.div<{ accent: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: clamp(1.1rem, 2.5vw, 2rem);
  font-family: var(--font-main);
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 2.2rem;
  min-height: 2rem;
`;

export const Tagline = styled.p`
  font-family: var(--font-main);
  font-size: clamp(0.95rem, 2vw, 1.15rem);
  font-weight: 400;
  color: var(--text-secondary);
  margin: 0 auto 2rem;
  line-height: 1.6;
  max-width: 520px;
`;

export const HeroCtaGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    padding: 0 10%;
    & > a {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const PrimaryButton = styled.a<{ accent: string }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  background: ${props => props.accent};
  color: #fff;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1.15);
  }
`;

export const SecondaryButton = styled.a<{ accent: string }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  background: transparent;
  color: ${props => props.accent};
  border: 1.5px solid ${props => props.accent}55;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${props => props.accent};
    background: ${props => props.accent}10;
  }
`;

export const AvailabilityBadge = styled.div<{ accent: string }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 16px;
  background: ${props => props.accent}10;
  border: 1px solid ${props => props.accent}30;
  border-radius: 50px;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 500;
  color: ${props => props.accent};
  letter-spacing: 0.06em;
  margin-bottom: 0.1rem;

  & > span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #00e676;
    display: inline-block;
    animation: ${pulseBeacon} 2s infinite;
  }
`;

export const ScrollIndicator = styled.div<{ accent: string }>`
  position: absolute;
  bottom: -40vh;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  opacity: 0.5;
  animation: ${bpBounce} 2s ease-in-out infinite;

  span {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${props => props.accent};
  }
`;
