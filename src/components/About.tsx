import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import { styled } from 'styled-components';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import FallbackSpinner from './FallbackSpinner';
import { Theme } from '../theme/themes';

const AboutContainer = styled(Container)`
    padding-top: 2rem;
    padding-bottom: 4rem;
`;

const TextCol = styled(Col)`
    flex-direction: column;
    text-align: start;
    font-size: 1.05em;
    font-weight: 400;
    line-height: 1.8;
    margin-bottom: 2rem;
    position: relative;
    z-index: 10;

    @media (min-width: 992px) {
        padding-inline-end: 4rem;
    }

    h3, h4 {
        font-family: var(--font-mono);
        font-weight: 700;
        letter-spacing: -0.02em;
    }

    h3 {
        margin-top: 2rem;
        margin-bottom: 1.5rem;
        color: ${(props) => (props.theme as Theme).accentColor};
        font-size: 1.5rem;
    }

    h4 {
        margin-top: 1.8rem;
        margin-bottom: 1rem;
        color: ${(props) => (props.theme as Theme).color};
        font-size: 1.2rem;
    }

    p {
        margin-bottom: 1.5rem;
        color: ${(props) => (props.theme as Theme).color}DD;
    }

    strong {
        color: ${(props) => (props.theme as Theme).accentColor};
        font-weight: 600;
    }
`;

const ImageCol = styled(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    position: relative;
    z-index: 1;
`;

const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
`;

const ProfileImageContainer = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1.1; /* Adjust to crop the bottom/stomach area */
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-end; /* Align image to bottom so top stays visible, bottom gets cut */
    border-bottom: 3px solid ${(props) => (props.theme as Theme).accentColor};

    /* Animated Glowing Orb */
    &::after {
        content: '';
        position: absolute;
        width: 250px;
        height: 250px;
        background: ${(props) => (props.theme as Theme).accentColor};
        filter: blur(80px);
        opacity: 0.35;
        border-radius: 50%;
        animation: floatOrb 8s ease-in-out infinite;
        z-index: 0;
        top: 20%;
    }

    @keyframes floatOrb {
        0% {
            transform: translate(0, 0) scale(1);
        }
        33% {
            transform: translate(30px, -50px) scale(1.1);
        }
        66% {
            transform: translate(-20px, 20px) scale(0.9);
        }
        100% {
            transform: translate(0, 0) scale(1);
        }
    }
`;

const QuoteText = styled.div`
    margin-top: 1.5rem;
    font-family: var(--font-mono);
    font-size: 0.9rem;
    font-style: italic;
    color: ${(props) => (props.theme as Theme).color}BB;
    text-align: center;
    position: relative;
    padding: 0 20px;

    &::before,
    &::after {
        content: '"';
        color: ${(props) => (props.theme as Theme).accentColor}80;
        font-size: 1.5rem;
        position: absolute;
        top: -10px;
    }

    &::before {
        inset-inline-start: 0;
    }
    &::after {
        inset-inline-end: 0;
    }
`;

const ProfileImage = styled.img`
    width: 100%;
    max-width: 600px;
    height: auto;
    display: block;
    z-index: 2;
    position: relative;
    filter: drop-shadow(0 0 10px ${(props) => (props.theme as Theme).accentColor}40);
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.08);
        filter: drop-shadow(0 0 40px ${(props) => (props.theme as Theme).accentColor});
    }
`;

const DocLabel = styled.div`
    font-family: var(--font-mono);
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: ${(props) => (props.theme as Theme).accentColor};
    margin-bottom: 0.5rem;
    opacity: 0.8;
`;

interface AboutProps {
    header?: string;
}

interface AboutData {
    about: string;
    imageSource: string;
}

function About(props: AboutProps) {
    const { t } = useTranslation();
    const { header } = props;
    const data = {
        about: t('resAbout:about'),
        imageSource: t('resAbout:imageSource')
    } as AboutData;

    return (
        <>
            <Header title={header || t('layout:sections.about')} />
            <AboutContainer>
                {data ? (
                    <Fade triggerOnce duration={1000}>
                        <Row className="align-items-center align-items-lg-start">
                            <TextCol lg={7} md={12} className="order-2 order-lg-1">
                                <DocLabel>{t('layout:about.refId', { defaultValue: 'REF_ID: PRO_BIO_772' })}</DocLabel>
                                <ReactMarkdown>{data.about}</ReactMarkdown>
                            </TextCol>
                            <ImageCol lg={5} md={12} className="order-1 order-lg-2 mb-5 mb-lg-0 mt-lg-4">
                                <Fade direction="right" triggerOnce delay={200}>
                                    <ProfileSection>
                                        <ProfileImageContainer>
                                            <ProfileImage src={data.imageSource} alt="profile" loading="lazy" />
                                        </ProfileImageContainer>
                                        <QuoteText>{t('layout:about.quote', { defaultValue: "The best code is the line you didn't have to write." })}</QuoteText>
                                    </ProfileSection>
                                </Fade>
                            </ImageCol>
                        </Row>
                    </Fade>
                ) : (
                    <FallbackSpinner />
                )}
            </AboutContainer>
        </>
    );
}

export default About;
