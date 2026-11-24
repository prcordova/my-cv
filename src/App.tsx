import { useTranslation } from "react-i18next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Results } from "@/components/sections/Results";
import { Skills } from "@/components/sections/Skills";

export default function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {t("a11y.skip")}
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <CaseStudies />
        <Products />
        <Skills />
        <Results />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
