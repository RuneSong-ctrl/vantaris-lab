import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";

export default function Services() {
    const waNumber = "6285954623771";
    const waMessage =
        "Halo Vantaris Lab, saya ingin berdiskusi tentang project digital.";
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

    return (
        <section
            id="services"
            className="relative w-full bg-yale-blue-950 py-24 px-4 overflow-hidden"
        >
            {/* Background Glow tipis */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yale-blue-800/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto relative z-10 max-w-6xl">
                {/* SECTION HEADER */}
                <div className="mb-16 text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-cream-50 mb-4 tracking-tight"
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-yale-blue-200 text-lg max-w-xl leading-relaxed"
                    >
                        Kami menggabungkan{" "}
                        <span className="text-cerulean-400 font-medium">
                            Teknologi Modern
                        </span>{" "}
                        dan{" "}
                        <span className="text-amber-honey-400 font-medium">
                            Logika Data
                        </span>{" "}
                        untuk menciptakan ekosistem digital yang utuh.
                    </motion.p>
                </div>

                {/* BENTO GRID LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
                    {/* CARD 1: WEB DEVELOPMENT */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative md:col-span-1 md:row-span-2 overflow-hidden rounded-3xl bg-yale-blue-900/30 border border-yale-blue-800/50 hover:border-cerulean-500/50 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(0,183,255,0.3)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-cerulean-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="p-8 h-full flex flex-col justify-between relative z-10">
                            <div>
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
                                    pada kecepatan & keamanan.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-8">
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-yale-blue-800/50 text-cerulean-200 border border-cerulean-500/10">
                                    SaaS
                                </span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-yale-blue-800/50 text-cerulean-200 border border-cerulean-500/10">
                                    Landing Page
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 2: DATA & EXCEL */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative md:col-span-2 overflow-hidden rounded-3xl bg-yale-blue-900/30 border border-yale-blue-800/50 hover:border-amber-honey-500/50 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(255,179,0,0.3)]"
                    >
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
                                    otomatis.
                                </p>
                            </div>
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
                    </motion.div>

                    {/* CARD 3: UI/UX DESIGN */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative md:col-span-1 overflow-hidden rounded-3xl bg-yale-blue-900/30 border border-yale-blue-800/50 hover:border-cream-200/50 transition-all duration-500"
                    >
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
                                Desain antarmuka estetis berfokus pada User
                                Experience.
                            </p>
                        </div>
                    </motion.div>

                    {/* CARD 4: CTA / WHATSAPP CARD (Modified) */}
                    <motion.a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative md:col-span-1 overflow-hidden rounded-3xl bg-gradient-to-br from-green-600 to-green-500 text-white flex flex-col justify-center items-center text-center p-8 shadow-lg cursor-pointer"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                            <svg
                                className="w-6 h-6 fill-current"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </div>

                        <h3 className="text-2xl font-bold mb-2">
                            Chat WhatsApp
                        </h3>
                        <p className="font-medium text-green-50/90 mb-6 text-sm">
                            Konsultasi langsung dengan Rama & Dinda via
                            WhatsApp.
                        </p>

                        <div className="px-6 py-2 bg-white text-green-700 rounded-full font-bold text-sm hover:bg-green-50 transition-colors flex items-center gap-2">
                            Hubungi Sekarang{" "}
                            <span className="text-lg">&rarr;</span>
                        </div>
                    </motion.a>
                </div>
            </div>

            {/* --- FLOATING WHATSAPP BUTTON (POP UP) --- */}
            <motion.a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 1,
                }}
                whileHover={{ scale: 1.1 }}
                className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:bg-green-400 transition-colors"
            >
                {/* Tooltip / Bubble Text */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="absolute right-20 bg-white text-yale-blue-950 px-4 py-2 rounded-xl rounded-tr-none shadow-lg whitespace-nowrap font-bold text-sm hidden md:block"
                >
                    Halo! Ada yang bisa dibantu? 👋
                </motion.div>

                {/* WhatsApp Icon */}
                <svg
                    className="w-8 h-8 text-white fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </motion.a>
        </section>
    );
}
