export default function isFirstWordEnglish(text) {
    const firstWord = text.match(/^\s*\w+/);
    if (!firstWord) return null; // No word found, returning null for undefined localeuage

    const arabicPattern = /[\u0600-\u06FF]/;
    const englishPattern = /[a-zA-Z]/;

    if (englishPattern.test(firstWord[0])) {
        return true; // The first word is in English
    } else if (arabicPattern.test(firstWord[0])) {
        return false; // The first word is in Arabic
    } else {
        return null; // The first word might not be in Arabic or English, or is mixed/undefined
    }
}