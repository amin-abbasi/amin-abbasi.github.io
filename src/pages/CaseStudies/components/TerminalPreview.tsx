import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { ThemeContext } from 'styled-components';
import { Theme } from '@app/theme/themes';
import { highlightCode } from '../utils/highlighter';
import * as S from '../CaseStudies.styles';

interface TerminalPreviewProps {
    snippet: string;
    language?: string;
    visible: boolean;
    floating?: boolean;
    x?: number;
    y?: number;
}

/**
 * TerminalPreview Component
 * A mini-terminal window displaying code snippets with a typing effect.
 * Highlights code based on the current theme (VSCode Dark/Light style).
 */
const TerminalPreview: React.FC<TerminalPreviewProps> = ({ 
    snippet, 
    visible, 
    floating = true, 
    x = 0, 
    y = 0 
}) => {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext) as Theme;
    const isDarkMode = theme.background === '#0d1117';

    // Highlight snippet before typing
    const highlightedCode = highlightCode(snippet, isDarkMode);

    const content = (
        <S.TerminalContainer 
            $floating={floating} 
            $x={x} 
            $y={y}
            as={motion.div}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 5 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <S.TerminalHeader>
                <S.TerminalDots>
                    <span />
                    <span />
                    <span />
                </S.TerminalDots>
                <S.TerminalTitle>
                    {t('layout:caseStudies.terminal.system', { defaultValue: 'system.log' })} — {t('layout:caseStudies.terminal.title', { defaultValue: 'Terminal Preview' })}
                </S.TerminalTitle>
            </S.TerminalHeader>
            <S.TerminalBody>
                <S.TerminalLine>
                    <Typewriter
                        options={{
                            delay: 1, // Maximum typing speed
                            cursor: '▊',
                            autoStart: true,
                            loop: false,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(`<span style="color: var(--accent-color); opacity: 0.5;">// ${t('layout:caseStudies.terminal.executing', { defaultValue: 'Executing...' })}</span><br/>`)
                                .pauseFor(50) // Very short pause
                                .typeString(highlightedCode.replace(/\n/g, '<br/>'))
                                .start();
                        }}
                    />
                </S.TerminalLine>
            </S.TerminalBody>
        </S.TerminalContainer>
    );

    if (!floating) {
        return visible ? content : null;
    }

    return (
        <AnimatePresence>
            {visible && content}
        </AnimatePresence>
    );
};

export default TerminalPreview;
