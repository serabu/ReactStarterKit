import React, { ReactNode } from "react";

export interface SliderProps {
    children: ReactNode | ReactNode[];
    counts: number;
    ref?: object
}