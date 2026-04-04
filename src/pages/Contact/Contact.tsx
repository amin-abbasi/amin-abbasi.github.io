// src/pages/Contact/Contact.tsx
import { useState, useContext, FormEvent, ChangeEvent } from 'react';
import { Head } from 'vite-react-ssg';
import { ThemeContext } from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import { Linkedin, Github, Mail, MapPin, Clock, Loader2, Send } from 'lucide-react';
import Header from '@components/Header';
import { StyledContainer } from '@components/shared/layout';
import { Theme } from '@app/theme/themes';
import { SocialLink } from '@core/types/resume';
import * as S from './Contact.styles';

interface ContactProps {
    header?: string;
}

/**
 * Contact Page
 * Provides a secure, strictly-typed contact form and social info.
 * Part of the Architectural Hardening initiative.
 */
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

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        try {
            // Using Formspree — replace YOUR_FORM_ID with actual ID in production
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
            
            <S.MainContainer>
                <StyledContainer style={{ maxWidth: '1200px', padding: '0 24px' }}>
                    <Fade direction="up" triggerOnce duration={700}>
                        <S.Grid>
                            {/* Left: Contact Info */}
                            <S.InfoCard>
                                <S.InfoLabel>{t('layout:contact.init')}</S.InfoLabel>
                                <S.InfoTitle>{t('layout:contact.title')}</S.InfoTitle>
                                <S.InfoSubtitle>
                                    {t('layout:contact.subtitle')}
                                </S.InfoSubtitle>

                                <S.ContactItem href={`mailto:${email}`}>
                                    <S.ContactIcon><Mail size={16} /></S.ContactIcon>
                                    <S.ContactText>
                                        <span>{email}</span>
                                    </S.ContactText>
                                </S.ContactItem>

                                <S.ContactItem href={linkedin} target="_blank" rel="noopener noreferrer">
                                    <S.ContactIcon><Linkedin size={16} /></S.ContactIcon>
                                    <S.ContactText>
                                        <span>{linkedin}</span>
                                    </S.ContactText>
                                </S.ContactItem>

                                <S.ContactItem href={github} target="_blank" rel="noopener noreferrer">
                                    <S.ContactIcon><Github size={16} /></S.ContactIcon>
                                    <S.ContactText>
                                        <span>{github}</span>
                                    </S.ContactText>
                                </S.ContactItem>

                                <S.ContactItem as="div">
                                    <S.ContactIcon><MapPin size={16} /></S.ContactIcon>
                                    <S.ContactText>
                                        <span>{t('layout:contact.location')}</span>
                                    </S.ContactText>
                                </S.ContactItem>

                                <S.ContactItem as="div">
                                    <S.ContactIcon><Clock size={16} /></S.ContactIcon>
                                    <S.ContactText>
                                        <span>{t('layout:contact.timezone')}</span>
                                    </S.ContactText>
                                </S.ContactItem>

                                <S.StatusCard>
                                    <S.PulseDot />
                                    <S.StatusText>{t('layout:contact.status')}</S.StatusText>
                                </S.StatusCard>
                            </S.InfoCard>

                            {/* Right: Contact Form */}
                            <S.FormCard>
                                <S.InfoLabel>{t('layout:contact.sendInit')}</S.InfoLabel>
                                <S.InfoTitle style={{ marginBottom: '1.5rem' }}>{t('layout:contact.sendTitle')}</S.InfoTitle>

                                <form onSubmit={handleSubmit}>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                                        <S.FormGroup>
                                            <S.FormLabel htmlFor="contact-name">{t('layout:contact.form.name')}</S.FormLabel>
                                            <S.InputField
                                                id="contact-name"
                                                $theme={theme}
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder={t('layout:contact.form.namePlaceholder')}
                                                required
                                            />
                                        </S.FormGroup>
                                        <S.FormGroup>
                                            <S.FormLabel htmlFor="contact-email">{t('layout:contact.form.email')}</S.FormLabel>
                                            <S.InputField
                                                id="contact-email"
                                                $theme={theme}
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder={t('layout:contact.form.emailPlaceholder')}
                                                required
                                            />
                                        </S.FormGroup>
                                    </div>
                                    <S.FormGroup>
                                        <S.FormLabel htmlFor="contact-subject">{t('layout:contact.form.subject')}</S.FormLabel>
                                        <S.InputField
                                            id="contact-subject"
                                            $theme={theme}
                                            type="text"
                                            name="subject"
                                            value={form.subject}
                                            onChange={handleChange}
                                            placeholder={t('layout:contact.form.subjectPlaceholder')}
                                            required
                                        />
                                    </S.FormGroup>
                                    <S.FormGroup>
                                        <S.FormLabel htmlFor="contact-message">{t('layout:contact.form.message')}</S.FormLabel>
                                        <S.TextareaField
                                            id="contact-message"
                                            $theme={theme}
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder={t('layout:contact.form.messagePlaceholder')}
                                            required
                                        />
                                    </S.FormGroup>

                                    <S.SubmitButton
                                        type="submit"
                                        $accent={theme.accentColor}
                                        $disabled={isSending}
                                        disabled={isSending}
                                    >
                                        {isSending ? (
                                            <>
                                                <Loader2 size={14} style={{ animation: '${S.spin} 1.2s linear infinite' }} />
                                                {t('layout:contact.form.sending')}
                                            </>
                                        ) : (
                                            <>
                                                <Send size={14} />
                                                {t('layout:contact.form.submit')}
                                            </>
                                        )}
                                    </S.SubmitButton>

                                    {status === 'success' && (
                                        <S.SuccessMessage>
                                            {t('layout:contact.success')}
                                        </S.SuccessMessage>
                                    )}
                                    {status === 'error' && (
                                        <S.ErrorMessage>
                                            {t('layout:contact.error')}
                                        </S.ErrorMessage>
                                    )}
                                </form>
                            </S.FormCard>
                        </S.Grid>
                    </Fade>
                </StyledContainer>
            </S.MainContainer>
        </>
    );
}

export default Contact;
