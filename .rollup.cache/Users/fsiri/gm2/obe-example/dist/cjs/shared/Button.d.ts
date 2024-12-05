import { Route } from "../routers/types";
import React, { ButtonHTMLAttributes, FC } from "react";
export interface ButtonProps {
    className?: string;
    translate?: string;
    sizeClass?: string;
    fontSize?: string;
    loading?: boolean;
    disabled?: boolean;
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    href?: Route<string>;
    targetBlank?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
}
declare const Button: FC<ButtonProps>;
export default Button;
