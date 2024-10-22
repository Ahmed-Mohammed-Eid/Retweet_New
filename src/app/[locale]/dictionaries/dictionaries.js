import "server-only";

const dictionaries = {
    en: () => import("./en.json").then((module) => module.default),
    ar: () => import("./ar.json").then((module) => module.default),
};

export const getDictionary = async (locale) => {
    if(locale in dictionaries) {
        return await dictionaries[locale]();
    }else {
        return await dictionaries["en"]();
    }
}
