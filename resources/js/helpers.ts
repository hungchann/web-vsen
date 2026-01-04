import { usePage } from '@inertiajs/react';

export function useTranslate() {
    const { props } = usePage<any>();
    const translations = props.translations || {};

    const __ = (key: string, replacements: Record<string, string> = {}) => {
        let translation = translations[key] || key;

        Object.keys(replacements).forEach(r => {
            translation = translation.replace(`:${r}`, replacements[r]);
        });

        return translation;
    };

    return { __ };
}
