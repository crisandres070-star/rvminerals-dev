import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import StatsMarquee from "@/components/sections/StatsMarquee";
import QuienesSomos from "@/components/sections/QuienesSomos";
import CadenaDeValor from "@/components/sections/CadenaDeValor";
import AreasDeDesarrollo from "@/components/sections/AreasDeDesarrollo";
import PorQueElegir from "@/components/sections/PorQueElegir";
import ProyectosYOperaciones from "@/components/sections/ProyectosYOperaciones";
import NuestroEquipo from "@/components/sections/NuestroEquipo";
import SeguridadYResponsabilidad from "@/components/sections/SeguridadYResponsabilidad";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsMarquee />
      <QuienesSomos />
      <CadenaDeValor />
      <AreasDeDesarrollo />
      <PorQueElegir />
      <ProyectosYOperaciones />
      <NuestroEquipo />
      <SeguridadYResponsabilidad />
      <Footer />
    </main>
  );
}
