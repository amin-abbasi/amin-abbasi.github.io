import { useState, useEffect, useContext } from 'react';
import { ViteReactSSG, Head } from 'vite-react-ssg';
import Typewriter from 'typewriter-effect';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import AppContext from '@app/AppContext';
import Social from '@components/Social';
import FallbackSpinner from '@components/FallbackSpinner';
import { Briefcase, Download, MousePointer2 } from 'lucide-react';
import { HomeData } from '@domain-types/profile.types';
import HomeTestimonial from '@components/HomeTestimonial';
import { CV_DOWNLOAD_URL } from '@constants/config';

// ---------------------------------------------------------------------------
//  Blueprint Canvas — animated engineering grid with nodes and connection lines
// ---------------------------------------------------------------------------
// Blueprint Canvas has been moved to GlobalBackground.tsx for application-wide persistence.

// ---------------------------------------------------------------------------
//  Home Component
// ---------------------------------------------------------------------------
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
            context?.background.setLogo(false);
        };
    }, [context?.background.setLogo]);

    const data = {
        name: t('resHome:name'),
        tagline: t('resHome:tagline', { defaultValue: '' }),
        roles: t('resHome:roles', { returnObjects: true })
    } as HomeData;

    if (!context) return null;

    if (!data) return <FallbackSpinner />;

    const { darkMode } = context;
    const accent = darkMode.value ? '#00a0ff' : '#0070ba';

    /**
     * LEAD ARCHITECT NOTE: 
     * The Home component serves as the primary entry point. 
     * 3D Core and Blueprint background are managed globally to ensure 
     * smooth state transitions across routes.
     */
    return (
        <div
            className="hero-wrapper"
            style={{
                flex: 1,
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                display: 'flex',
                flexDirection: 'column',
            }}>
            <Head>
                <title>{data.name} | Lead Backend Architect</title>
                <meta name="description" content={data.roles.join(', ')} />
            </Head>
            {/* 3D Core is now rendered globally via GlobalBackground.tsx */}

            {/* Hero content */}
            <div
                className="hero-content"
                style={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    padding: '0 24px',
                    maxWidth: 760,
                    width: '100%',
                    margin: '0 auto',
                }}>
                <Fade direction="up" triggerOnce duration={800}>
                    {/* Monospace label */}
                    <p
                        className="system-init-label"
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            letterSpacing: '0.25em',
                            textTransform: 'uppercase',
                            color: accent,
                            marginBottom: '1rem',
                            opacity: 0.85,
                        }}>
                        {t('layout:home.systemInit', { defaultValue: '// system.init — lead engineer' })}
                    </p>

                    {/* Name */}
                    <h1
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: 'clamp(2.6rem, 6vw, 5rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.04em',
                            lineHeight: 1.05,
                            color: 'var(--text-primary)',
                            margin: '0 0 1.2rem',
                        }}>
                        {data?.name}
                    </h1>

                    {/* Typewriter roles */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 8,
                            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                            fontFamily: 'var(--font-main)',
                            fontWeight: 500,
                            color: 'var(--text-secondary)',
                            marginBottom: '2.2rem',
                            minHeight: '2rem',
                        }}>
                        <span
                            style={{
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                background: accent,
                                flexShrink: 0,
                                boxShadow: `0 0 8px ${accent}`,
                            }}
                        />
                        <Typewriter
                            key={i18n.language} // Re-init typewriter on language change
                            options={{
                                loop: true,
                                autoStart: true,
                                strings: data?.roles,
                            }}
                        />
                    </div>

                    {/* Tagline */}
                    {data?.tagline && (
                        <p
                            style={{
                                fontFamily: 'var(--font-main)',
                                fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
                                fontWeight: 400,
                                color: 'var(--text-secondary)',
                                marginBottom: '2rem',
                                lineHeight: 1.6,
                                maxWidth: 520,
                                margin: '0 auto 2rem',
                            }}
                        >
                            {data.tagline}
                        </p>
                    )}

                    {/* CTA Buttons */}
                    <div
                        className="hero-cta-group"
                        style={{
                            display: 'flex',
                            gap: 12,
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            marginBottom: '2rem',
                        }}
                    >
                        <a
                            href="/experience"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: '10px 24px',
                                background: accent,
                                color: '#fff',
                                borderRadius: 4,
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                letterSpacing: '0.08em',
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.15)')}
                            onMouseLeave={e => (e.currentTarget.style.filter = '')}
                        >
                            <Briefcase size={14} />
                            {t('layout:home.viewExperience')}
                        </a>
                        <a
                            href={CV_DOWNLOAD_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            download="amin-abbasi-cv.pdf"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: '10px 24px',
                                background: 'transparent',
                                color: accent,
                                border: `1.5px solid ${accent}55`,
                                borderRadius: 4,
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                letterSpacing: '0.08em',
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.background = `${accent}10`; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = `${accent}55`; e.currentTarget.style.background = 'transparent'; }}
                        >
                            <Download size={14} />
                            {t('layout:home.downloadCv')}
                        </a>
                    </div>

                    {/* Availability badge */}
                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            padding: '4px 16px',
                            background: `${accent}10`,
                            border: `1px solid ${accent}30`,
                            borderRadius: 50,
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            fontWeight: 500,
                            color: accent,
                            letterSpacing: '0.06em',
                            marginBottom: '0.1rem',
                        }}
                    >
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00e676', display: 'inline-block', animation: 'bpBounce 2s ease-in-out infinite' }} />
                        {t('layout:home.availability')}
                    </div>

                    <Social />

                    {/* Social Proof: Featured Testimonial */}
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '0 12px' }}>
                        <HomeTestimonial />
                    </div>

                    {/* Blueprint scroll indicator */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '-40vh',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 6,
                            opacity: 0.5,
                            animation: 'bpBounce 2s ease-in-out infinite',
                        }}>
                        <span
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.65rem',
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                color: accent,
                            }}>
                            {t('layout:home.scroll', { defaultValue: 'scroll' })}
                        </span>
                        <MousePointer2 size={20} color={accent} strokeWidth={1.5} />
                    </div>
                </Fade>
            </div>

            <style>{`
        .hero-wrapper {
          justify-content: flex-start;
          align-items: center;
          padding-top: 100px;
        }
        @keyframes bpBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @media (max-width: 991px) {
          .hero-wrapper {
            padding-top: 120px;
          }
        }
        @media (max-width: 480px) {
          .hero-wrapper {
            padding-top: calc(140px + env(safe-area-inset-top)) !important;
          }
          .hero-content {
            padding-bottom: 80px;
          }
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
            padding: 0 10%;
          }
          .hero-cta-group > a {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
        </div>
    );
}

export default Home;
