import React, { useState, useEffect, useLayoutEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { TechNode, SkillGroup } from '@core/types/resume';
import * as S from '../Skills.styles';

interface SkillGraphProps {
    techs: TechNode[];
    groups: SkillGroup[];
}

interface NodePosition {
    id: string;
    x: number;
    y: number;
}

const SkillGraph: React.FC<SkillGraphProps> = ({ techs, groups }) => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const nodeRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const [activeGroupId, setActiveGroupId] = useState<string | null>(null);
    const [activeTechId, setActiveTechId] = useState<string | null>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [domCenters, setDomCenters] = useState<{ [key: string]: { x: number; y: number } }>({});

    // Track DOM positions for pixel-perfect line alignment
    const updateDOMCenters = useCallback(() => {
        if (!containerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const newCenters: { [key: string]: { x: number; y: number } } = {};

        [...techs, ...groups].forEach(item => {
            const el = nodeRefs.current[item.id];
            if (el) {
                const rect = el.getBoundingClientRect();
                newCenters[item.id] = {
                    x: (rect.left + rect.width / 2) - containerRect.left,
                    y: (rect.top + rect.height / 2) - containerRect.top
                };
            }
        });
        setDomCenters(newCenters);
    }, [techs, groups]);

    useEffect(() => {
        if (!containerRef.current) return;
        const resizeObserver = new ResizeObserver(() => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.clientWidth,
                    height: containerRef.current.clientHeight
                });
            }
            updateDOMCenters();
        });
        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, [updateDOMCenters]);

    // Update centers after expansion animations
    useLayoutEffect(() => {
        const timer = setTimeout(updateDOMCenters, 100); 
        const longTimer = setTimeout(updateDOMCenters, 600); 
        return () => { clearTimeout(timer); clearTimeout(longTimer); };
    }, [activeGroupId, activeTechId, updateDOMCenters, dimensions]);

    const positions = useMemo(() => {
        const { width, height } = dimensions;
        if (width === 0) return { groups: [], techs: [] };

        const centerX = width / 2;
        const centerY = height / 2;
        const isMobile = width < 768;
        const isSmallMobile = width < 480;

        // Radii Tuning for Horizontal Geometry
        const gRX = width * (isMobile ? 0.36 : 0.32);
        const gRY = height * (isMobile ? 0.22 : 0.24);
        const tRX = width * (isMobile ? 0.44 : 0.44);
        const tRY = height * (isMobile ? 0.35 : 0.40);

        const scale = isSmallMobile ? 0.85 : 1;

        const gPos: NodePosition[] = groups.map((g, i) => {
            const angle = (i / groups.length) * 2 * Math.PI - Math.PI / 2;
            return {
                id: g.id,
                x: centerX + Math.cos(angle) * gRX * scale,
                y: centerY + Math.sin(angle) * gRY * scale
            };
        });

        const tPos: NodePosition[] = techs.map((t, i) => {
            const angle = (i / techs.length) * 2 * Math.PI - Math.PI / 2;
            return {
                id: t.id,
                x: centerX + Math.cos(angle) * tRX * scale,
                y: centerY + Math.sin(angle) * tRY * scale
            };
        });

        return { groups: gPos, techs: tPos };
    }, [dimensions, groups, techs]);

    const highlightedTechIds = useMemo(() => {
        if (!activeGroupId) return [];
        return groups.find(g => g.id === activeGroupId)?.techIds || [];
    }, [activeGroupId, groups]);

    const highlightedGroupIds = useMemo(() => {
        if (!activeTechId) return [];
        return groups.filter(g => g.techIds.includes(activeTechId)).map(g => g.id);
    }, [activeTechId, groups]);

    const isInteractionActive = !!(activeGroupId || activeTechId);

    const handleGroupClick = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveTechId(null);
        setActiveGroupId(activeGroupId === id ? null : id);
    };

    const handleTechClick = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveGroupId(null);
        setActiveTechId(activeTechId === id ? null : id);
    };

    useEffect(() => {
        const handleOutsideClick = () => {
            setActiveGroupId(null);
            setActiveTechId(null);
        };
        window.addEventListener('click', handleOutsideClick);
        return () => window.removeEventListener('click', handleOutsideClick);
    }, []);

    const renderConnections = () => {
        const lines: { from: string; to: string; key: string }[] = [];
        
        if (activeGroupId) {
            highlightedTechIds.forEach(tId => {
                lines.push({ from: activeGroupId, to: tId, key: `${activeGroupId}-${tId}` });
            });
        }

        if (activeTechId) {
            highlightedGroupIds.forEach(gId => {
                lines.push({ from: gId, to: activeTechId, key: `${activeTechId}-${gId}` });
            });
        }

        return (
            <S.ConnectionSvg viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}>
                <AnimatePresence>
                    {lines.map(line => {
                        const start = domCenters[line.from];
                        const end = domCenters[line.to];
                        if (!start || !end) return null;

                        return (
                            <motion.line
                                key={line.key}
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.6 }}
                                exit={{ pathLength: 0, opacity: 0 }}
                                x1={start.x}
                                y1={start.y}
                                x2={end.x}
                                y2={end.y}
                                stroke="#00f2ff"
                                strokeWidth="1.5"
                                strokeDasharray="4,4"
                                transition={{ duration: 0.4 }}
                            />
                        );
                    })}
                </AnimatePresence>
            </S.ConnectionSvg>
        );
    };

    return (
        <S.GraphWrapper ref={containerRef}>
            {dimensions.width > 0 && renderConnections()}

            <LayoutGroup>
                {positions.groups.map(pos => {
                    const group = groups.find(g => g.id === pos.id)!;
                    const isActive = activeGroupId === pos.id || highlightedGroupIds.includes(pos.id);
                    const isSelected = activeGroupId === pos.id;
                    const isDimmed = isInteractionActive && !isActive;

                    return (
                        <motion.div
                            key={pos.id}
                            ref={el => (nodeRefs.current[pos.id] = el)}
                            layout
                            initial={false}
                            animate={{
                                left: pos.x,
                                top: pos.y,
                                opacity: isDimmed ? 0.2 : 1,
                                zIndex: isActive ? 50 : 20
                            }}
                            style={{ position: 'absolute', x: '-50%', y: '-50%' }}
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        >
                            <S.GroupNode
                                layout
                                $isActive={isActive}
                                $isSelected={isSelected}
                                $isDimmed={!!isDimmed}
                                onClick={(e) => handleGroupClick(pos.id, e)}
                            >
                                <motion.div 
                                    layout="position"
                                    style={{ 
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        alignItems: 'center', 
                                        justifyContent: 'center' 
                                    }}
                                >
                                    <S.NodeLabel layout="position">{group.title}</S.NodeLabel>
                                    
                                    <AnimatePresence mode="popLayout">
                                        {isSelected && (
                                            <S.InlineImpactContent
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: "circOut" }}
                                            >
                                                <S.ImpactText>{group.impactNote}</S.ImpactText>
                                            </S.InlineImpactContent>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </S.GroupNode>
                        </motion.div>
                    );
                })}

                {positions.techs.map(pos => {
                    const tech = techs.find(t => t.id === pos.id)!;
                    const isActive = activeTechId === pos.id || highlightedTechIds.includes(pos.id);
                    const isSelected = activeTechId === pos.id;
                    const isDimmed = isInteractionActive && !isActive;

                    return (
                        <motion.div
                            key={pos.id}
                            ref={el => (nodeRefs.current[pos.id] = el)}
                            layout
                            initial={false}
                            animate={{
                                left: pos.x,
                                top: pos.y,
                                opacity: isDimmed ? 0.3 : 1,
                                zIndex: isActive ? 45 : 20
                            }}
                            style={{ position: 'absolute', x: '-50%', y: '-50%' }}
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        >
                            <S.TechNodeCircle
                                layout
                                $isActive={isActive}
                                $isSelected={isSelected}
                                $isDimmed={!!isDimmed}
                                onClick={(e) => handleTechClick(pos.id, e)}
                            >
                                <motion.div 
                                    layout="position"
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <S.TechIconNode src={tech.icon} alt={tech.title} />
                                    <S.TechLabel layout="position">{tech.title}</S.TechLabel>
                                </motion.div>
                            </S.TechNodeCircle>
                        </motion.div>
                    );
                })}
            </LayoutGroup>
        </S.GraphWrapper>
    );
};

export default SkillGraph;
