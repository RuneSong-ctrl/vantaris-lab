import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [lang, setLang] = useState("ID");

    // Deteksi scroll untuk mengecilkan ukuran navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#projects" },
    ];

    return (
        <>
            {/* CONTAINER UTAMA (Floating Center) */}
            <div
                className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ${scrolled ? "top-4" : "top-6 md:top-8"}`}
            >
                {/* CAPSULE NAVBAR */}
                <nav
                    className={`
                    relative flex items-center justify-between 
                    bg-yale-blue-950/80 backdrop-blur-xl border border-yale-blue-800/50 
                    shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                    transition-all duration-500 ease-out
                    ${scrolled ? "w-[90%] md:w-[60%] py-3 px-6 rounded-full" : "w-[95%] md:w-[85%] py-4 px-8 rounded-2xl"}
                `}
                >
                    {/* 1. LOGO */}
                    <div className="flex items-center gap-2">
                        {/* Ikon Abstrak Sederhana (Opsional) */}
                        <div className="w-8 h-8 bg-gradient-to-tr from-amber-honey-500 to-cerulean-500 rounded-lg flex items-center justify-center text-yale-blue-950 font-bold text-xs shadow-lg shadow-amber-honey-500/20">
                            VL
                        </div>
                        <Link
                            href="/"
                            className="text-xl md:text-2xl font-bold text-cream-50 tracking-tight"
                        >
                            Vantaris
                        </Link>
                    </div>

                    {/* 2. DESKTOP MENU (Hidden on Mobile) */}
                    <div className="hidden md:flex items-center gap-1 bg-yale-blue-900/50 p-1.5 rounded-full border border-yale-blue-800/30">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-5 py-2 text-sm font-medium text-cerulean-100 rounded-full hover:bg-yale-blue-800 hover:text-amber-honey-400 transition-all duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* 3. RIGHT ACTIONS */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Language Switcher (Minimalist Text) */}
                        <button
                            onClick={() => setLang(lang === "ID" ? "EN" : "ID")}
                            className="text-xs font-bold text-cerulean-300 hover:text-amber-honey-400 transition-colors flex items-center gap-1"
                        >
                            <span>{lang}</span>
                            <span className="w-1 h-1 bg-amber-honey-500 rounded-full animate-pulse"></span>
                        </button>

                        {/* CTA Button */}
                        <Link
                            href="#contact"
                            className="bg-cream-50 text-yale-blue-950 hover:bg-amber-honey-400 px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-lg shadow-cream-50/10"
                        >
                            Let's Talk
                        </Link>
                    </div>

                    {/* 4. MOBILE HAMBURGER (Animated) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-yale-blue-800 text-cream-50 hover:bg-yale-blue-700 transition-colors"
                    >
                        <div className="flex flex-col gap-1.5">
                            <span
                                className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
                            />
                            <span
                                className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
                            />
                            <span
                                className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
                            />
                        </div>
                    </button>
                </nav>

                {/* 5. MOBILE DROPDOWN CARD (Floating below navbar) */}
                <div
                    className={`
                    absolute top-full mt-4 w-[90%] 
                    bg-yale-blue-900/95 backdrop-blur-xl border border-yale-blue-700 
                    rounded-2xl shadow-2xl overflow-hidden
                    transition-all duration-300 origin-top
                    ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"}
                `}
                >
                    <div className="p-2 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 text-center text-cream-100 hover:bg-yale-blue-800 hover:text-amber-honey-400 rounded-xl transition-colors font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="h-px bg-yale-blue-800 my-2 mx-4"></div>

                        <div className="flex items-center justify-between px-4 py-2">
                            <button
                                onClick={() =>
                                    setLang(lang === "ID" ? "EN" : "ID")
                                }
                                className="text-sm font-bold text-cerulean-300 border border-yale-blue-700 px-3 py-1 rounded-lg"
                            >
                                Switch to{" "}
                                {lang === "ID" ? "English" : "Indonesia"}
                            </button>
                            <Link
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="text-amber-honey-500 font-bold text-sm"
                            >
                                Contact Us &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
