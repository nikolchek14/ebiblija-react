import React, {forwardRef} from "react";

const Referenci = ({stih, style}, ref) => {
    const buildReferenci = () => stih.referenci.map((el, index) => {
        return (
            <span className='referenca' key={index}>
            {el.referenca}
        </span>
        );
    });

  return <div style={style} className='stih-referenci' ref={ref}> <span className='stih-referenca'>{stih.r_br}</span> {buildReferenci()}</div>;
}

export default forwardRef(Referenci);