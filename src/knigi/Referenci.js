import React, {forwardRef} from "react";
import Popup from 'reactjs-popup';
import ReferencaPopup from './ReferencaPopup.js';

const Referenci = ({stih, style, kniga, glava}, ref) => {
    const buildReferenci = () => stih.referenci.map((el, index) => {
        return (
            <Popup className='referenca-popup'
                   key={`referenca-${index}`}
                   modal={true}
                   trigger={<button className='referenca'>{el.referenca}</button>}>
                <ReferencaPopup stih={stih} referenca={el} kniga={kniga} glava={glava} />
            </Popup>
        );
    });

  return <div style={style} className='stih-referenci' ref={ref}> <span className='stih-referenca'>{stih.r_br}</span> {buildReferenci()}</div>;
}

export default forwardRef(Referenci);