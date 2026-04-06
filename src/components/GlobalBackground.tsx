import React, { useRef, useEffect, useCallback, useContext } from 'react';
import AppContext from '../app/AppContext';
import { getMeshForString } from '../app/utils/3d-mesh-utils';

const GlobalBackground: React.FC = () => {
    const context = useContext(AppContext);
    if (!context) return null;
    const { darkMode, background } = context;
    const { showLogo, initials, logoSize, logoThickness } = background;

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const logoStartTimeRef = useRef<number>(0);
    const animRef = useRef<number>(0);
    const mouseRef = useRef({ x: 0, y: 0 });
    const tiltRef = useRef({ x: 0, y: 0 });

    const accent = darkMode.value ? 'rgba(0, 234, 255, 0.8)' : 'rgba(0, 112, 186, 0.8)';
    const textHUD = darkMode.value ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 48, 80, 0.2)';

    const handleMouseMove = useCallback((e: MouseEvent) => {
        mouseRef.current = { x: e.clientX, y: e.clientY };
    }, []);

    useEffect(() => {
        if (showLogo && logoStartTimeRef.current === 0) {
            logoStartTimeRef.current = Date.now();
        } else if (!showLogo) {
            logoStartTimeRef.current = 0;
        }
    }, [showLogo]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const stars = Array.from({ length: 180 }, () => ({
            x: Math.random(),
            y: Math.random(),
            size: Math.random() * 1.6,
            seed: Math.random() * 15
        }));
        let shootingStars: any[] = [];

        let resizePending = false;
        const resize = () => {
            if (resizePending) return;
            resizePending = true;
            requestAnimationFrame(() => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                resizePending = false;
            });
        };

        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);

        const draw = (time: number) => {
            const W = canvas.width; const H = canvas.height;
            ctx.clearRect(0, 0, W, H);

            // Intro Animation Logic
            const introDuration = 2500;
            const logoElapsed = logoStartTimeRef.current ? Date.now() - logoStartTimeRef.current : 0;
            const progress = Math.min(1, logoElapsed / introDuration);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const introRotation = (1 - easeOut) * Math.PI * 2;
            const introBlur = 8 * (1 - easeOut);

            // Interpolate tilt (Inertia)
            tiltRef.current.x += ((mouseRef.current.y / H - 0.5) * 0.5 - tiltRef.current.x) * 0.05;
            tiltRef.current.y += ((mouseRef.current.x / W - 0.5) * 0.5 - tiltRef.current.y) * 0.05;
            const tx = tiltRef.current.y + (showLogo ? introRotation : 0); 
            const ty = tiltRef.current.x;

            // ── LAYER 0: Persistent Stars ────────────────────────────────────
            ctx.fillStyle = darkMode.value ? '#fff' : '#003050';
            stars.forEach(s => {
                const flicker = 0.15 + (Math.sin(time * 0.0015 + s.seed) * 0.15 + 0.15);
                ctx.globalAlpha = flicker;
                ctx.beginPath();
                ctx.arc(s.x * W, s.y * H, s.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // ── LAYER 0.5: Global Shooting Stars ─────────────────────────────
            if (Math.random() > 0.993 && shootingStars.length < 3) {
                shootingStars.push({
                    x: Math.random() * W, y: Math.random() * H * 0.5,
                    length: 40 + Math.random() * 50, speed: 12, alpha: 1
                });
            }
            shootingStars.forEach((ss, i) => {
                ctx.strokeStyle = accent; ctx.lineWidth = 1; ctx.globalAlpha = ss.alpha * 0.25;
                ctx.beginPath(); ctx.moveTo(ss.x, ss.y); ctx.lineTo(ss.x - ss.length, ss.y + ss.length * 0.5); ctx.stroke();
                ss.x += ss.speed; ss.y -= ss.speed * 0.5; ss.alpha -= 0.012;
                if (ss.alpha <= 0) shootingStars.splice(i, 1);
            });
            ctx.globalAlpha = 1;

            // ── LAYER 1: Global Blueprint Grid ───────────────────────────────
            const STEP = 45;
            ctx.strokeStyle = darkMode.value ? 'rgba(255, 255, 255, 0.025)' : 'rgba(0, 0, 0, 0.03)';
            ctx.lineWidth = 0.5;
            ctx.save();
            ctx.translate(W/2 + tx * 30, H/2 + ty * 30);
            ctx.beginPath();
            for (let i = -W; i <= W; i += STEP) {
                ctx.moveTo(i, -H); ctx.lineTo(i, H);
                ctx.moveTo(-W, i); ctx.lineTo(W, i);
            }
            ctx.stroke();
            ctx.restore();

            // ── LAYER 2: 3D Logo Core (Prop-driven) ──────────────────────────
            if (showLogo) {
                const mesh = getMeshForString(initials);
                const targetScale = (W * (logoSize / 100)) / 130; 
                const baseScale = 15.0 - ( (15.0 - targetScale) * easeOut );

                ctx.save();
                ctx.translate(W/2 + tiltRef.current.y * 150, H/2 + ty * 150);
                
                // --- HIGH-PERFORMANCE MULTI-PASS GLOW ---
                // We draw the mesh 3 times with different thicknesses and alphas
                // to simulate a high-fidelity "Blueprint Glow" without using ctx.filter.
                const glowPasses = [
                    { width: logoThickness * 2.5, alpha: 0.04 * (1 - easeOut), blur: 0 }, // Outer Glow
                    { width: logoThickness * 1.5, alpha: 0.12 * (1 - easeOut), blur: 0 }, // Inner Glow
                    { width: 1, alpha: 0.6 * (1 - easeOut), blur: 0 }                    // Sharp Center (Ink)
                ];

                glowPasses.forEach((pass) => {
                    ctx.globalAlpha = pass.alpha;
                    ctx.strokeStyle = accent;
                    ctx.lineWidth = pass.width;
                    ctx.lineCap = 'round';
                    ctx.lineJoin = 'round';
                    ctx.beginPath();
                    
                    mesh.connections.forEach(([i, j]) => {
                        const p1 = mesh.vertices[i]; const p2 = mesh.vertices[j];
                        // Cache the projected coordinates
                        const r1x = (p1.x * Math.cos(tx) - p1.z * Math.sin(tx)) * baseScale;
                        const r1y = (p1.y * Math.cos(ty) - (p1.x * Math.sin(tx) + p1.z * Math.cos(tx)) * Math.sin(ty)) * baseScale;
                        const r2x = (p2.x * Math.cos(tx) - p2.z * Math.sin(tx)) * baseScale;
                        const r2y = (p2.y * Math.cos(ty) - (p2.x * Math.sin(tx) + p2.z * Math.cos(tx)) * Math.sin(ty)) * baseScale;

                        ctx.moveTo(r1x, r1y);
                        ctx.lineTo(r2x, r2y);
                    });
                    ctx.stroke();
                });
                
                ctx.restore();

                // ── LAYER 3: Technical HUD (Only when logo is visible) ───────
                ctx.save();
                ctx.globalAlpha = easeOut;
                ctx.font = '500 10px var(--font-mono)';
                ctx.fillStyle = textHUD;
                // ctx.fillText(`BOOT: SYSTEM_OK`, 40, 40);
                // const coordX = (mouseRef.current.x / W).toFixed(4);
                // const coordY = (mouseRef.current.y / H).toFixed(4);
                // ctx.textAlign = 'right';
                // ctx.fillText(`LAT:${coordX} LNG:${coordY}`, W - 40, 40);
                // ctx.textAlign = 'left';
                // ctx.fillText(`STATUS: CONNECTED`, 40, H - 40);
                // ctx.textAlign = 'right';
                // ctx.fillText(`FRM: ${Math.floor(time / 16)}`, W - 40, H - 40);
                ctx.restore();
            }

            animRef.current = requestAnimationFrame(draw);
        };

        animRef.current = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animRef.current);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [darkMode.value, accent, showLogo, initials, logoSize, logoThickness, handleMouseMove]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                inset: 0,
                width: '100%',
                height: '100%',
                display: 'block',
                pointerEvents: 'none',
                zIndex: -1,
                background: darkMode.value ? '#0d1117' : '#f0f4f8',
            }}
        />
    );
};

export default GlobalBackground;
