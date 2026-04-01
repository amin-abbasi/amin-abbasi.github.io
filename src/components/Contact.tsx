import { useState, useContext, FormEvent } from 'react';
import { Head } from 'vite-react-ssg';
import { Container } from 'react-bootstrap';
import { styled, ThemeContext } from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import { Linkedin, Github, Mail, MapPin, Clock, Loader2, Send } from 'lucide-react';
import Header from '@components/Header';
import { Theme } from '@app/theme/themes';

// ── Layout ────────────────────────────────────────────────────────────────────
const MainContainer = styled.div`
    padding: 40px 0 80px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 48px;
    align-items: start;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

// ── Info column ───────────────────────────────────────────────────────────────
const InfoCard = styled.div`
    padding: 32px;
    background: ${(props) => (props.theme as Theme).cardBackground};
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 6px;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: -1px;
        inset-inline-start: -1px;
        width: 14px;
        height: 14px;
        border-top: 2px solid ${(props) => (props.theme as Theme).accentColor};
        border-inline-start: 2px solid ${(props) => (props.theme as Theme).accentColor};
        border-radius: 6px 0 0 0;
    }
`;

const InfoLabel = styled.p`
    font-family: var(--font-mono);
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${(props) => (props.theme as Theme).accentColor};
    margin-bottom: 1.5rem;
    opacity: 0.8;
`;

const InfoTitle = styled.h3`
    font-family: var(--font-mono);
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => (props.theme as Theme).color};
    margin: 0 0 0.8rem;
    letter-spacing: -0.02em;
`;

const InfoSubtitle = styled.p`
    font-size: 0.9rem;
    line-height: 1.7;
    color: ${(props) => (props.theme as Theme).color}BB;
    margin-bottom: 0.5rem;
    text-align: justify;
`;

const ContactItem = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 0;
    border-bottom: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    text-decoration: none;
    transition: all 0.2s ease;
    cursor: pointer;
    color: inherit;

    &:last-child { border-bottom: none; }
    &:hover { opacity: 0.8; }
    &:hover svg { transform: scale(1.1); }
`;

const ContactIcon = styled.span`
    width: 36px;
    height: 36px;
    border-radius: 6px;
    background: ${(props) => (props.theme as Theme).accentColor}15;
    border: 1px solid ${(props) => (props.theme as Theme).accentColor}30;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: ${(props) => (props.theme as Theme).accentColor};

    svg { transition: transform 0.2s ease; }
`;

const ContactText = styled.div`
    font-family: var(--font-mono);
    font-size: 0.78rem;

    strong {
        display: block;
        color: ${(props) => (props.theme as Theme).color};
        font-weight: 600;
        margin-bottom: 2px;
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
    }
    span {
        color: ${(props) => (props.theme as Theme).color}BB;
    }
`;

// ── Availability status ───────────────────────────────────────────────────────
const StatusCard = styled.div`
    margin-top: 24px;
    padding: 14px 18px;
    background: rgba(0, 230, 118, 0.07);
    border: 1px solid rgba(0, 230, 118, 0.25);
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const PulseDot = styled.span`
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #00e676;
    flex-shrink: 0;
    box-shadow: 0 0 0 0 rgba(0, 230, 118, 0.7);
    animation: pulseDot 2s infinite;

    @keyframes pulseDot {
        0% { box-shadow: 0 0 0 0 rgba(0, 230, 118, 0.7); }
        70% { box-shadow: 0 0 0 8px rgba(0, 230, 118, 0); }
        100% { box-shadow: 0 0 0 0 rgba(0, 230, 118, 0); }
    }
`;

const StatusText = styled.span`
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: #00e676;
    font-weight: 600;
`;

// ── Form column ───────────────────────────────────────────────────────────────
const FormCard = styled.div`
    padding: 32px;
    background: ${(props) => (props.theme as Theme).cardBackground};
    border: 1px solid ${(props) => (props.theme as Theme).cardBorderColor};
    border-radius: 6px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: -1px;
        inset-inline-end: -1px;
        width: 14px;
        height: 14px;
        border-bottom: 2px solid ${(props) => (props.theme as Theme).accentColor};
        border-inline-end: 2px solid ${(props) => (props.theme as Theme).accentColor};
        border-radius: 0 0 6px 0;
    }
`;

const FormLabel = styled.label`
    display: block;
    font-family: var(--font-mono);
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${(props) => (props.theme as Theme).accentColor};
    margin-bottom: 8px;
    opacity: 0.9;
    text-align: start;
`;

const sharedInputStyles = (theme: Theme) => `
    width: 100%;
    background: ${theme.background};
    border: 1px solid ${theme.cardBorderColor};
    border-radius: 4px;
    padding: 12px 14px;
    font-family: var(--font-main);
    font-size: 0.9rem;
    color: ${theme.color};
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    box-sizing: border-box;

    &:focus {
        border-color: ${theme.accentColor}60;
        box-shadow: 0 0 0 3px ${theme.accentColor}12;
    }

    &::placeholder {
        color: ${theme.color}44;
    }
`;

const InputField = styled.input<{ $theme: Theme }>`
    ${(props) => sharedInputStyles(props.$theme)}
`;

const TextareaField = styled.textarea<{ $theme: Theme }>`
    ${(props) => sharedInputStyles(props.$theme)}
    resize: vertical;
    min-height: 130px;
`;

const FormGroup = styled.div`
    margin-bottom: 20px;
`;

const SubmitButton = styled.button<{ $accent: string; $disabled?: boolean }>`
    width: 100%;
    padding: 13px 24px;
    background: ${(props) => props.$disabled ? props.$accent + '66' : props.$accent};
    color: #fff;
    border: none;
    border-radius: 4px;
    font-family: var(--font-mono);
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    cursor: ${(props) => props.$disabled ? 'not-allowed' : 'pointer'};
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 8px;

    &:hover:not(:disabled) {
        filter: brightness(1.1);
        transform: translateY(-1px);
    }
`;

const SuccessMessage = styled.div`
    padding: 16px 20px;
    background: rgba(0, 230, 118, 0.08);
    border: 1px solid rgba(0, 230, 118, 0.3);
    border-radius: 6px;
    font-family: var(--font-mono);
    font-size: 0.82rem;
    color: #00e676;
    text-align: center;
    margin-top: 16px;
`;

const ErrorMessage = styled.div`
    padding: 16px 20px;
    background: rgba(255, 80, 80, 0.08);
    border: 1px solid rgba(255, 80, 80, 0.3);
    border-radius: 6px;
    font-family: var(--font-mono);
    font-size: 0.82rem;
    color: #ff5050;
    text-align: center;
    margin-top: 16px;
`;

interface SocialLink {
    network: string;
    href: string;
}

interface ContactProps {
    header?: string;
}

function Contact(props: ContactProps) {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext) as Theme;
    const { header } = props;

    // Fetch localized social data with proper typing
    const socialLinks = t('resSocial:social', { returnObjects: true }) as SocialLink[];
    const email = socialLinks?.find(s => s.network === 'email')?.href?.replace('mailto:', '') || '';
    const linkedin = socialLinks?.find(s => s.network === 'linkedin')?.href || '';
    const github = socialLinks?.find(s => s.network === 'github')?.href || '';

    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        try {
            // Using Formspree — replace FORM_ID with your actual Formspree form ID
            const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus('success');
                setForm({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const isSending = status === 'sending';

    return (
        <>
            <Head>
                <title>{header || t('layout:sections.contact', { defaultValue: 'Contact' })} | Amin Abbasi</title>
                <meta name="description" content="Reach out to Amin Abbasi for Lead Backend and Architecture roles." />
            </Head>
            <Header title={header || t('layout:sections.contact', { defaultValue: 'Contact' })} />
            <MainContainer>
                <Container fluid style={{ maxWidth: '1200px', padding: '0 24px' }}>
                    <Fade direction="up" triggerOnce duration={700}>
                        <Grid>
                            {/* Left: Contact Info */}
                            <InfoCard>
                                <InfoLabel>{t('layout:contact.init')}</InfoLabel>
                                <InfoTitle>{t('layout:contact.title')}</InfoTitle>
                                <InfoSubtitle>
                                    {t('layout:contact.subtitle')}
                                </InfoSubtitle>

                                <ContactItem href={`mailto:${email}`}>
                                    <ContactIcon><Mail size={16} /></ContactIcon>
                                    <ContactText>
                                        <span>{email}</span>
                                    </ContactText>
                                </ContactItem>

                                <ContactItem href={linkedin} target="_blank" rel="noopener noreferrer">
                                    <ContactIcon><Linkedin size={16} /></ContactIcon>
                                    <ContactText>
                                        <span>{linkedin}</span>
                                    </ContactText>
                                </ContactItem>

                                <ContactItem href={github} target="_blank" rel="noopener noreferrer">
                                    <ContactIcon><Github size={16} /></ContactIcon>
                                    <ContactText>
                                        <span>{github}</span>
                                    </ContactText>
                                </ContactItem>

                                <ContactItem as="div">
                                    <ContactIcon><MapPin size={16} /></ContactIcon>
                                    <ContactText>
                                        <span>{t('layout:contact.location')}</span>
                                    </ContactText>
                                </ContactItem>

                                <ContactItem as="div">
                                    <ContactIcon><Clock size={16} /></ContactIcon>~
                                    <ContactText>
                                        <span>{t('layout:contact.timezone')}</span>
                                    </ContactText>
                                </ContactItem>

                                <StatusCard>
                                    <PulseDot />
                                    <StatusText>{t('layout:contact.status')}</StatusText>
                                </StatusCard>
                            </InfoCard>

                            {/* Right: Contact Form */}
                            <FormCard>
                                <InfoLabel>{t('layout:contact.sendInit')}</InfoLabel>
                                <InfoTitle style={{ marginBottom: '1.5rem' }}>{t('layout:contact.sendTitle')}</InfoTitle>

                                <form onSubmit={handleSubmit}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                        <FormGroup>
                                            <FormLabel htmlFor="contact-name">{t('layout:contact.form.name')}</FormLabel>
                                            <InputField
                                                id="contact-name"
                                                $theme={theme}
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder={t('layout:contact.form.namePlaceholder')}
                                                required
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormLabel htmlFor="contact-email">{t('layout:contact.form.email')}</FormLabel>
                                            <InputField
                                                id="contact-email"
                                                $theme={theme}
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder={t('layout:contact.form.emailPlaceholder')}
                                                required
                                            />
                                        </FormGroup>
                                    </div>
                                    <FormGroup>
                                        <FormLabel htmlFor="contact-subject">{t('layout:contact.form.subject')}</FormLabel>
                                        <InputField
                                            id="contact-subject"
                                            $theme={theme}
                                            type="text"
                                            name="subject"
                                            value={form.subject}
                                            onChange={handleChange}
                                            placeholder={t('layout:contact.form.subjectPlaceholder')}
                                            required
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormLabel htmlFor="contact-message">{t('layout:contact.form.message')}</FormLabel>
                                        <TextareaField
                                            id="contact-message"
                                            $theme={theme}
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder={t('layout:contact.form.messagePlaceholder')}
                                            required
                                        />
                                    </FormGroup>

                                    <SubmitButton
                                        type="submit"
                                        $accent={theme.accentColor}
                                        $disabled={isSending}
                                        disabled={isSending}
                                    >
                                        {isSending ? (
                                            <>
                                                <Loader2 size={14} style={{ animation: 'spin 1.2s linear infinite' }} />
                                                {t('layout:contact.form.sending')}
                                            </>
                                        ) : (
                                            <>
                                                <Send size={14} />
                                                {t('layout:contact.form.submit')}
                                            </>
                                        )}
                                    </SubmitButton>

                                    {status === 'success' && (
                                        <SuccessMessage>
                                            {t('layout:contact.success')}
                                        </SuccessMessage>
                                    )}
                                    {status === 'error' && (
                                        <ErrorMessage>
                                            {t('layout:contact.error')}
                                        </ErrorMessage>
                                    )}
                                </form>

                                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                            </FormCard>
                        </Grid>
                    </Fade>
                </Container>
            </MainContainer>
        </>
    );
}

export default Contact;
