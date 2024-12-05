import React, { FC } from "react";
import HeroSearchForm from "./HeroSearchForm";

export interface SectionHeroProps {
  className?: string;
}

const SectionHero: FC<SectionHeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
    >
      <div className="w-full h-full mt-20">
        <HeroSearchForm />
      </div>
    </div>
  );
};

export default SectionHero;
