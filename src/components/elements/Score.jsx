import React from 'react';

const Score = ({score,isAbsolute=true}) => {
    const className = `h-12 w-12 rounded-full bg-emerald-400 items-center justify-center flex ${isAbsolute ? "absolute bottom-2 -left-2" : ""}`
    let bg_color = ""
    if (score > 70) {
        bg_color = "bg-emerald-400"
    } else if (score > 50){
        bg_color = 'bg-yellow-400'
    } else {
        bg_color = 'bg-red-400'
    }
    return (
        <div className={className + " " + bg_color}>
            <p className="text-paragraph font-semibold">{score} </p><span className="text-paragraph text-xs">%</span>
        </div>
    );
}

export default Score;
