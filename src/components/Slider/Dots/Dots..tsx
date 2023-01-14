import React from "react";
import './Dots.scss';

interface DotsProps {
    dotsCount: number;
}

export const Dots: React.FC<DotsProps> = ({ dotsCount }: DotsProps) => {
    const dots = Array.from({length: dotsCount}, (_, index) => index);

    return (
        <ul className="dots__list">
            {
               dots.map((_, i) => <li key={`dot_${i}`} className="dots__item" />)
            }
        </ul>
    )
}
