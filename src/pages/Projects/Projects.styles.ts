// src/pages/Projects/Projects.styles.ts
import { styled } from 'styled-components';
import { Theme } from '@app/theme/themes';

export const MainContainer = styled.div`
    position: relative;
    padding: 40px 0;
`;

export const SectionContent = styled.div`
    width: 100%;
`;

export const ShowMoreWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 48px;
`;

export const StyledButton = styled.button`
    padding: 12px 32px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 12px;
    transition: all 0.2s ease;
    background: ${(props) => (props.theme as Theme).accentColor};
    border: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        background: ${(props) => (props.theme as Theme).accentColor}EE;
        transform: translateY(-2px);
        box-shadow: 0 10px 20px ${(props) => (props.theme as Theme).accentColor}40;
    }
`;
