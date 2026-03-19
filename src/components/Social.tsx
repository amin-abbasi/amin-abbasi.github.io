import { useState, useContext } from 'react';
import { SocialIcon } from 'react-social-icons';
import { ThemeContext } from 'styled-components';
import { Theme } from '../theme/themes';
import { CSSProperties } from 'react';
import socialData from '../assets/profile/social.json';

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
    const [data] = useState<SocialData>(socialData as SocialData);

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
                          fgColor={theme?.background}
                          target="_blank"
                          rel="noopener"
                      />
                  ))
                : null}
        </div>
    );
}

export default Social;
