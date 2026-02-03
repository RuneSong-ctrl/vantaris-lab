import { Link } from "@inertiajs/react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const links = {
        main: [
            { name: "Home", href: "/" },
            { name: "Services", href: "#services" },
            { name: "Portfolio", href: "#projects" },
            { name: "Contact", href: "#contact" },
        ],
        social: [
            { name: "Instagram", href: "#" },
            { name: "LinkedIn", href: "#" },
            { name: "GitHub", href: "#" },
            { name: "WhatsApp", href: "https://wa.me/6281339619293" },
        ],
        legal: [
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
        ],
    };

    return (
        <footer className="relative bg-yale-blue-950 pt-20 overflow-hidden border-t border-yale-blue-900">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
                    {/* COL 1: BRAND IDENTITY (Span 4) */}
                    <div className="md:col-span-5 space-y-6">
                        <Link
                            href="/"
                            className="text-3xl font-bold text-cream-50 tracking-wide flex items-center gap-2"
                        >
                            <div className="w-8 h-8 bg-amber-honey-500 rounded-lg flex items-center justify-center text-yale-blue-950 text-xs font-black">
                                VL
                            </div>
                            <span>
                                Vantaris
                                <span className="text-amber-honey-500">
                                    .Lab
                                </span>
                            </span>
                        </Link>
                        <p className="text-yale-blue-200 leading-relaxed max-w-sm">
                            Mitra teknologi strategis untuk bisnis yang ingin
                            berkembang. Kami menerjemahkan ide kompleks menjadi
                            solusi digital yang sederhana dan efisien.
                        </p>
                        <div className="flex items-center gap-2 text-cerulean-400 text-sm font-medium pt-4">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cerulean-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-cerulean-500"></span>
                            </span>
                            Based in Bali, Indonesia
                        </div>
                    </div>

                    {/* COL 2: SITEMAP (Span 3) */}
                    <div className="md:col-span-3">
                        <h4 className="text-cream-50 font-bold mb-6 text-lg">
                            Menu
                        </h4>
                        <ul className="space-y-4">
                            {links.main.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-yale-blue-300 hover:text-amber-honey-400 transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-[1px] bg-amber-honey-400 transition-all duration-300"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COL 3: CONNECT (Span 4) */}
                    <div className="md:col-span-4">
                        <h4 className="text-cream-50 font-bold mb-6 text-lg">
                            Connect
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                            {links.social.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-4 py-3 rounded-xl bg-yale-blue-900/50 border border-yale-blue-800 text-yale-blue-200 hover:text-cream-50 hover:bg-yale-blue-800 hover:border-amber-honey-500/30 transition-all text-sm font-medium text-center"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <div className="mt-8">
                            <p className="text-yale-blue-400 text-sm mb-2">
                                Punya pertanyaan?
                            </p>
                            <a
                                href="mailto:hello@vantaris.lab"
                                className="text-xl font-bold text-cream-50 hover:text-cerulean-400 transition-colors"
                            >
                                hello@vantaris.lab
                            </a>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-yale-blue-900/50 text-sm text-yale-blue-400">
                    <p>
                        &copy; {currentYear} Vantaris Lab. All rights reserved.
                    </p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        {links.legal.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="hover:text-cream-50 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* BIG WATERMARK TEXT (Background Art) */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center overflow-hidden pointer-events-none select-none">
                <h1 className="text-[18vw] font-black text-yale-blue-900/20 leading-[0.75] tracking-tighter translate-y-[10%]">
                    VANTARIS
                </h1>
            </div>
        </footer>
    );
}
