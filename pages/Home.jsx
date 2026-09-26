import React, { useState } from "react";
import Navbar from "@/components/jaz/Navbar";
import Hero from "@/components/jaz/hero/Hero";
import HairStory from "@/components/jaz/HairStory";
import Benefits from "@/components/jaz/Benefits";
import HerbsRitual from "@/components/jaz/HerbsRitual";
import Lifestyle from "@/components/jaz/Lifestyle";
import WhyJaz from "@/components/jaz/WhyJaz";
import ProductShowcase from "@/components/jaz/ProductShowcase";
import HowItWorks from "@/components/jaz/HowItWorks";
import OrderForm from "@/components/jaz/OrderForm";
import Reviews from "@/components/jaz/Reviews";
import FinalCTA from "@/components/jaz/FinalCTA";
import AnnounceBar from "@/components/jaz/AnnounceBar";
import Footer from "@/components/jaz/Footer";
import WhatsAppFloat from "@/components/jaz/WhatsAppFloat";

export default function Home() {
  const [preset, setPreset] = useState(null);
  const orderSize = (value) => {
    setPreset({ value, at: Date.now() });
    document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-forest">
      <Navbar />
      <main>
        <Hero />
        <HairStory />
        <Benefits />
        <HerbsRitual />
        <Lifestyle />
        <WhyJaz />
        <ProductShowcase onOrder={orderSize} />
        <HowItWorks />
        <OrderForm preset={preset} />
        <Reviews />
        <FinalCTA />
      </main>
      <AnnounceBar />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}