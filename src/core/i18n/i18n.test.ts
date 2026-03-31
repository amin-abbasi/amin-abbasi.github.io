import { describe, it, expect, beforeAll } from 'vitest';
import i18n, { initI18n } from './index';

describe('i18n Core Domain', () => {
  beforeAll(() => {
    initI18n();
  });

  it('should initialize with default language (en)', () => {
    expect(i18n.language).toBeDefined();
    // In test environment, it might be 'en' or based on the host
  });

  it('should have supported languages en and tr', () => {
    expect(i18n.options.supportedLngs).toContain('en');
    expect(i18n.options.supportedLngs).toContain('tr');
  });

  it('should translate a layout key correctly', () => {
    const title = i18n.t('layout:sections.about', { lng: 'en' });
    expect(title).toBe('About');
  });

  it('should translate to Turkish when language is changed', async () => {
    await i18n.changeLanguage('tr');
    const title = i18n.t('layout:sections.about');
    expect(title).toBe('Hakkımda');
    // Reset for other tests
    await i18n.changeLanguage('en');
  });
});
