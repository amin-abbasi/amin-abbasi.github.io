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
function BlueprintCanvas({ darkMode }: { darkMode: boolean }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animRef = useRef<number>(0);
    const mouseRef = useRef({ x: -9999, y: -9999 });

    const handleMouseMove = useCallback((e: MouseEvent) => {
        mouseRef.current = { x: e.clientX, y: e.clientY };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const accent = darkMode ? '#00a0ff' : '#0070ba';
        const gridColor = darkMode ? 'rgba(0,160,255,0.07)' : 'rgba(0,112,186,0.08)';

        // Nodes that drift slowly
        const NUM_NODES = 28;
        interface Node {
            x: number;
            y: number;
            vx: number;
            vy: number;
            r: number;
        }
        const nodes: Node[] = [];

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            nodes.length = 0;
            for (let i = 0; i < NUM_NODES; i++) {
                nodes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.35,
                    vy: (Math.random() - 0.5) * 0.35,
                    r: 2 + Math.random() * 2,
                });
            }
        };

        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);

        const draw = () => {
            const W = canvas.width;
            const H = canvas.height;
            ctx.clearRect(0, 0, W, H);

            // ── Grid ────────────────────────────────────────────────────────────
            const STEP = 50;
            ctx.strokeStyle = gridColor;
            ctx.lineWidth = 0.8;
            for (let x = 0; x <= W; x += STEP) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, H);
                ctx.stroke();
            }
            for (let y = 0; y <= H; y += STEP) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(W, y);
                ctx.stroke();
            }

            // ── Corner markers on grid intersections (sparse) ───────────────────
            ctx.strokeStyle = darkMode ? 'rgba(0,160,255,0.2)' : 'rgba(0,112,186,0.18)';
            ctx.lineWidth = 1;
            for (let x = 0; x <= W; x += STEP * 3) {
                for (let y = 0; y <= H; y += STEP * 3) {
                    const S = 5;
                    ctx.beginPath();
                    ctx.moveTo(x - S, y);
                    ctx.lineTo(x, y);
                    ctx.lineTo(x, y - S);
                    ctx.moveTo(x + S, y);
                    ctx.lineTo(x, y);
                    ctx.lineTo(x, y + S);
                    ctx.stroke();
                }
            }

            // ── Move nodes ───────────────────────────────────────────────────────
            for (const n of nodes) {
                n.x += n.vx;
                n.y += n.vy;
                if (n.x < 0 || n.x > W) n.vx *= -1;
                if (n.y < 0 || n.y > H) n.vy *= -1;
            }

            // ── Connections ──────────────────────────────────────────────────────
            const LINK_DIST = 160;
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < LINK_DIST) {
                        const alpha = (1 - dist / LINK_DIST) * 0.35;
                        ctx.strokeStyle = accent;
                        ctx.globalAlpha = alpha;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                }

                // Mouse proximity glow
                const dmx = nodes[i].x - mx;
                const dmy = nodes[i].y - my;
                const distMouse = Math.sqrt(dmx * dmx + dmy * dmy);
                if (distMouse < 180) {
                    const glowAlpha = (1 - distMouse / 180) * 0.5;
                    ctx.strokeStyle = accent;
                    ctx.globalAlpha = glowAlpha;
                    ctx.lineWidth = 0.6;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(mx, my);
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }

            // ── Nodes ────────────────────────────────────────────────────────────
            for (const n of nodes) {
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fillStyle = accent;
                ctx.globalAlpha = 0.6;
                ctx.fill();
                ctx.globalAlpha = 1;
            }

            animRef.current = requestAnimationFrame(draw);
        };

        animRef.current = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [darkMode, handleMouseMove]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                display: 'block',
            }}
        />
    );
}

// ---------------------------------------------------------------------------
//  Home Component
// ---------------------------------------------------------------------------
function Home() {
    const { t, i18n } = useTranslation();
    const context = useContext(AppContext);
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
                backgroundColor: bgColor,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            {/* Animated blueprint canvas */}
            <BlueprintCanvas darkMode={darkMode.value} />

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
                            View Experience
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
                            Download CV
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
                        ✦ Available for Lead / Architect Roles · Remote or Antalya
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
