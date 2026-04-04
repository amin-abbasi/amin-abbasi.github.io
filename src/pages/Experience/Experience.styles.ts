import { styled } from 'styled-components';
import { Theme } from '@app/theme/themes';
import { Section } from '@components/shared/layout';

export const TimelineSection = styled(Section)`
    padding-bottom: 6rem;
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
    margin-bottom: 72px;

    @media (max-width: 768px) {
        margin-bottom: 56px;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;

export const TrackDot = styled.div<{ $accent: string }>`
    position: absolute;
    inset-inline-start: -56px;
    top: 30px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid ${(p) => p.$accent};
    background: ${(props) => (props.theme as Theme).background};
    box-shadow: 0 0 8px ${(p) => p.$accent}60;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Card = styled.div`
    padding: 2.5rem;
    background: ${(props) => (props.theme as Theme).cardBackground};
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 8px;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    margin-bottom: 0.5rem;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 12px;
        height: 12px;
    }
    &::before {
        top: -1px;
        left: -1px;
        border-top: 2px solid ${(props) => (props.theme as Theme).accentColor};
        border-left: 2px solid ${(props) => (props.theme as Theme).accentColor};
        border-radius: 8px 0 0 0;
    }
    &::after {
        bottom: -1px;
        right: -1px;
        border-bottom: 2px solid ${(props) => (props.theme as Theme).accentColor};
        border-right: 2px solid ${(props) => (props.theme as Theme).accentColor};
        border-radius: 0 0 8px 0;
    }

    &:hover {
        border-color: ${(props) => (props.theme as Theme).accentColor}40;
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
        transform: translateY(-4px);
    }
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 0.5rem;
`;

export const JobTitle = styled.h3`
    font-family: var(--font-mono);
    font-size: 1.25rem;
    font-weight: 700;
    margin: 0;
    color: ${(props) => (props.theme as Theme).color};
    letter-spacing: -0.01em;
`;

export const DateBadge = styled.span`
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 600;
    color: ${(props) => (props.theme as Theme).accentColor};
    background: ${(props) => (props.theme as Theme).accentColor}12;
    border: 1px solid ${(props) => (props.theme as Theme).accentColor}30;
    padding: 0.35rem 1rem;
    border-radius: 4px;
    letter-spacing: 0.05em;
`;

export const SubtitleRow = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1.5rem;

    .badges-container {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
    }

    .promotion-badge {
        order: -1;
    }

    .work-type-badge {
        order: 0;
    }

    @media (max-width: 768px) {
        .promotion-badge {
            order: 1;
        }
        .work-type-badge {
            order: 0;
        }
    }
`;

export const CompanyName = styled.span`
    font-family: var(--font-mono);
    font-size: 0.88rem;
    font-weight: 500;
    color: ${(props) => (props.theme as Theme).color}AA;
    
    &::before {
        content: '@ ';
        color: ${(props) => (props.theme as Theme).accentColor};
    }
`;

export const WorkTypeBadge = styled.span`
    font-family: var(--font-mono);
    font-size: 0.64rem;
    font-weight: 600;
    padding: 0.2rem 0.6rem;
    border-radius: 50px;
    background: transparent;
    color: ${(props) => (props.theme as Theme).accentColor};
    border: 1px solid ${(props) => (props.theme as Theme).accentColor}40;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: inline-flex;
    align-items: center;
`;

export const BulletList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    li {
        position: relative;
        padding-inline-start: 1.75rem;
        font-size: 0.95rem;
        line-height: 1.2;
        color: ${(props) => (props.theme as Theme).color}DD;
        text-align: start;

        &::before {
            content: '▸';
            position: absolute;
            inset-inline-start: 0;
            color: ${(props) => (props.theme as Theme).accentColor};
            font-size: 1.25rem;
            line-height: 1;
        }
    }
`;

export const TechStackRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${(props) => (props.theme as Theme).cardBorderColor}60;
`;

export const TechTag = styled.span`
    font-family: var(--font-mono);
    font-size: 0.65rem;
    font-weight: 600;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    background: ${(props) => (props.theme as Theme).accentColor}0D;
    color: ${(props) => (props.theme as Theme).accentColor};
    border: 1px solid ${(props) => (props.theme as Theme).accentColor}25;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    transition: all 0.2s ease;

    &:hover {
        background: ${(props) => (props.theme as Theme).accentColor}15;
    }
`;

export const PromotionBanner = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    z-index: 5;
`;

export const PromotionPill = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.2rem 0.8rem;
    background: ${(props) => (props.theme as Theme).accentColor}1A;
    border: 1px solid ${(props) => (props.theme as Theme).accentColor}40;
    border-radius: 50px;
    font-family: var(--font-mono);
    font-size: 0.64rem;
    font-weight: 700;
    color: ${(props) => (props.theme as Theme).accentColor};
    letter-spacing: 0.05em;
    text-transform: uppercase;
`;

export const EntryIndex = styled.div`
    position: absolute;
    inset-inline-start: -80px;
    top: 30px;
    width: 24px;
    font-family: var(--font-mono);
    font-size: 0.65rem;
    font-weight: 700;
    color: ${(props) => (props.theme as Theme).accentColor};
    opacity: 0.4;
    text-align: right;
    padding-right: 1rem;

    @media (max-width: 768px) {
        display: none;
    }
`;
