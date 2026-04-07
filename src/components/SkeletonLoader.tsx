// src/components/SkeletonLoader.tsx
import { styled, keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const SkeletonContainer = styled.div`
  padding: 100px 2rem 2rem;
  max-width: var(--container-max-width);
  margin: 0 auto;
  min-height: 500px; /* Aligned with HeroContent's stable height */
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 991px) {
    padding-top: 120px;
  }

  @media (max-width: 768px) {
    min-height: 450px;
  }

  @media (max-width: 480px) {
    padding-top: 140px;
  }
`;

const SkeletonBase = styled.div`
  background: var(--blueprint-cyan-faded);
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius);
  border: 1px solid var(--grid-line);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(0, 160, 255, 0.05) 50%,
      transparent 100%
    );
    animation: ${shimmer} 2s infinite ease-in-out;
  }
`;

const SkeletonHeader = styled(SkeletonBase)`
  height: 40px;
  width: 60%;
  margin-bottom: 1rem;
`;

const SkeletonLine = styled(SkeletonBase)<{ width?: string }>`
  height: 3.5rem; /* Matches the H1 leading height */
  width: ${props => props.width || '100%'};
  border-radius: var(--border-radius);
`;

const SkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SkeletonCard = styled(SkeletonBase)`
  height: 200px;
  width: 100%;
`;

/**
 * SkeletonLoader Component
 * High-fidelity, theme-aware loading state for the portfolio.
 * Aligned with the "Architect/Blueprint" aesthetic.
 */
function SkeletonLoader() {
  return (
    <SkeletonContainer>
      <div style={{ marginBottom: '2rem' }}>
        <SkeletonHeader />
        <SkeletonLine style={{ width: '80%' }} />
        <SkeletonLine style={{ width: '90%' }} />
      </div>
      
      <SkeletonGrid>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </SkeletonGrid>

      <div style={{ marginTop: '2rem' }}>
        <SkeletonLine />
        <SkeletonLine style={{ width: '70%' }} />
      </div>
    </SkeletonContainer>
  );
}

export default SkeletonLoader;
