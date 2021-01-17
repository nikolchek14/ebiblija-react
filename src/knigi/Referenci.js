import React, {forwardRef} from "react";

const Referenci = ({stih, style, kniga, glava, setRefkniga, setGlava, setStih, setReferenca, setOpen}, ref) => {
    const refClick = (referenca) => {
        setRefkniga(kniga);
        setGlava(glava);
        setStih(stih);
        setReferenca(referenca);
        setOpen(true);
    }

    const buildReferenci = () => stih.referenci.map((el, index) => {
        return (
            <button key={`refDugme-${index}`} className='referenca' onClick={() => refClick(el)}>{el.referenca}</button>
        );
    });

    return <div style={style} className='stih-referenci' ref={ref}><span
        className='stih-referenca'>{stih.r_br}</span> {buildReferenci()}</div>;
}

export default forwardRef(Referenci);