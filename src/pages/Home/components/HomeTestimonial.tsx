import { useTranslation } from 'react-i18next';
import { Fade } from 'react-awesome-reveal';
import { TestimonialCard } from '@shared/components/TestimonialCard';
import { Testimonial } from '@core/types/resume';

function HomeTestimonial() {
    const { t } = useTranslation();
    const testimonials = t('resAbout:testimonials', { returnObjects: true }) as Testimonial[];
    
    // Pick the first one as the featured one for the Home page
    const featured = testimonials && testimonials.length > 0 ? testimonials[0] : null;

    if (!featured) return null;

    return (
        <Fade direction="up" triggerOnce delay={400} style={{ width: '100%', maxWidth: '600px' }}>
            <TestimonialCard 
                testimonial={featured} 
                isFeatured={true} 
            />
        </Fade>
    );
}

export default HomeTestimonial;
