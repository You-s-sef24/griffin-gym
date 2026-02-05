import { useContext } from "react";
import { LanguageContext } from "../Contexts/LanguageContext";

export default function useTranslate() {
    const { lang, translations } = useContext(LanguageContext);

    return (key) => {
        return key
            .split(".")
            .reduce((obj, i) => obj?.[i], translations[lang]);
    };
}
