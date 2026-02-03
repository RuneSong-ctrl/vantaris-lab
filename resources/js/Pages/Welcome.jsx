import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import Services from "@/Components/Services";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";

export default function Welcome() {
    return ( 
        <>
            <Head title="Vantaris Lab - Digital Solutions" />

            <div className="bg-yale-blue-950 min-h-screen text-cream-50 selection:bg-amber-honey-500 selection:text-yale-blue-950">
                <Navbar />

                <main>
                    <Hero />
                    <Services />
                    <Projects />
                    <Contact />
                    <Footer />
                </main>
            </div>
        </>
    );
}