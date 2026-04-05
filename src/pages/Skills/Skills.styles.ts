// src/pages/Skills/Skills.styles.ts
import { styled, css } from 'styled-components';
import { motion } from 'framer-motion';
import { Theme } from '@app/theme/themes';

export const MainContainer = styled.div`
    padding: 40px 0 80px;
    position: relative;
    overflow-x: clip; /* Prevent node overflows from causing horizontal scroll */
`;

export const IntroTextWrapper = styled.div`
    max-width: 800px;
    text-align: start;
    margin-bottom: 36px;
    border-inline-start: 2px solid ${(props) => (props.theme as Theme).accentColor};
    padding-inline-start: 24px;
`;

export const IntroLine = styled.div`
    font-family: var(--font-main);
    font-size: 1.05rem;
    line-height: 1.8;
    color: ${(props) => (props.theme as Theme).color}DD;
    font-weight: 400;
    margin-bottom: 8px;
`;

export const CategoryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 24px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const CategoryCard = styled.div`
    background: ${(props) => (props.theme as Theme).cardBackground};
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 4px;
    padding: 24px;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);

    &::before {
        content: '';
        position: absolute;
        top: -1px;
        left: -1px;
        width: 10px;
        height: 10px;
        border-top: 2px solid ${(props) => (props.theme as Theme).accentColor};
        border-left: 2px solid ${(props) => (props.theme as Theme).accentColor};
        opacity: 0.5;
    }

    &:hover {
        border-color: ${(props) => (props.theme as Theme).accentColor}40;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
        transform: translateY(-2px);
    }
    &:hover::before {
        opacity: 1;
    }
`;

export const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    border-bottom: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    padding-bottom: 12px;
`;

export const CategoryTitle = styled.h3`
    font-family: var(--font-mono);
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin: 0;
    color: ${(props) => (props.theme as Theme).color};
`;

export const SkillList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

export const SkillBadge = styled.div<{ $isCore?: boolean }>`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    background: ${(props) => (props.$isCore 
        ? `${(props.theme as Theme).accentColor}18` 
        : `${(props.theme as Theme).accentColor}08`)};
    border: 1px solid ${(props) => (props.$isCore 
        ? '#00f2ff' 
        : `${(props.theme as Theme).accentColor}15`)};
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    position: relative;
    margin-bottom: 4px;

    ${(props) => props.$isCore && css`
        box-shadow: 0 0 12px rgba(0, 242, 255, 0.25), inset 0 0 4px rgba(0, 242, 255, 0.1);
        
        &::after {
            content: '';
            position: absolute;
            top: 50%;
            right: 8px;
            transform: translateY(-50%);
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #00f2ff;
            box-shadow: 0 0 10px #00f2ff, 0 0 20px #00f2ff;
            opacity: 0.9;
        }

        &::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(0, 242, 255, 0.05), transparent);
            border-radius: 2px;
            pointer-events: none;
        }
    `}

    &:hover {
        background: ${(props) => (props.$isCore 
            ? 'rgba(0, 242, 255, 0.15)' 
            : `${(props.theme as Theme).accentColor}12`)};
        border-color: ${(props) => (props.$isCore 
            ? '#00f2ff' 
            : `${(props.theme as Theme).accentColor}50`)};
        transform: translateY(-2px) scale(1.05);
        box-shadow: ${(props) => (props.$isCore 
            ? '0 8px 25px rgba(0, 242, 255, 0.4)' 
            : '0 4px 12px rgba(0, 0, 0, 0.05)')};
        z-index: 10;
    }
`;

export const SkillIcon = styled.img`
    width: 18px;
    height: 18px;
    object-fit: contain;
    filter: grayscale(0.2) opacity(0.8);
`;

export const SkillName = styled.span`
    font-family: var(--font-mono);
    font-size: 0.78rem;
    font-weight: 500;
    color: ${(props) => (props.theme as Theme).color}EE;
`;

export const ModuleID = styled.div`
    font-family: var(--font-mono);
    font-size: 0.6rem;
    color: ${(props) => (props.theme as Theme).accentColor};
    opacity: 0.4;
    margin-inline-start: auto;
`;

export const GraphWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 900px;
    margin: 1rem 0 1rem;
    padding: 1rem 0 1rem;
    overflow: visible;
    background: radial-gradient(circle at 50% 50%, ${(props) => (props.theme as Theme).accentColor}08 0%, transparent 75%);
    z-index: 1; /* Stay below navbar */

    @media (max-width: 768px) {
        min-height: auto;
        margin: 1rem 0 4rem;
        padding-bottom: 0;
        background: none;
    }
`;

/* Lead-Engineer Mobile Grid */
export const MobileGridWrapper = styled.div`
    display: none;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 80px;
    width: 100%;

    @media (max-width: 768px) {
        display: flex;
    }
`;

export const MobileGroupCard = styled.div`
    background: ${(props) => (props.theme as Theme).cardBackground}40;
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 8px;
    padding: 24px;
    position: relative;
    backdrop-filter: blur(10px);
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: linear-gradient(90deg, 
            transparent, 
            ${(props) => (props.theme as Theme).accentColor}, 
            transparent
        );
    }
`;

export const MobileGroupTitle = styled.h4`
    font-family: var(--font-mono);
    font-size: 0.9rem;
    font-weight: 700;
    color: ${(props) => (props.theme as Theme).accentColor};
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: flex;
    align-items: center;
    gap: 12px;

    &::before {
        content: '';
        width: 8px;
        height: 8px;
        background: ${(props) => (props.theme as Theme).accentColor};
        box-shadow: 0 0 10px ${(props) => (props.theme as Theme).accentColor};
    }
`;

export const MobileTechGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 12px;
`;

export const MobileTechItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    background: ${(props) => (props.theme as Theme).cardBackground}80;
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor}40;
    border-radius: 4px;
    
    img {
        width: 20px;
        height: 20px;
        object-fit: contain;
    }

    span {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        font-weight: 500;
        color: ${(props) => (props.theme as Theme).color}EE;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const MobileImpactNote = styled.div`
    margin-top: 16px;
    font-family: var(--font-main);
    font-size: 0.8rem;
    line-height: 1.5;
    color: ${(props) => (props.theme as Theme).color}BB;
    padding-top: 12px;
    border-top: 1px dashed ${(props) => (props.theme as Theme).cardBorderColor}60;
`;


export const GroupNode = styled(motion.div)<{ $isActive: boolean; $isSelected: boolean; $isDimmed: boolean }>`
    padding: 16px 32px;
    background: ${(props) => props.$isActive 
        ? `${(props.theme as Theme).accentColor}f0` 
        : `${(props.theme as Theme).cardBackground}f0`};
    border: 1px solid ${(props) => props.$isSelected 
        ? '#00f2ff' 
        : `${(props.theme as Theme).cardBorderColor}`};
    border-radius: 40px;
    cursor: pointer;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: background 0.4s ease, border-color 0.4s ease;
    backdrop-filter: blur(12px);
    opacity: ${(props) => (props.$isDimmed ? 0.2 : 1)};
    box-shadow: ${(props) => props.$isSelected 
        ? '0 0 40px rgba(0, 242, 255, 0.5), inset 0 0 12px rgba(255, 255, 255, 0.2)' 
        : props.$isActive
            ? '0 0 20px rgba(0, 242, 255, 0.2)'
            : '0 4px 15px rgba(0, 0, 0, 0.1)'};
    box-sizing: border-box;
    max-width: 400px;
    
    &:hover {
        border-color: #00f2ff;
        box-shadow: 0 8px 30px rgba(0, 242, 255, 0.3);
        z-index: 50;
    }

    @media (max-width: 768px) {
        padding: 12px 24px;
        max-width: 280px;
    }
`;

export const NodeLabel = styled(motion.span)`
    font-family: var(--font-mono);
    font-size: 0.9rem;
    font-weight: 700;
    color: inherit;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

export const InlineImpactContent = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

export const ImpactText = styled.span`
    font-family: var(--font-main);
    font-size: 0.88rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.95);
    white-space: normal;
    text-align: center;
    line-height: 1.5;
    letter-spacing: 0.01em;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

export const TechNodeCircle = styled(motion.div)<{ $isActive: boolean; $isSelected: boolean; $isDimmed: boolean }>`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: ${(props) => props.$isActive 
        ? `${(props.theme as Theme).accentColor}18` 
        : `${(props.theme as Theme).cardBackground}`};
    border: 1px solid ${(props) => props.$isSelected 
        ? '#00f2ff' 
        : `${(props.theme as Theme).cardBorderColor}`};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s ease, border-color 0.3s ease;
    opacity: ${(props) => (props.$isDimmed ? 0.3 : 1)};
    backdrop-filter: blur(8px);
    
    ${(props) => props.$isSelected && css`
        box-shadow: 0 0 25px rgba(0, 242, 255, 0.4), inset 0 0 10px rgba(0, 242, 255, 0.1);
        transform: scale(1.1);
    `}

    &:hover {
        border-color: #00f2ff;
        transform: scale(1.15);
        box-shadow: 0 0 20px rgba(0, 242, 255, 0.4);
        z-index: 40;
    }

    @media (max-width: 768px) {
        width: 48px;
        height: 48px;
    }
`;

export const TechIconNode = styled(motion.img)`
    width: 24px;
    height: 24px;
    object-fit: contain;

    @media (max-width: 768px) {
        width: 20px;
        height: 20px;
    }
`;

export const TechLabel = styled(motion.div)`
    position: absolute;
    top: 110%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.85);
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 0.65rem;
    font-family: var(--font-mono);
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease;
    z-index: 45;

    ${TechNodeCircle}:hover & {
        opacity: 1;
    }
`;

export const ConnectionSvg = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 10;
`;

export const SoftSkillsSection = styled.div`
    margin-top: 10px;
    padding-top: 50px;
    border-top: 1px solid ${(props) => (props.theme as Theme).cardBorderColor}30;
    position: relative;
    z-index: 100;

    @media (max-width: 768px) {
        margin-top: 200px;
        padding-top: 100px;
    }
`;

export const SoftSkillsTitle = styled.h2`
    font-family: var(--font-mono);
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: ${(props) => (props.theme as Theme).accentColor};
    margin-bottom: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &::before, &::after {
        content: '';
        height: 1px;
        width: 100px;
        background: linear-gradient(to var(--dir, right), ${(props) => (props.theme as Theme).accentColor}, transparent);
    }
    &::after { --dir: left; }
`;

export const SoftSkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
`;

export const SoftSkillCard = styled.div`
    padding: 22px;
    background: ${(props) => (props.theme as Theme).cardBackground}C0;
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 6px;
    position: relative;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: ${(props) => (props.theme as Theme).accentColor}20;
    }

    &:hover {
        transform: translateY(-8px);
        border-color: ${(props) => (props.theme as Theme).accentColor}60;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        &::before {
            background: ${(props) => (props.theme as Theme).accentColor};
        }
    }
`;

export const SoftCategoryTitle = styled.h3`
    font-family: var(--font-mono);
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => (props.theme as Theme).color};
    margin-bottom: 24px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    display: flex;
    align-items: center;
    gap: 12px;

    &::before {
        content: '>';
        color: ${(props) => (props.theme as Theme).accentColor};
        font-weight: 900;
    }
`;

export const SoftItemList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const SoftItem = styled.li`
    font-family: var(--font-main);
    font-size: 1rem;
    line-height: 1.2;
    color: ${(props) => (props.theme as Theme).color}BB;
    margin-bottom: 16px;
    padding-left: 24px;
    position: relative;
    text-align: start;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 10px;
        width: 6px;
        height: 6px;
        background: ${(props) => (props.theme as Theme).accentColor}40;
        border: 1px solid ${(props) => (props.theme as Theme).accentColor};
        border-radius: 50%;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;
