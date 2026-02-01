import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";

export default function Hero() {
    // Definisi animasi untuk Framer Motion (Stagger Effect)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Jeda antar elemen (0.2 detik)
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 }, // Mulai dari bawah & transparan
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 50, damping: 20 }, // Efek membal halus
        },
    };

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-yale-blue-950 flex flex-col justify-start pt-32 md:pt-48">
            {/* --- BACKGROUND LAYERS (CSS ANIMATION - GPU OPTIMIZED) --- */}

            {/* Layer 1: Glowing Orbs (Menggunakan will-change agar dirender GPU) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Orb Kiri Atas - Bergerak pelan (Floating) */}
                <div className="absolute -top-[10%] -left-[10%] w-[40vw] h-[40vw] bg-amber-honey-600/20 rounded-full blur-[100px] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite] will-change-transform"></div>

                {/* Orb Kanan Bawah - Bergerak pelan (Floating delay) */}
                <div className="absolute top-[30%] -right-[10%] w-[35vw] h-[35vw] bg-cerulean-600/10 rounded-full blur-[80px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite] delay-1000 will-change-transform"></div>
            </div>

            {/* Layer 2: Noise Texture (Static - Sangat Ringan) */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

            {/* Layer 3: Grid Lines (CSS Gradient - Tanpa Gambar) */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #4279bd 1px, transparent 1px), linear-gradient(to bottom, #4279bd 1px, transparent 1px)",
                    backgroundSize: "4rem 4rem",
                    maskImage:
                        "linear-gradient(to bottom, black 40%, transparent 100%)", // Fade out grid di bawah
                    WebkitMaskImage:
                        "linear-gradient(to bottom, black 40%, transparent 100%)",
                }}
            ></div>

            {/* --- MAIN CONTENT (ANIMATED) --- */}
            <motion.div
                className="relative z-10 container mx-auto px-4 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* 1. HEADLINE */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-cream-50 mb-6 leading-tight"
                >
                    Solusi Digital <br className="hidden md:block" />
                    <span className="relative inline-block">
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-honey-400 via-amber-honey-300 to-cream-100">
                            Cerdas & Efisien
                        </span>
                        {/* Underline Decoration */}
                        <motion.span
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "100%", opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="absolute bottom-2 left-0 h-3 bg-cerulean-500/30 -rotate-2 blur-sm transform origin-left rounded-full"
                        ></motion.span>
                    </span>
                </motion.h1>

                {/* 2. SUB-HEADLINE */}
                <motion.p
                    variants={itemVariants}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-yale-blue-200 leading-relaxed mb-10 font-light"
                >
                    Vantaris Lab mengubah kompleksitas bisnis menjadi sistem
                    yang sederhana. Mulai dari{" "}
                    <strong className="text-cream-100 font-medium">
                        Website Profesional
                    </strong>{" "}
                    hingga
                    <strong className="text-cream-100 font-medium">
                        {" "}
                        Otomatisasi Data
                    </strong>
                    .
                </motion.p>

                {/* 3. CTA BUTTONS */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    {/* Primary Button */}
                    <Link
                        href="#contact"
                        className="group relative px-8 py-4 bg-amber-honey-500 rounded-full text-yale-blue-950 font-bold text-lg shadow-[0_0_20px_rgba(255,179,0,0.3)] hover:shadow-[0_0_30px_rgba(255,179,0,0.5)] transition-all transform hover:-translate-y-1 overflow-hidden"
                    >
                        <span className="relative z-10">Mulai Proyek Anda</span>
                        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[25deg] group-hover:animate-shine" />
                    </Link>

                    {/* Secondary Button */}
                    <Link
                        href="#projects"
                        className="px-8 py-4 rounded-full text-cream-50 border border-yale-blue-700 hover:bg-yale-blue-800/50 hover:border-cerulean-400 transition-all text-lg font-medium backdrop-blur-sm"
                    >
                        Lihat Portofolio
                    </Link>
                </motion.div>

                {/* 4. BOTTOM TAGLINE (No Badges, Just Typography) */}
                <motion.div
                    variants={itemVariants}
                    className="flex items-center justify-center gap-8 text-yale-blue-300/60 font-mono text-sm tracking-[0.2em] uppercase"
                >
                    <span>Design</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-honey-500/50 animate-pulse"></span>
                    <span>Develop</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cerulean-500/50 animate-pulse delay-75"></span>
                    <span>Organize</span>
                </motion.div>
            </motion.div>

            {/* Gradient Fade to Bottom (Seamless transition) */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-yale-blue-950 via-yale-blue-950/80 to-transparent pointer-events-none"></div>
        </section>
    );
}
