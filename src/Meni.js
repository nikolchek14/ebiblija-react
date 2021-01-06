import React, {useState} from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Hamburger from 'hamburger-react'
import Sodrzina from './Sodrzina.js';

export default function Meni({kniga, biblija, setKniga}) {
    const [aktivno, setAktivno] = useState(false);
    return <div>
                <Popup onClose={() => setAktivno(false)} modal={true} trigger={<button style={{all: 'unset', appearance: 'button'}}>
                <Hamburger toggled={aktivno} toggle={setAktivno} /></button>} >
               <Sodrzina key="sodrzina" biblija={biblija} setKniga={setKniga} />
             </Popup></div>;
}