import { useTranslation } from 'react-i18next';
import { AboutData, Testimonial, StatEntry, Availability } from '@core/types/resume';

/**
 * useAboutData - Dedicated hook for fetching and mapping About feature data.
 * Demonstrates separation of concerns in a Lead-level architecture.
 */
export const useAboutData = () => {
    const { t, i18n } = useTranslation();

    const data: AboutData = {
        about: t('resAbout:about'),
        quote: t('resAbout:quote', { defaultValue: '' }),
        imageSource: t('resAbout:imageSource'),
        stats: t('resAbout:stats', { returnObjects: true }) as StatEntry[],
        availability: t('resAbout:availability', { returnObjects: true }) as Availability,
        testimonials: t('resAbout:testimonials', { returnObjects: true }) as Testimonial[],
    };

    return {
        data,
        t,
        currentLanguage: i18n.language
    };
};
