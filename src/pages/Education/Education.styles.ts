// src/pages/Education/Education.styles.ts
import { styled } from 'styled-components';
import { Theme } from '@app/theme/themes';

export const MainContainer = styled.div`
    padding: 40px 0 80px;
    position: relative;
`;

export const TimelineTrack = styled.div`
    position: relative;
    padding-inline-start: 80px;

    @media (max-width: 768px) {
        padding-inline-start: 0;
    }

    &::before {
        content: '';
        position: absolute;
        inset-inline-start: 28px;
        top: 0;
        bottom: 0;
        width: 1px;
        background: ${(props) => (props.theme as Theme).timelineLineColor};
        @media (max-width: 768px) {
            display: none;
        }
    }
`;

export const EntryWrapper = styled.div`
    position: relative;
    margin-bottom: 180px;

    @media (max-width: 768px) {
        margin-bottom: 80px;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;

export const TrackDot = styled.div<{ $accent: string }>`
    position: absolute;
    inset-inline-start: -56px;
    top: 30px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid ${(p) => p.$accent};
    background: ${(props) => (props.theme as Theme).background};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px ${(p) => p.$accent}40;

    &::after {
        content: '';
        width: 4px;
        height: 4px;
        background: ${(p) => p.$accent};
        border-radius: 50%;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Card = styled.div`
    padding: 28px 32px;
    margin-top: 1.4em;
    background: ${(props) => (props.theme as Theme).cardBackground};
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 4px;
    position: relative;
    transition: all 0.3s ease;

    /* Blueprint accents */
    &::before {
        content: '';
        position: absolute;
        top: -1px;
        left: -1px;
        width: 12px;
        height: 12px;
        border-top: 2px solid ${(props) => (props.theme as Theme).accentColor};
        border-inline-start: 2px solid ${(props) => (props.theme as Theme).accentColor};
    }

    &:hover {
        border-color: ${(props) => (props.theme as Theme).accentColor}40;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        transform: translateY(-2px);
    }
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 8px;
`;

export const TitleRow = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const DegreeTitle = styled.h3`
    font-family: var(--font-mono);
    font-size: 1.15rem;
    font-weight: 700;
    margin: 0;
    color: ${(props) => (props.theme as Theme).color};
    letter-spacing: -0.01em;
`;

export const DateBadge = styled.span`
    font-family: var(--font-mono);
    font-size: 0.8rem;
    font-weight: 600;
    color: ${(props) => (props.theme as Theme).accentColor};
    background: ${(props) => (props.theme as Theme).accentColor}08;
    border: 1px solid ${(props) => (props.theme as Theme).accentColor}25;
    padding: 4px 12px;
    border-radius: 2px;
    letter-spacing: 0.05em;
`;

export const Institution = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-mono);
    font-size: 0.85rem;
    font-weight: 500;
    color: ${(props) => (props.theme as Theme).color}AA;
    margin-bottom: 20px;
    letter-spacing: 0.02em;
    text-align: start;
`;

export const BulletList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    li {
        position: relative;
        padding-inline-start: 20px;
        font-size: 0.92rem;
        line-height: 1.2;
        color: ${(props) => (props.theme as Theme).color}BB;
        text-align: start;

        &::before {
            content: '▸';
            position: absolute;
            margin-top: -0.3em;
            inset-inline-start: 0;
            color: ${(props) => (props.theme as Theme).accentColor};
            font-size: 1.5em;
        }
    }
`;
