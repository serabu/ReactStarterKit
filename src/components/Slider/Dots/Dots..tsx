import React from "react";
import './Dots.scss';

interface DotsProps {
    dotsCount: number;
    indexOfActive?: number;
    ref?: React.RefObject<HTMLUListElement>;
    dotHandler: (e: number) => void 
}

export const Dots: React.FC<DotsProps> = ({ dotsCount, indexOfActive = 0, dotHandler }: DotsProps) => (
    <ul className="dots">
        {
            Array.from(
                { length: dotsCount }, (v, index) => index)
                .map((v, i) =>
                    <li key={`dot_${i}`}
                        className={`dots__item ${i === indexOfActive ? 'active' : ''}`}
                        onClick={() => dotHandler(i)}
                    />)
        }
    </ul>
)