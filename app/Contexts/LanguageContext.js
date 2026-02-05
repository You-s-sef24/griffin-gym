"use client";

import { createContext, useContext, useState } from "react";
import { GymContext } from "./GymContext";

export const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
    const { gym } = useContext(GymContext);
    const [lang, setLang] = useState("EN");
    const [translations, setTranslations] = useState({
        EN: {
            navbar: {
                home: "Home",
                memberships: "Memberships",
                facilities: "Facilities",
                staff: "Staff",
                hours: "Hours",
                rules: "Rules",
                contact: "Contact"
            },
            general: {
                name: "Griffin Gym",
                slogan: "Transform Your Body, Elevate Your Life",
                visitUs: "Visit Us",
                contact: "Contact Us"
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
                coachesTitle: "Training Team",
                coaches: gym.coaches,
                exp: "years experience",
                schedule: "Schedules vary – Contact for details"
            },
            facilities: {
                title: "Our Facilities",
                desc: "Premium amenities for your comfort and recovery",
                services: gym.facilities,
            },
            therapy: {
                title: "Recovery & Physical Therapy",
                desc: "Dedicated professionals committed to making your gym experience exceptional",
                therapies: gym.therapies,
                notesTitle: "Dedicated professionals committed to making your gym experience exceptional",
                notesDesc: "All our recovery services are provided by certified professionals with years of experience. Book your session today and experience the difference professional care can make in your recovery journey."
            },
            memberships: {
                title: "Membership Offers",
                desc: "Choose the plan that fits your fitness journey",
                memberships: gym.membershipPlans,
                notesTitle: "Important Notes",
                notesDesc: (<>
                    <li>• Guest invitations must be different people each time</li>
                    <li>• Freeze periods can be activated when needed</li>
                    <li>• Private sessions subject to coach availability</li>
                    <li>• Membership upgrades allowed within 1 week of purchase</li>
                </>)
            },
            private: {
                title: "Private Training Programs",
                desc: "Get personalized guidance with our expert trainers",
                programs: gym.privatePrograms,
            },
            footer: {
                rights: "© 2026 Griffin Gym",
                developedBy: "Developed by",
            },
        },
        AR: {
            navbar: {
                home: "الرئيسية",
                memberships: "الاشتراكات",
                facilities: "المرافق",
                staff: "فريق العمل",
                hours: "مواعيد العمل",
                rules: "القواعد",
                contact: "تواصل معنا",
            },

            general: {
                name: "Griffin Gym",
                slogan: "حوّل جسمك وارتقِ بحياتك",
                visitUs: "زورنا",
                contact: "تواصل معنا",
            },

            contact: {
                title: "تواصل معنا",
                desc: "جاهز تبدأ رحلتك؟ زورنا أو تواصل معنا الآن",
                visitUs: "زورنا",
                phone: "الهاتف",
                whatsapp: "واتساب",
                facebook: "فيسبوك",
                sendMsg: "إرسال رسالة",
                urLoc: "موقعنا",
                openMaps: "فتح الخريطة",
            },

            rules: {
                title: "قواعد الجيم",
                desc: "إرشادات بسيطة للحفاظ على بيئة نظيفة ومحترمة",
                rules: gym.rulesAR
            },

            workingHours: {
                title: "مواعيد العمل",
                desc: "جيم خاص بمواعيد مخصصة للرجال والسيدات",
                women: gym.workingHoursAR[0].type,
                men: gym.workingHoursAR[1].type,
                timeW: gym.workingHoursAR[0].time,
                timeM: gym.workingHoursAR[1].time,
                close: `مغلق يوم ${gym.closingHoursAR}`,
            },

            staff: {
                title: "فريق العمل",
                desc: "فريق محترف ملتزم بتقديم أفضل تجربة تدريب",
                managementTitle: "الإدارة والدعم",
                managmentTeam: gym.managmentTeamAR,
                coachesTitle: "المدربين",
                coaches: gym.coachesAR,
                exp: "سنين خبرة",
                schedule: "تختلف المواعيد - اتصل بنا للحصول على التفاصيل"
            },

            facilities: {
                title: "مرافق الجيم",
                desc: "مرافق متميزة لراحتك وتعافيك",
                services: gym.facilitiesAR,
            },

            therapy: {
                title: "الاستشفاء والعلاج الطبيعي",
                desc: "رعاية متخصصة لتحسين أدائك وتسريع التعافي",
                therapies: gym.therapiesAR,
                notesTitle: "ملاحظات هامة",
                notesDesc:
                    "جميع خدمات الاستشفاء مقدمة بواسطة مختصين معتمدين بخبرة سنوات. احجز جلستك اليوم واستمتع بتجربة احترافية.",
            },

            memberships: {
                title: "أنظمة الاشتراك",
                desc: "اختر الخطة المناسبة لرحلتك الرياضية",
                memberships: gym.membershipPlansAR,
                notesTitle: "ملاحظات هامة",
                notesDesc: (
                    <>
                        <li>• يجب أن يكون كل ضيف شخصًا مختلفًا</li>
                        <li>• يمكن تفعيل فترات التجميد عند الحاجة</li>
                        <li>• الجلسات الخاصة حسب توفر المدرب</li>
                        <li>• يسمح بترقية الاشتراك خلال أسبوع من الشراء</li>
                    </>
                ),
            },

            private: {
                title: "برامج التدريب الخاص",
                desc: "إرشاد شخصي مع أفضل المدربين",
                programs: gym.privateProgramsAR,
            },

            footer: {
                rights: "© ٢٠٢٦ جريفين جيم",
                developedBy: "تم التطوير بواسطة",
            },
        }
        ,
    });

    return (
        <LanguageContext.Provider value={{ lang, setLang, translations }}>
            {children}
        </LanguageContext.Provider>
    )
}