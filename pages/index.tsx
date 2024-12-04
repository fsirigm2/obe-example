import React from "react";
import SectionHero from "../components/central-picker/SectionHero";
import BgGlassmorphism from "../shared/BgGlassmorphism";

const Home = () => {
  return (
    <main className="nc-PageHome relative overflow-hidden h-full">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative ">
        {/* SECTION HERO */}
        <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />
      </div>
    </main>
  );
};

export default Home;
