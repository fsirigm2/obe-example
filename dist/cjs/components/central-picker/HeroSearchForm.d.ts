import { FC } from "react";
export type SearchTab = "Stays" | "Experiences" | "Cars" | "Flights";
export interface HeroSearchFormProps {
    className?: string;
    currentTab?: SearchTab;
    currentPage?: "Stays" | "Experiences" | "Cars" | "Flights";
}
declare const HeroSearchForm: FC<HeroSearchFormProps>;
export default HeroSearchForm;
