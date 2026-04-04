// src/components/NavBar.styles.ts
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Theme } from '@app/theme/themes';

export const StyledNavbar = styled.nav<{ $expanded: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1030;
    background-color: ${(props) => (props.theme as Theme).background}F2; /* Semi-transparent */
    border-bottom: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    padding: 0.5rem 0;
`;

export const NavContainer = styled.div`
    display: flex;
    flex-wrap: inherit;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1320px;
    margin-right: auto;
    margin-left: auto;
    padding-right: var(--bs-gutter-x, 0.75rem);
    padding-left: var(--bs-gutter-x, 0.75rem);
`;

export const Brand = styled(NavLink)`
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    text-decoration: none;
    white-space: nowrap;
    display: flex;
    align-items: center;

    img {
        width: 40px;
        height: 40px;
        object-fit: contain;
    }
`;

export const Toggle = styled.button`
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 0.375rem;
    transition: box-shadow 0.15s ease-in-out;
    display: none;
    cursor: pointer;

    @media (max-width: 991px) {
        display: block;
    }

    &:focus {
        text-decoration: none;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgba(${(props) => (props.theme as Theme).accentColor}40);
    }
`;

export const ToggleIcon = styled.span`
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28${(props) => (props.theme as Theme).color.replace('#', '%23')}%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
`;

export const Collapse = styled.div<{ $expanded: boolean }>`
    display: flex;
    flex-basis: auto;
    flex-grow: 1;
    align-items: center;

    @media (max-width: 991px) {
        display: ${(props) => (props.$expanded ? 'flex' : 'none')};
        flex-basis: 100%;
        flex-direction: column;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
`;

export const NavItems = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    margin-inline-start: auto;
    align-items: center;

    @media (max-width: 991px) {
        flex-direction: column;
        width: 100%;
        margin-inline-start: 0;
        gap: 1rem;
    }
`;

export const InternalNavLink = styled(NavLink)`
    color: ${(props) => (props.theme as Theme).navbarTheme.linkColor};
    margin-inline-start: 0.75em;
    margin-inline-end: 0.75em;
    font-size: 0.8rem;
    font-family: var(--font-mono);
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    transition: all 0.3s ease;

    &:hover {
        color: ${(props) => (props.theme as Theme).navbarTheme.linkHoverColor};
    }

    &.active {
        color: ${(props) => (props.theme as Theme).navbarTheme.linkActiveColor};
        border-bottom-color: ${(props) => (props.theme as Theme).accentColor};
    }

    @media (max-width: 991px) {
        width: 100%;
        text-align: center;
        padding: 12px 0;
        margin: 0;
        border-bottom: 1px solid ${(props) => (props.theme as Theme).cardBorderColor}20;
    }
`;

export const ExternalNavLink = styled.a`
    color: ${(props) => (props.theme as Theme).navbarTheme.linkColor};
    margin-inline-start: 0.75em;
    margin-inline-end: 0.75em;
    font-size: 0.8rem;
    font-family: var(--font-mono);
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    transition: all 0.3s ease;

    &:hover {
        color: ${(props) => (props.theme as Theme).navbarTheme.linkHoverColor};
    }

    @media (max-width: 991px) {
        width: 100%;
        text-align: center;
        padding: 12px 0;
        margin: 0;
        border-bottom: 1px solid ${(props) => (props.theme as Theme).cardBorderColor}20;
    }
`;

export const Controls = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-inline-start: 0.75rem;

    @media (max-width: 991px) {
        margin-top: 1.5rem;
        padding-top: 1rem;
        border-top: 1px solid ${(props) => (props.theme as Theme).cardBorderColor}40;
        width: 100%;
        justify-content: center;
        gap: 1.5rem;
        flex-wrap: wrap;
    }
`;

export const CVButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 0 18px;
    height: 24px;
    background: ${(props) => (props.theme as Theme).accentColor};
    color: #fff !important;
    border-radius: 25px;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    margin-top: -0.5rem;
    margin-right: 1rem;

    &:hover {
        filter: brightness(1.12);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px ${(props) => (props.theme as Theme).accentColor}40;
    }
`;
