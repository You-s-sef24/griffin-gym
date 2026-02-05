"use client";

import { createContext, useState } from "react";

export const GymContext = createContext();

export default function GymProvider({ children }) {
    const [gym, setGym] = useState({
        name: "Griffin Gym",
        logo: '/griffin-gym-logo-sm.png',
        slogan: "Transform Your Body, Elevate Your Life",
        owner: "Mahmoud Abo Amira",
        heroImage: '/griffin-gym-4.jpg',
        membershipPlans: [
            {
                id: 1,
                title: "1 Month Membership",
                discount: "",
                image: "/griffin-gym-2.jpg",
                services: []
            },
            {
                id: 2,
                title: "3 Months Membership",
                discount: "~13% OFF",
                image: "/griffin-gym-3.jpg",
                services: ["2 weeks freeze period", "3 guest invitations", "1 free physical therapy session"]
            },
            {
                id: 3,
                title: "6 Months Membership",
                discount: "~33% OFF",
                image: "/griffin-gym-5.jpg",
                services: ["1 month freeze period", "6 guest invitations", "2 free private sessions", "1 free physical therapy session"]
            },
            {
                id: 4,
                title: "1 Year Membership",
                discount: "~45% OFF",
                image: "/griffin-gym-4.jpg",
                services: ["2 months freeze period", "12 guest invitations", "4 free private sessions", "1 free physical therapy session"]
            }
        ],
        membershipPlansAR: [
            {
                id: 1,
                title: "اشتراك لمدة شهر",
                discount: "",
                image: "/griffin-gym-2.jpg",
                services: []
            },
            {
                id: 2,
                title: "اشتراك لمدة 3 أشهر",
                discount: "خصم ~13%",
                image: "/griffin-gym-3.jpg",
                services: ["فترة تجميد لمدة أسبوعين", "3 دعوات مرافق", "جلسة علاج طبيعي مجانية واحدة"]
            },
            {
                id: 3,
                title: "اشتراك لمدة 6 أشهر",
                discount: "خصم ~33%",
                image: "/griffin-gym-5.jpg",
                services: ["فترة تجميد لمدة شهر", "6 دعوات مرافق", "جلستان تدريب خاص مجانية", "جلسة علاج طبيعي مجانية واحدة"]
            },
            {
                id: 4,
                title: "اشتراك لمدة سنة",
                discount: "خصم ~45%",
                image: "/griffin-gym-4.jpg",
                services: ["فترة تجميد لمدة شهرين", "12 دعوة مرافق", "4 جلسات تدريب خاص مجانية", "جلسة علاج طبيعي مجانية واحدة"]
            }
        ],
        privatePrograms: [
            {
                id: 1,
                title: "Guide Program",
                image: "/nabil-2.jpg",
                desc: ""
            },
            {
                id: 2,
                title: "1 Month Private Program",
                image: "/karim.jpg",
                desc: ""
            },
            {
                id: 3,
                title: "2 Months Private Program",
                desc: "",
                image: "/sobhi.jpg",
                discount: "~20% OFF"
            },
            {
                id: 4,
                title: "3 Months Private Program",
                desc: "",
                image: "/nabil.jpg",
                discount: "~30% OFF"
            }
        ],
        privateProgramsAR: [
            {
                id: 1,
                title: "برنامج الإرشاد",
                image: "/nabil-2.jpg",
                desc: ""
            },
            {
                id: 2,
                title: "برنامج تدريب خاص لمدة شهر",
                image: "/karim.jpg",
                desc: ""
            },
            {
                id: 3,
                title: "برنامج تدريب خاص لمدة شهرين",
                desc: "",
                image: "/sobhi.jpg",
                discount: "خصم ~20%"
            },
            {
                id: 4,
                title: "برنامج تدريب خاص لمدة 3 أشهر",
                desc: "",
                image: "/nabil.jpg",
                discount: "خصم ~30%"
            }
        ],
        therapies: [
            {
                id: 2,
                title: "6 Physical Therapy Sessions",
                image: '/pt3.jpg',
                discount: "~16% OFF"
            },
            {
                id: 3,
                title: "12 Physical Therapy Sessions",
                image: '/pt2.jpg',
                discount: "~25% OFF"
            },
            {
                id: 5,
                title: "6 Cupping Session",
                image: "/cupping.jpg",
                discount: "~16 OFF"
            },
            {
                id: 6,
                title: "12 Cupping Session",
                image: "/cupping2.jpg",
                discount: "~25 OFF"
            },
            {
                id: 7,
                title: "Recovery Sessions",
                image: "/recovery.jpg",
                discount: ""
            },

        ],
        therapiesAR: [
            {
                id: 2,
                title: "6 جلسات علاج طبيعي",
                image: '/pt3.jpg',
                discount: "خصم ~16%"
            },
            {
                id: 3,
                title: "12 جلسة علاج طبيعي",
                image: '/pt2.jpg',
                discount: "خصم ~25%"
            },
            {
                id: 5,
                title: "6 جلسات حجامة",
                image: "/cupping.jpg",
                discount: "خصم ~16%"
            },
            {
                id: 6,
                title: "12 جلسة حجامة",
                image: "/cupping2.jpg",
                discount: "خصم ~25%"
            },
            {
                id: 7,
                title: "جلسات استشفاء",
                image: "/recovery.jpg",
                discount: ""
            },
        ],
        facilities: [
            {
                id: 1,
                title: "Sauna",
                icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-waves w-6 h-6 text-white" data-fg-cxjr15="1.37:2.147:/src/app/components/FacilitiesSection.tsx:50:13:1622:40:e:Waves::::::CfAn"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>),
                desc: "Available Tuesday & Thursday",
                image: '/sauna.jpg'
            },
            {
                id: 2,
                title: "Steam Bath",
                icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wind w-6 h-6 text-white" data-fg-cxjr16="1.37:2.147:/src/app/components/FacilitiesSection.tsx:56:13:2002:39:e:Wind::::::BDp9"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>),
                desc: "Coming Soon",
                badge: "Coming Soon",
                image: '/steam.jpg'
            },
            {
                id: 3,
                title: "Lockers & Showers",
                icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock w-6 h-6 text-white" data-fg-cxjr17="1.37:2.147:/src/app/components/FacilitiesSection.tsx:63:13:2393:39:e:Lock::::::D39I"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>),
                desc: "Clean, secure facilities",
                image: '/griffin-gym-6.jpg'
            },
        ],
        facilitiesAR: [
            {
                id: 1,
                title: "ساونا",
                icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-waves w-6 h-6 text-white"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>),
                desc: "متاحة يومي الثلاثاء والخميس",
                image: '/sauna.jpg'
            },
            {
                id: 2,
                title: "حمام بخار",
                icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wind w-6 h-6 text-white"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>),
                desc: "قريباً",
                badge: "قريباً",
                image: '/steam.jpg'
            },
            {
                id: 3,
                title: "خزائن وغرف استحمام",
                icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock w-6 h-6 text-white"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>),
                desc: "مرافق نظيفة وآمنة",
                image: '/griffin-gym-6.jpg'
            },
        ],
        managmentTeam: [
            {
                id: 1,
                name: "Mahmoud Abo Amira",
                role: "Owner & Founder",
                image: '',
                badge: "Founder"
            },
            {
                id: 2,
                name: "Omar Abdelnaby",
                role: "Receptionist",
                image: '',
                badge: ""
            },
            {
                id: 3,
                name: "Youssef Mahmoud",
                role: "Receptionist",
                image: '/me.jpeg',
                badge: ""
            },
            {
                id: 4,
                name: "Eman Reda",
                role: "Receptionist",
                image: '',
                badge: ""
            },
            {
                id: 6,
                name: "Yasser Ramadan",
                role: "House Keeper",
                image: '/yasser.jpeg',
                exp: "",
                badge: ""
            },
            {
                id: 7,
                name: "Nora",
                role: "House Keeper",
                image: '',
                exp: "",
                badge: ""
            },
            {
                id: 5,
                name: "Dr. Taha Gamal",
                role: "Doctor of Physical Therapy",
                image: '/taha.jpeg',
                exp: "4",
                badge: "",
                schedule: true
            },
        ],
        managmentTeamAR: [
            {
                id: 1,
                name: "محمود أبو أميرة",
                role: "المالك والمؤسس",
                image: '',
                badge: "مؤسس"
            },
            {
                id: 2,
                name: "عمر عبدالنبي",
                role: "موظف استقبال",
                image: '',
                badge: ""
            },
            {
                id: 3,
                name: "يوسف محمود",
                role: "موظف استقبال",
                image: '/me.jpeg',
                badge: ""
            },
            {
                id: 4,
                name: "إيمان رضا",
                role: "موظفة استقبال",
                image: '',
                badge: ""
            },
            {
                id: 6,
                name: "ياسر رمضان",
                role: "مسؤول نظافة",
                image: '/yasser.jpeg',
                exp: "",
                badge: ""
            },
            {
                id: 7,
                name: "نورا",
                role: "مسؤولة نظافة",
                image: '',
                exp: "",
                badge: ""
            },
            {
                id: 5,
                name: "د. طه جمال",
                role: "دكتور علاج طبيعي",
                image: '/taha.jpeg',
                exp: "4",
                badge: "",
                schedule: true
            },
        ],
        coaches: [
            {
                id: 7,
                name: "Karim Mohamed",
                role: "Head Coach",
                image: '/karim-profile.jpg',
                exp: 6,
                badge: "",
                schedule: true
            },
            {
                id: 8,
                name: "Osama Yahia",
                role: "Coach",
                image: '/osama.jpeg',
                exp: 2,
                badge: "",
                schedule: true
            },
            {
                id: 9,
                name: "Donia",
                role: "Head Coach",
                image: '',
                exp: 3,
                badge: "For Women",
                schedule: true
            },
            {
                id: 10,
                name: "Marwa",
                role: "Zumba Instructor",
                image: '',
                exp: 2,
                badge: "For Women",
                schedule: true
            },
            {
                id: 11,
                name: "Roaa",
                role: "Western Dance Instructor",
                image: '',
                exp: 2,
                badge: "For Women",
                schedule: true
            },
        ],
        coachesAR: [
            {
                id: 7,
                name: "كريم محمد",
                role: "مدرب رئيسي",
                image: '/karim-profile.jpg',
                exp: 6,
                badge: "",
                schedule: true
            },
            {
                id: 8,
                name: "أسامة يحيى",
                role: "مدرب",
                image: '/osama.jpeg',
                exp: 2,
                badge: "",
                schedule: true
            },
            {
                id: 9,
                name: "دنيا",
                role: "مدربة رئيسي",
                image: '',
                exp: 3,
                badge: "للسيدات",
                schedule: true
            },
            {
                id: 10,
                name: "مروة",
                role: "مدربة زومبا",
                image: '',
                exp: 2,
                badge: "للسيدات",
                schedule: true
            },
            {
                id: 11,
                name: "رؤى",
                role: "مدربة رقص غربي",
                image: '',
                exp: 2,
                badge: "للسيدات",
                schedule: true
            },
        ],
        workingHours: [
            {
                type: "Women",
                time: "8:00 AM - 1:00 PM"
            },
            {
                type: "Men",
                time: "1:00 PM - 2:00 AM"
            }
        ],
        workingHoursAR: [
            {
                type: "سيدات",
                time: "٨:٠٠ صباحاً - ١:٠٠ ظهراً"
            },
            {
                type: "رجال",
                time: "١:٠٠ ظهراً - ٢:٠٠ صباحاً"
            }
        ],
        closingHours: "Friday",
        closingHoursAR: "الجمعة",
        rules: [
            "Jeans are not allowed - wear proper workout attire",
            "Training shoes are mandatory",
            "Each member must bring a towel and deodorant",
            "Lockers available during training only - must be unlocked afterward",
            "Members must preserve cleanliness of showers and bathrooms",
            "Membership upgrades allowed within 1 week of purchase"
        ],
        rulesAR: [
            "ممنوع ارتداء الجينز - يرجى ارتداء ملابس رياضية مناسبة",
            "ارتداء الحذاء الرياضي إلزامي داخل الصالة",
            "يجب على كل عضو إحضار منشفة (فوطة) ومزيل عرق",
            "الخزائن متاحة أثناء التمرين فقط - ويجب إخلاؤها بعد الانتهاء",
            "يجب على الأعضاء الحفاظ على نظافة غرف الاستحمام والحمامات",
            "يُسمح بترقية الاشتراك خلال أسبوع ١ من تاريخ الشراء"
        ],
        phone: "+201102062109",
    });

    return (
        <GymContext.Provider value={{ gym, setGym }}>
            {children}
        </GymContext.Provider>
    );
}