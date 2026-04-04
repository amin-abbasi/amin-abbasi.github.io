// src/components/Footer.tsx
import { useEffect, useState } from "react";
import { styled, keyframes } from "styled-components";
import { doc, setDoc, getDoc, increment } from "firebase/firestore";
import { useTranslation } from "react-i18next";
import { Theme } from "@app/theme/themes";
import { fireStore } from "@utils/firebase";

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

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 1rem;

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

const ViewsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
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

function getFlagEmoji(countryCode: string) {
  if (!countryCode || countryCode === "UNKNOWN") return "🌍";
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

/**
 * Footer Component
 * Analytics-enabled persistent footer.
 * Fully component-based and strictly typed.
 */
export default function Footer() {
  const { t } = useTranslation();
  const [totalViews, setTotalViews] = useState<number | null>(null);
  const [countryCounts, setCountryCounts] = useState<Record<string, number>>({});
  const [userCountry, setUserCountry] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAndUpdateStats() {
      try {
        const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

        const ipRes = await fetch("https://get.geojs.io/v1/ip/country.json");
        const ipData = await ipRes.json();
        const country = ipData.country || "UNKNOWN";
        const ip = ipData.ip;
        
        setUserCountry(country);

        const totalRef = doc(fireStore, "analytics", "pageViews");
        const countryRef = doc(fireStore, "analytics", "perCountry");

        const today = new Date().toDateString();
        const lastVisitStr = localStorage.getItem("portfolio_last_visit");

        let shouldIncrement = false;
        if (!isLocalhost) {
          if (!lastVisitStr) {
            shouldIncrement = true;
          } else {
            try {
              const lastVisit = JSON.parse(lastVisitStr);
              if (lastVisit.date !== today || lastVisit.ip !== ip) {
                shouldIncrement = true;
              }
            } catch (e) {
              shouldIncrement = true;
            }
          }
        }

        if (shouldIncrement) {
          await setDoc(totalRef, { count: increment(1) }, { merge: true });
          await setDoc(countryRef, { [country]: increment(1) }, { merge: true });
          localStorage.setItem(
            "portfolio_last_visit",
            JSON.stringify({ date: today, ip })
          );
        }

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

  return (
    <FooterWrapper>
      <FooterContent>
        <StatusIndicator>
          <div className="dot" />
          {t('layout:footer.systemOnline', { defaultValue: 'System Online' })}
        </StatusIndicator>

        <Copyright>
          {t('layout:footer.builtBy', { defaultValue: 'Built by' })} <span>Amin Abbasi</span> &copy; {new Date().getFullYear()}
        </Copyright>

        <ViewsContainer>
          <ViewBadge>
            <span className="icon">👁</span>
            {totalViews !== null
              ? `${totalViews.toLocaleString()} ${t('layout:footer.views', { defaultValue: 'Views' })}`
              : t('layout:footer.loading', { defaultValue: 'Loading...' })}
          </ViewBadge>

          {userCountry && countryCounts[userCountry] !== undefined && (
            <ViewBadge>
              <span className="icon">{getFlagEmoji(userCountry)}</span>
              {userCountry}: {countryCounts[userCountry].toLocaleString()}
            </ViewBadge>
          )}
        </ViewsContainer>
      </FooterContent>
    </FooterWrapper>
  );
}

