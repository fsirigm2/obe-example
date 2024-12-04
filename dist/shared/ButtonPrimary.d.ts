import { ButtonProps } from "./Button";
import React from "react";
export interface ButtonPrimaryProps extends ButtonProps {
    className?: string;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
}
declare const ButtonPrimary: React.FC<ButtonPrimaryProps>;
export default ButtonPrimary;
