import { useTranslation } from 'react-i18next';
import { AboutData } from '@core/types/resume';

/**
 * useAboutData - Dedicated hook for fetching and mapping About feature data.
 * Demonstrates separation of concerns in a Lead-level architecture.
 */
export const useAboutData = () => {
    const { t, i18n } = useTranslation();

    const data: AboutData & { testimonials?: any[] } = {
        about: t('resAbout:about'),
        quote: t('resAbout:quote', { defaultValue: '' }),
        imageSource: t('resAbout:imageSource'),
        stats: t('resAbout:stats', { returnObjects: true }) as any,
        availability: t('resAbout:availability', { returnObjects: true }) as any,
        testimonials: t('resAbout:testimonials', { returnObjects: true }) as any,
    };

    return {
        data,
        t,
        currentLanguage: i18n.language
    };
};
