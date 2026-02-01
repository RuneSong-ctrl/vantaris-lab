import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative bg-yale-blue-950 pt-32 pb-12 px-4 overflow-hidden"
        >
            {/* Background Gradient Orbs (Subtle) */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-cerulean-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-honey-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    {/* LEFT SIDE: Text & Info */}
                    <div className="flex flex-col justify-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl md:text-7xl font-bold text-cream-50 mb-6 tracking-tight leading-tight"
                        >
                            Siap Memulai <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-honey-400 to-cerulean-400">
                                Proyek Anda?
                            </span>
                        </motion.h2>

                        <p className="text-yale-blue-200 text-lg mb-10 max-w-md font-light">
                            Ceritakan ide, tantangan, atau visi bisnis Anda.
                            Kami akan membantu menerjemahkannya menjadi solusi
                            digital yang nyata.
                        </p>

                        <div className="space-y-6">
                            {/* Contact Item 1 */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-yale-blue-900 flex items-center justify-center text-amber-honey-400 border border-yale-blue-800">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-cream-50 font-bold">
                                        Email Kami
                                    </h4>
                                    <a
                                        href="mailto:hello@vantaris.lab"
                                        className="text-yale-blue-300 hover:text-amber-honey-400 transition-colors"
                                    >
                                        hello@vantaris.lab
                                    </a>
                                </div>
                            </div>

                            {/* Contact Item 2 */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-yale-blue-900 flex items-center justify-center text-cerulean-400 border border-yale-blue-800">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-cream-50 font-bold">
                                        Lokasi
                                    </h4>
                                    <p className="text-yale-blue-300">
                                        Denpasar, Bali - Indonesia
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Minimalist Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-yale-blue-900/30 backdrop-blur-md border border-yale-blue-800 rounded-3xl p-8 md:p-10 shadow-2xl"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-yale-blue-200 ml-1">
                                        Nama
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Dinda / Rama"
                                        className="w-full bg-yale-blue-950/50 border border-yale-blue-800 rounded-xl px-4 py-3 text-cream-50 focus:ring-2 focus:ring-amber-honey-500 focus:border-transparent outline-none transition-all placeholder:text-yale-blue-700"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-yale-blue-200 ml-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="name@company.com"
                                        className="w-full bg-yale-blue-950/50 border border-yale-blue-800 rounded-xl px-4 py-3 text-cream-50 focus:ring-2 focus:ring-amber-honey-500 focus:border-transparent outline-none transition-all placeholder:text-yale-blue-700"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-yale-blue-200 ml-1">
                                    Project Type
                                </label>
                                <select className="w-full bg-yale-blue-950/50 border border-yale-blue-800 rounded-xl px-4 py-3 text-cream-50 focus:ring-2 focus:ring-amber-honey-500 focus:border-transparent outline-none transition-all cursor-pointer">
                                    <option>Web Development</option>
                                    <option>Excel / Data Solution</option>
                                    <option>UI/UX Design</option>
                                    <option>Lainnya</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-yale-blue-200 ml-1">
                                    Pesan
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="Ceritakan sedikit tentang kebutuhan Anda..."
                                    className="w-full bg-yale-blue-950/50 border border-yale-blue-800 rounded-xl px-4 py-3 text-cream-50 focus:ring-2 focus:ring-amber-honey-500 focus:border-transparent outline-none transition-all placeholder:text-yale-blue-700 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-amber-honey-500 hover:bg-amber-honey-400 text-yale-blue-950 font-bold py-4 rounded-xl shadow-lg shadow-amber-honey-500/20 transition-all transform hover:-translate-y-1"
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* BOTTOM FOOTER */}
                <div className="border-t border-yale-blue-900 pt-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Logo Text */}
                        <div className="text-2xl font-bold text-cream-50 tracking-wide">
                            Vantaris
                            <span className="text-amber-honey-500">.Lab</span>
                        </div>

                        {/* Copyright */}
                        <p className="text-yale-blue-400 text-sm">
                            &copy; {new Date().getFullYear()} Vantaris Lab. All
                            rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-6">
                            {["Instagram", "LinkedIn", "GitHub"].map(
                                (social) => (
                                    <a
                                        key={social}
                                        href="#"
                                        className="text-yale-blue-300 hover:text-cream-50 text-sm font-medium transition-colors"
                                    >
                                        {social}
                                    </a>
                                ),
                            )}
                        </div>
                    </div>

                    {/* BIG WATERMARK TEXT */}
                    <div className="mt-20 flex justify-center opacity-5 select-none pointer-events-none">
                        <h1 className="text-[12vw] md:text-[15vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-cream-50 to-transparent leading-none">
                            VANTARIS
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
