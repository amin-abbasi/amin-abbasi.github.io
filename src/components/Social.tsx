import { useContext } from 'react';
import { SocialIcon } from 'react-social-icons';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Theme } from '../app/theme/themes';
import { CSSProperties } from 'react';

const styles = {
    iconStyle: {
        marginInlineStart: 10,
        marginInlineEnd: 10,
        marginBottom: 45,
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
    const { t } = useTranslation();
    const theme = useContext(ThemeContext) as Theme;
    const data = {
        social: t('resSocial:social', { returnObjects: true })
    } as SocialData;

    return (
        <div className="social">
            {data && data.social
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
