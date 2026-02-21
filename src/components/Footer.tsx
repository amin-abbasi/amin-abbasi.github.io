import React, { useEffect, useState, useContext } from "react";
import styled, { ThemeContext, keyframes } from "styled-components";
import { Container } from "react-bootstrap";
import { supabase } from "../utils/supabaseClient";
import { Theme } from "../theme/themes";

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 1rem 0;
  margin-top: auto;
  border-top: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
  background-color: ${(props) => (props.theme as Theme).background};
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: ${(props) => (props.theme as Theme).color}AA;

  @media (min-width: 768px) {
    font-size: 0.85rem;
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
  padding: 0.4rem 0.8rem;
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
  const [viewCount, setViewCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchViewCount() {
      // Get exact count without downloading all rows
      const { count, error } = await supabase
        .from("page_views")
        .select("*", { count: "exact", head: true });

      if (!error && count !== null) {
        setViewCount(count);
      }
    }

    fetchViewCount();
  }, []);

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
          {viewCount !== null
            ? `${viewCount.toLocaleString()} System Views`
            : "Loading..."}
        </ViewBadge>
      </FooterContent>
    </FooterWrapper>
  );
}
