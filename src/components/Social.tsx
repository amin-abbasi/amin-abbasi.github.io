import React, { useEffect, useState, useContext } from "react";
import { SocialIcon } from "react-social-icons";
import { ThemeContext } from "styled-components";
import endpoints from "../constants/endpoints";
import { Theme } from "../theme/themes";
import { CSSProperties } from "react";

const styles = {
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  } as CSSProperties,
};

interface SocialLink {
  network: string;
  href: string;
}

interface SocialData {
  social: SocialLink[];
}

function Social() {
  const theme = useContext(ThemeContext) as Theme;
  const [data, setData] = useState<SocialData | null>(null);

  useEffect(() => {
    fetch(endpoints.social, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res: SocialData) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="social">
      {data
        ? data.social.map((social) => (
            <SocialIcon
              key={social.network}
              style={styles.iconStyle}
              url={social.href}
              network={social.network}
              bgColor={theme?.socialIconBgColor}
              target="_blank"
              rel="noopener"
            />
          ))
        : null}
    </div>
  );
}

export default Social;
