import React, {useState} from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Hamburger from 'hamburger-react'

export default function Meni({kniga, sodrzina}) {
    const [aktivno, setAktivno] = useState(false);
    return <div className='meni'>
             <span className='meni-item'>
                <Popup onClose={() => setAktivno(false)} modal={true} trigger={<button style={{all: 'unset', appearance: 'button'}}>
                    <Hamburger className='meni-icon' toggled={aktivno} toggle={setAktivno} /></button>}>
                    {sodrzina}
                </Popup>
             </span>
             <span className='meni-item meni-meta'>{kniga.celo_ime}</span>
             </div>;
}