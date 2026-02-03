import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

export default function Projects({ data }) {
    if (!data || data.length === 0) return null;

    const isVideo = (url) => {
        if (!url) return false;
        return /\.(mp4|mov|webm)$/i.test(url);
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section
            id="projects"
            className="relative w-full bg-yale-blue-950 py-32 px-4"
        >
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-cream-50 mb-4 tracking-tight">
                            Featured Works
                        </h2>
                        <p className="text-yale-blue-200 text-lg font-light">
                            Kombinasi estetika desain dan ketepatan logika data.{" "}
                            <br className="hidden md:block" />
                            Berikut adalah beberapa proyek pilihan kami.
                        </p>
                    </div>

                    <Link
                        href="#"
                        className="group flex items-center gap-2 text-cream-100 hover:text-amber-honey-400 transition-colors pb-1 border-b border-yale-blue-800 hover:border-amber-honey-400"
                    >
                        <span className="text-sm font-medium tracking-widest uppercase">
                            Lihat Semua
                        </span>
                        <svg
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.map((project, index) => {
                        const thumbnailUrl = `/storage/${project.thumbnail}`;
                        const fileIsVideo = isVideo(thumbnailUrl);

                        return (
                            <motion.div
                                key={project.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.2 }}
                                className={`group relative rounded-3xl overflow-hidden cursor-pointer ${
                                    index === 0
                                        ? "md:col-span-2 aspect-[16/9] md:aspect-[21/9]"
                                        : "aspect-[4/3]"
                                }`}
                            >
                                <div className="absolute inset-0 bg-yale-blue-900">
                                    {fileIsVideo ? (
                                        <video
                                            src={thumbnailUrl}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                        />
                                    ) : (
                                        <img
                                            src={thumbnailUrl}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                            loading="lazy"
                                        />
                                    )}
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-yale-blue-950 via-yale-blue-950/20 to-transparent opacity-90" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out mb-4">
                                        <div className="flex gap-2">
                                            {project.tech_stack &&
                                                project.tech_stack.map(
                                                    (tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-yale-blue-950 bg-amber-honey-500 rounded-full"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ),
                                                )}
                                        </div>
                                    </div>

                                    <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                                        <p className="text-cerulean-400 text-sm font-bold tracking-widest uppercase mb-2">
                                            {project.category}
                                        </p>
                                        <h3 className="text-2xl md:text-4xl font-bold text-cream-50 group-hover:text-white transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full border border-cream-50/30 flex items-center justify-center text-cream-50 opacity-0 group-hover:opacity-100 group-hover:bg-cream-50 group-hover:text-yale-blue-950 transition-all duration-300 transform scale-90 group-hover:scale-100">
                                        <svg
                                            className="w-5 h-5 -rotate-45"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
