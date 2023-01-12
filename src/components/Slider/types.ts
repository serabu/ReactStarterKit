import React, { ReactNode } from "react";

export interface SliderProps {
    children: ReactNode | ReactNode[];
    count: number;
    dots?: boolean;
    responsible?: boolean;
}