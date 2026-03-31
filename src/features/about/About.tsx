import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Fade } from 'react-awesome-reveal';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import FallbackSpinner from '../../components/FallbackSpinner';
import StatsBar from '../../components/about/StatsBar';
import AvailabilityCard from '../../components/about/AvailabilityCard';
import { StyledContainer, Grid, Column } from '@shared/components/layout';
import { TestimonialCard } from '@shared/components/TestimonialCard';
import { useAboutData } from './hooks/useAboutData';
import * as S from './About.styles';

interface AboutProps {
    header?: string;
}

const About = ({ header }: AboutProps) => {
    const { data, t } = useAboutData();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const expandName = params.get('expand');
    const [scrolledToTestimonials, setScrolledToTestimonials] = useState(false);

    useEffect(() => {
        if (expandName && !scrolledToTestimonials) {
            setTimeout(() => {
                const element = document.getElementById(`testimonial-${expandName}`);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    setScrolledToTestimonials(true);
                } else {
                    // Fallback to section if card not found
                    const section = document.getElementById('testimonials');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500);
        }
    }, [location, scrolledToTestimonials, expandName]);

    if (!data.about) return <FallbackSpinner />;

    return (
        <>
            <Header title={header || t('layout:sections.about')} />
            <S.AboutSection>
                <StyledContainer>
                    <Fade triggerOnce duration={1000}>
                        <Grid className="align-items-start">
                            <Column lg={7} md={12} className="order-2 order-lg-1">
                                <S.TextColumnContent>
                                    <ReactMarkdown>{data.about}</ReactMarkdown>
                                    <StatsBar stats={data.stats || []} />
                                </S.TextColumnContent>
                            </Column>

                            <Column lg={5} md={12} className="order-1 order-lg-2 mb-5 mb-lg-0 mt-lg-4">
                                <Fade direction="right" triggerOnce delay={200}>
                                    <S.ProfileWrapper>
                                        <S.ImageContainer>
                                            <S.ProfileImage 
                                                src={data.imageSource} 
                                                alt="Amin Abbasi — Lead Software Engineer" 
                                                loading="lazy" 
                                            />
                                        </S.ImageContainer>

                                        {data.quote && <S.QuoteText>{data.quote}</S.QuoteText>}

                                        {data.availability && (
                                            <AvailabilityCard availability={data.availability} />
                                        )}
                                    </S.ProfileWrapper>
                                </Fade>
                            </Column>
                        </Grid>

                        {/* Testimonials Section */}
                        {Array.isArray(data.testimonials) && data.testimonials.length > 0 && (
                            <div className="mt-5 pt-lg-5" id="testimonials">
                                <S.TestimonialsLabel>
                                    {t('layout:about.testimonials', { defaultValue: 'Testimonials' })}
                                </S.TestimonialsLabel>
                                <S.TestimonialsGrid>
                                    {data.testimonials.map((testimonial) => (
                                        <TestimonialCard 
                                            key={testimonial.name} 
                                            testimonial={testimonial} 
                                            showLinkedIn={true}
                                            initiallyExpanded={testimonial.name === expandName}
                                        />
                                    ))}
                                </S.TestimonialsGrid>
                            </div>
                        )}
                    </Fade>
                </StyledContainer>
            </S.AboutSection>
        </>
    );
};

export default About;
