import React from "react";

export default function Referenci({stih}) {
    const buildReferenci = () => stih.referenci.map((el, index) => {
        return (
            <span key={index}>
            {el.referenca}
        </span>
        );
    });

  return <div className='stih-referenci'> <span className='stih-referenca'>{stih.r_br}</span> {buildReferenci()}</div>;
}