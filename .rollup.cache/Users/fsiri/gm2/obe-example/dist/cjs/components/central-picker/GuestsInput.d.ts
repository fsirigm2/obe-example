import { FC } from "react";
import { PathName } from "../../routers/types";
export interface GuestsObject {
    guestAdults?: number;
    guestChildren?: number;
    guestInfants?: number;
}
export interface GuestsInputProps {
    fieldClassName?: string;
    className?: string;
    buttonSubmitHref?: PathName;
    hasButtonSubmit?: boolean;
}
declare const GuestsInput: FC<GuestsInputProps>;
export default GuestsInput;
