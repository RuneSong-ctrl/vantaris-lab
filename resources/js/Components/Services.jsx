import { Link } from "@inertiajs/react";

export default function Services() {
    return (
        <section
            id="services"
            className="relative w-full bg-yale-blue-950 py-24 px-4 overflow-hidden"
        >
            {/* Background Glow tipis di tengah biar tidak mati */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yale-blue-800/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto relative z-10 max-w-6xl">
                {/* SECTION HEADER */}
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-cream-50 mb-4 tracking-tight">
                        Our Expertise
                    </h2>
                    <p className="text-yale-blue-200 text-lg max-w-xl leading-relaxed">
                        Kami menggabungkan{" "}
                        <span className="text-cerulean-400">
                            Teknologi Modern
                        </span>{" "}
                        dan{" "}
                        <span className="text-amber-honey-400">
                            Logika Data
                        </span>{" "}
                        untuk menciptakan ekosistem digital yang utuh.
                    </p>
                </div>

                {/* BENTO GRID LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
                    {/* CARD 1: WEB DEVELOPMENT (Tall - Span 1 col, 2 rows) */}
                    <div className="group relative md:col-span-1 md:row-span-2 overflow-hidden rounded-3xl bg-yale-blue-900/30 border border-yale-blue-800/50 hover:border-cerulean-500/50 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(0,183,255,0.3)]">
                        <div className="absolute inset-0 bg-gradient-to-b from-cerulean-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="p-8 h-full flex flex-col justify-between relative z-10">
                            <div>
                                {/* Icon Container */}
                                <div className="w-12 h-12 rounded-2xl bg-cerulean-900/50 border border-cerulean-500/30 flex items-center justify-center text-cerulean-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-cream-50 mb-3 group-hover:text-cerulean-300 transition-colors">
                                    Web Development
                                </h3>
                                <p className="text-yale-blue-200 text-sm leading-relaxed">
                                    Membangun website berkinerja tinggi dengan
                                    teknologi terbaru (React & Laravel). Fokus
                                    pada kecepatan, keamanan, dan skalabilitas.
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-8">
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-yale-blue-800/50 text-cerulean-200 border border-cerulean-500/10">
                                    SaaS
                                </span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-yale-blue-800/50 text-cerulean-200 border border-cerulean-500/10">
                                    Landing Page
                                </span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-yale-blue-800/50 text-cerulean-200 border border-cerulean-500/10">
                                    Web App
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2: DATA & EXCEL (Wide Top) */}
                    <div className="group relative md:col-span-2 overflow-hidden rounded-3xl bg-yale-blue-900/30 border border-yale-blue-800/50 hover:border-amber-honey-500/50 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(255,179,0,0.3)]">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-honey-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="p-8 relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                            <div className="flex-1">
                                <div className="w-12 h-12 rounded-2xl bg-amber-honey-900/30 border border-amber-honey-500/30 flex items-center justify-center text-amber-honey-400 mb-4 group-hover:rotate-6 transition-transform duration-300">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-cream-50 mb-2 group-hover:text-amber-honey-300 transition-colors">
                                    Data & Spreadsheet
                                </h3>
                                <p className="text-yale-blue-200 text-sm leading-relaxed mb-4">
                                    Ubah data mentah menjadi keputusan bisnis.
                                    Kami membuat template Excel/Spreadsheet
                                    otomatis dan dashboard interaktif.
                                </p>
                            </div>

                            {/* Visual representation (Mini Table) */}
                            <div className="md:w-1/2 bg-yale-blue-950/50 rounded-xl p-4 border border-yale-blue-800/50 group-hover:border-amber-honey-500/20 transition-colors">
                                <div className="flex gap-2 mb-3">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-full bg-yale-blue-800/50 rounded animate-pulse"></div>
                                    <div className="h-2 w-3/4 bg-yale-blue-800/50 rounded animate-pulse delay-75"></div>
                                    <div className="h-2 w-1/2 bg-amber-honey-500/20 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CARD 3: UI/UX DESIGN (Standard) */}
                    <div className="group relative md:col-span-1 overflow-hidden rounded-3xl bg-yale-blue-900/30 border border-yale-blue-800/50 hover:border-cream-200/50 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cream-100/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="p-8 h-full relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-yale-blue-800 border border-cream-200/30 flex items-center justify-center text-cream-100 mb-4">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-cream-50 mb-2">
                                UI/UX Design
                            </h3>
                            <p className="text-yale-blue-200 text-sm">
                                Desain antarmuka yang estetis dan berfokus pada
                                pengalaman pengguna (User Centered).
                            </p>
                        </div>
                    </div>

                    {/* CARD 4: CTA / CONSULTATION (Highlighted) */}
                    <div className="group relative md:col-span-1 overflow-hidden rounded-3xl bg-gradient-to-br from-amber-honey-600 to-amber-honey-500 text-yale-blue-950 flex flex-col justify-center items-center text-center p-8 shadow-lg cursor-pointer hover:scale-[1.02] transition-transform">
                        <h3 className="text-2xl font-bold mb-2">
                            Butuh Custom?
                        </h3>
                        <p className="font-medium text-yale-blue-900/70 mb-6 text-sm">
                            Punya masalah spesifik? Mari diskusikan solusinya.
                        </p>
                        <Link
                            href="#contact"
                            className="px-6 py-2 bg-yale-blue-950 text-cream-50 rounded-full font-bold text-sm hover:bg-yale-blue-900 transition-colors"
                        >
                            Hubungi Kami &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
