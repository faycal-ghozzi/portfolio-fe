import { useLocale } from 'next/navigation';
import en from '../../public/locales/en.json'
import fr from '../../public/locales/fr.json';

export default function useTranslations() {
  const locale = useLocale();
  return locale === 'fr' ? fr : en;
}
