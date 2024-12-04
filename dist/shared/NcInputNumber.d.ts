import { FC } from "react";
export interface NcInputNumberProps {
    className?: string;
    defaultValue?: number;
    min?: number;
    max?: number;
    onChange?: (value: number) => void;
    label?: string;
    desc?: string;
}
declare const NcInputNumber: FC<NcInputNumberProps>;
export default NcInputNumber;
