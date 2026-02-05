"use client";

import { createContext, useContext, useState } from "react";
import { GymContext } from "./GymContext";

export const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
    const { gym } = useContext(GymContext);
    const [lang, setLang] = useState("EN");
    const [translations, setTranslations] = useState({
        EN: {
            general: {
                name: "Griffin Gym",
                slogan: ""
            },
            contact: {
                title: "Get In Touch",
                desc: "Ready to start your transformation? Visit us or get in touch today",
                visitUs: "Visit Us",
                phone: "Phone",
                whatsapp: "WhatsApp",
                facebook: "Facebook",
                sendMsg: "Send Message",
                urLoc: "Your Location Here",
                openMaps: "Open in Maps"
            },
            rules: {
                title: "Gym Rules & Etiquette",
                desc: "Simple guidelines to ensure a respectful and clean environment",
                rules: gym.rules,
            },
            workingHours: {
                title: "Working Hours",
                desc: "Private gym with dedicated hours for men and women",
                women: gym.workingHours[0].type,
                men: gym.workingHours[1].type,
                timeW: gym.workingHours[0].time,
                timeM: gym.workingHours[1].time,
                close: `Closed on ${gym.closingHours}s`
            },
            staff: {
                title: "Meet Our Team",
                desc: "Dedicated professionals committed to making your gym experience exceptional",
                managementTitle: "Management & Support Team",
                managmentTeam: gym.managmentTeam,
                coachesTitle:"Training Team",
                coaches: gym.coaches,
            },
            footer: {
                rights: "© 2026 Griffin Gym",
                developedBy: "Developed by",
            },
        },
        AR: {
            general: {
                name: "Griffin Gym",
                slogan: ""
            },
            contact: {
                getInTouch: "Get In Touch",
                desc: "Ready to start your transformation? Visit us or get in touch today",
                visitUs: "Visit Us",
                phone: "Phone",
                whatsapp: "WhatsApp",
                insta: "Instagram",
                sendMsg: "Send Message",
                urLoc: "Your Location Here",
                openMaps: "Open in Maps"
            },
            footer: {
                rights: "© ٢٠٢٦ جريفين جيم",
                developedBy: "تم التطوير بواسطة",
            },
        },
    });

    return (
        <LanguageContext.Provider value={{ lang, setLang, translations }}>
            {children}
        </LanguageContext.Provider>
    )
}