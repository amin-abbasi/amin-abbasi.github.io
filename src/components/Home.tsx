import { useState, useEffect, useContext, useRef, useCallback } from 'react';
import Typewriter from 'typewriter-effect';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import AppContext from '../AppContext';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';
import { LuBriefcase, LuDownload, LuMouse } from 'react-icons/lu';
import { HomeData } from '../types/profile.types';

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
    const bgColor = darkMode.value ? '#0d1117' : '#f0f4f8';

    return (
        <div
            style={{
                flex: 1,
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            {/* 3D Core is now rendered globally via GlobalBackground.tsx */}

            {/* Hero content */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    padding: '0 24px',
                    maxWidth: 760,
                    width: '100%',
                }}>
                <Fade direction="up" triggerOnce duration={800}>
                    {/* Monospace label */}
                    <p
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
                            <LuBriefcase size={14} />
                            {t('layout:home.viewExperience')}
                        </a>
                        <a
                            href="/public/amin-abbasi-cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
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
                            <LuDownload size={14} />
                            {t('layout:home.downloadCv')}
                        </a>
                    </div>

                    {/* Availability badge */}
                    <div
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                            padding: '6px 16px',
                            background: `${accent}10`,
                            border: `1px solid ${accent}30`,
                            borderRadius: 50,
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            fontWeight: 500,
                            color: accent,
                            letterSpacing: '0.06em',
                            marginBottom: '2.2rem',
                        }}
                    >
                        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#00e676', display: 'inline-block', animation: 'bpBounce 2s ease-in-out infinite' }} />
                        {t('layout:home.availability')}
                    </div>

                    <Social />

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
                        <LuMouse size={20} stroke={accent} strokeWidth={1.5} />
                    </div>
                </Fade>
            </div>

            <style>{`
        @keyframes bpBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
        </div>
    );
}

export default Home;
