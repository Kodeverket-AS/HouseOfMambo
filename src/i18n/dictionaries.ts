import type { Locale } from "./config";
import type en from "./dictionaries/en.json";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
    en: () => import("./dictionaries/en.json").then((module) => module.default),
    no: () => import("./dictionaries/no.json").then((module) => module.default),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();

export function format(template: string, values: Record<string, string>) {
    return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}
