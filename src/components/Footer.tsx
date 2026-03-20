import { useEffect, useState } from "react";
import { styled, keyframes } from "styled-components";
import { Container } from "react-bootstrap";
import { doc, setDoc, getDoc, increment } from "firebase/firestore";

import { Theme } from "../theme/themes";
import { fireStore } from "utils/firebase";

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 0.5rem 0;
  margin-top: auto;
  border-top: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
  background-color: ${(props) => (props.theme as Theme).background};
  font-family: var(--font-mono);
  font-size: 0.5rem;
  color: ${(props) => (props.theme as Theme).color}AA;

  @media (min-width: 768px) {
    font-size: 0.7rem;
  }
`;

const FooterContent = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`;

const pulse = keyframes`
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 255, 128, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(0, 255, 128, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 255, 128, 0); }
`;

const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: ${(props) => (props.theme as Theme).color};

  .dot {
    width: 8px;
    height: 8px;
    background-color: #00ff80;
    border-radius: 50%;
    animation: ${pulse} 2s infinite;
  }
`;

const ViewBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${(props) => (props.theme as Theme).cardBackground};
  border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  color: ${(props) => (props.theme as Theme).accentColor};
  font-weight: 600;

  .icon {
    opacity: 0.8;
  }
`;

const Copyright = styled.div`
  text-align: center;

  span {
    color: ${(props) => (props.theme as Theme).accentColor};
  }
`;

export default function Footer() {
  const [totalViews, setTotalViews] = useState<number | null>(null);
  const [countryCounts, setCountryCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    async function fetchAndUpdateStats() {
      try {
        const ipRes = await fetch("https://get.geojs.io/v1/ip/country.json");
        const ipData = await ipRes.json();
        const country = ipData.country || "UNKNOWN";

        const totalRef = doc(fireStore, "analytics", "pageViews");
        const countryRef = doc(fireStore, "analytics", "perCountry");

        await setDoc(totalRef, { count: increment(1) }, { merge: true });
        await setDoc(countryRef, { [country]: increment(1) }, { merge: true });

        const [totalSnap, countrySnap] = await Promise.all([
          getDoc(totalRef),
          getDoc(countryRef)
        ]);

        setTotalViews(totalSnap.data()?.count ?? 0);
        setCountryCounts((countrySnap.data() as Record<string, number>) || {});
      } catch (err) {
        console.error("Failed to fetch or update view count:", err);
        setTotalViews(0);
      }
    }

    fetchAndUpdateStats();
  }, []);

  const topCountries = Object.entries(countryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return (
    <FooterWrapper>
      <FooterContent>
        <StatusIndicator>
          <div className="dot" />
          System Online
        </StatusIndicator>

        <Copyright>
          Built by <span>Amin Abbasi</span> &copy; {new Date().getFullYear()}
        </Copyright>

        <ViewBadge>
          <span className="icon">👁</span>
          {totalViews !== null
            ? `${totalViews.toLocaleString()} Views`
            : "Loading..."}
        </ViewBadge>

        {topCountries.length > 0 && (
          <ViewBadge>
            <span className="icon">🌍</span>
            {topCountries.map(([c, n]) => `${c}: ${n.toLocaleString()}`).join(", ")}
          </ViewBadge>
        )}
      </FooterContent>
    </FooterWrapper>
  );
}
