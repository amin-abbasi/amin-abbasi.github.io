// src/pages/Home/Home.tsx
import { useEffect, useContext } from 'react';
import { Head } from 'vite-react-ssg';
import Typewriter from 'typewriter-effect';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import AppContext from '@app/AppContext';
import Social from '@components/Social';
import FallbackSpinner from '@components/FallbackSpinner';
import { Briefcase, Download, MousePointer2 } from 'lucide-react';
import { HomeData } from '@core/types/resume';
import * as S from './Home.styles';

/**
 * Home Component
 * The primary entry point of the portfolio.
 * Optimized for performance and Lead-level technical architecture.
 */
function Home() {
    const { t, i18n } = useTranslation();
    const context = useContext(AppContext);
    
    useEffect(() => {
        if (context?.background) {
            // Activate the 3D "AA" Core for the Home page
            context.background.setLogo(true, "AA", 48, 22);
        }
        return () => {
            // Deactivate Core when leaving Home
            context?.background?.setLogo(false);
        };
    }, [context?.background.setLogo]);

    const data: HomeData = {
        name: t('resHome:name'),
        tagline: t('resHome:tagline', { defaultValue: '' }),
        roles: t('resHome:roles', { returnObjects: true }) as string[]
    };

    if (!context) return null;
    if (!data.name) return <FallbackSpinner />;

    const { darkMode } = context;
    const accent = darkMode.value ? '#00a0ff' : '#0070ba';

    const RESUME_DOWNLOAD_URL = '/amin-abbasi-resume.pdf'; // Fallback or from configs

    return (
        <S.HeroWrapper className="hero-wrapper">
            <Head>
                <title>{data.name} | Lead Backend Architect</title>
                <meta name="description" content={data.roles.join(', ')} />
            </Head>

            <S.HeroContent className="hero-content">
                <Fade direction="up" triggerOnce duration={800}>
                    <S.NameHeading>{data.name}</S.NameHeading>

                    {/* Typewriter roles */}
                    <S.TypewriterContainer accent={accent}>
                        <span />
                        <Typewriter
                            key={i18n.language}
                            options={{
                                loop: true,
                                autoStart: true,
                                strings: data.roles,
                                delay: 35,
                                deleteSpeed: 25,
                            }}
                        />
                    </S.TypewriterContainer>

                    {/* Tagline */}
                    {data.tagline && (
                        <S.Tagline>{data.tagline}</S.Tagline>
                    )}

                    {/* CTA Buttons */}
                    <S.HeroCtaGroup className="hero-cta-group">
                        <S.PrimaryButton
                            href="/experience"
                            accent={accent}
                        >
                            <Briefcase size={14} />
                            {t('layout:home.viewExperience')}
                        </S.PrimaryButton>
                        <S.SecondaryButton
                            href={RESUME_DOWNLOAD_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            download="amin-abbasi-resume.pdf"
                            accent={accent}
                        >
                            <Download size={14} />
                            {t('layout:home.downloadCv')}
                        </S.SecondaryButton>
                    </S.HeroCtaGroup>

                    {/* Availability badge */}
                    <S.AvailabilityBadge accent={accent}>
                        <span />
                        {t('layout:home.availability')}
                    </S.AvailabilityBadge>

                    <Social />

                    {/* Social Proof: Featured Testimonial */}
                    {/* <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '0 12px', marginTop: '2rem' }}> */}
                    {/* <HomeTestimonial /> */}
                    {/* </div> */}

                </Fade>
            </S.HeroContent>
        </S.HeroWrapper>
    );
}

export default Home;
