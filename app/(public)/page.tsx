import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import CoreValue from "@/components/landing/CoreValue";
import ProgramSection from "@/components/landing/ProgramSection";
import CTASection from "@/components/landing/CTASection";
import { Analytics } from "@vercel/analytics/next";


export default function Home() {
    return (
        <div>

        <HeroSection />
        <AboutSection />
        <CoreValue />
        <ProgramSection />
        <CTASection />

        <Analytics />

        </div>
    );
}