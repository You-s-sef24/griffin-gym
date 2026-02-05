'use client';
import { useContext, useState } from 'react';
import { LanguageContext } from '../Contexts/LanguageContext';
import { GymContext } from '../Contexts/GymContext';
import useTranslate from '../hooks/useTranslate';
import Image from 'next/image';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { lang, setLang } = useContext(LanguageContext);
    const { gym } = useContext(GymContext);
    const t = useTranslate();

    return (
        <nav className="sticky top-0 flex lg:justify-around justify-between items-center bg-black font-bold text-white p-3 z-50" dir={lang === "EN" ? "ltr" : "rtl"}>
            <Image
                src={gym.logo}
                width={96}
                height={96}
                className="w-24 h-auto"
                alt="Griffin Gym"
            />

            {/* Desktop Links */}
            <div className="hidden md:flex gap-4">
                <a href="#home" className='hover:text-red-600 transition-all'>{t("navbar.home")}</a>
                <a href="#memberships" className='hover:text-red-600 transition-all'>{t("navbar.memberships")}</a>
                <a href="#facilities" className='hover:text-red-600 transition-all'>{t("navbar.facilities")}</a>
                <a href="#staff" className='hover:text-red-600 transition-all'>{t("navbar.staff")}</a>
                <a href="#hours" className='hover:text-red-600 transition-all'>{t("navbar.hours")}</a>
                <a href="#rules" className='hover:text-red-600 transition-all'>{t("navbar.rules")}</a>
                <a href="#contact" className='hover:text-red-600 transition-all'>{t("navbar.contact")}</a>
            </div>

            {/* Mobile Hamburger & Language */}
            <div className="flex items-center gap-2">
                {/* Language Toggle */}
                <button className="flex items-center gap-1 rounded border border-white cursor-pointer py-1 px-2 hover:text-red-600 hover:border-red-600 transition-all" onClick={() => {
                    lang === "EN" ? setLang("AR") : setLang("EN")
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe w-4 h-4" data-fg-h9b30="1.20:1.6312:/src/app/components/Navigation.tsx:101:15:3710:29:e:Globe::::::kgW"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                    {lang === "EN" ? "AR" : "EN"}
                </button>

                {/* Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden px-4 py-2 text-white rounded focus:outline-none hover:text-red-600 transition-all"
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            fill="currentColor" viewBox="0 0 24 24" >
                            <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 5h18v2H3zm0 6h18v2H3zm0 6h18v2H3z"></path>
                        </svg>
                    )}
                </button>
            </div>

            {/* Full-width Mobile Menu */}
            {isOpen && (
                <div className="md:hidden fixed top-[64px] left-0 w-screen bg-black/50  border-t border-gray-200 dark:border-neutral-700 shadow-lg z-50">
                    <a
                        href="#home"
                        className="block px-6 py-4 text-white dark:text-white hover:bg-red-950 hover:text-red-600"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        {t("navbar.home")}
                    </a>
                    <a
                        href="#memberships"
                        className="block px-6 py-4 text-white dark:text-white hover:bg-red-950 hover:text-red-600"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        {t("navbar.memberships")}
                    </a>
                    <a
                        href="#facilities"
                        className="block px-6 py-4 text-white dark:text-white hover:bg-red-950 hover:text-red-600"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        {t("navbar.facilities")}
                    </a>
                    <a
                        href="#staff"
                        className="block px-6 py-4 text-white dark:text-white hover:bg-red-950 hover:text-red-600"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        {t("navbar.staff")}
                    </a>
                    <a
                        href="#hours"
                        className="block px-6 py-4 text-white dark:text-white hover:bg-red-950 hover:text-red-600"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        {t("navbar.hours")}
                    </a>
                    <a
                        href="#rules"
                        className="block px-6 py-4 text-white dark:text-white hover:bg-red-950 hover:text-red-600"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        {t("navbar.rules")}
                    </a>
                    <a
                        href="#contact"
                        className="block px-6 py-4 text-white dark:text-white hover:bg-red-950 hover:text-red-600"
                        onClick={() => {
                            setIsOpen(false);
                        }}
                    >
                        {t("navbar.contact")}
                    </a>
                </div>
            )}
        </nav>
    );
}
