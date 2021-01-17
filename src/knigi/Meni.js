import React, {useState} from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Hamburger from 'hamburger-react'
import { ReactComponent as LeftIcon } from '../icons/chevron-left.svg'
import { ReactComponent as RightIcon } from '../icons/chevron-right.svg'

export default function Meni({kniga, sodrzina, updateKniga, knigaInd}) {
    const [aktivno, setAktivno] = useState(false);
    return <div className='meni'>
             <span className='meni-item'>
                <Popup className='sodrzina-popup' onClose={() => setAktivno(false)} modal={true}
                       trigger={<button style={{all: 'unset', appearance: 'button'}}>
                           <Hamburger className='meni-icon' toggled={aktivno} toggle={setAktivno}/></button>}>
                    {sodrzina}
                </Popup>
             </span>
        <span className='meni-item meni-meta'>
            <LeftIcon
                className={`${knigaInd < 1 ? 'nav-disable' : '' } nav-icon`}
                onClick={knigaInd > 0 ? () => updateKniga(knigaInd-1) : () => {}}
            />
            <span className='meni-meta-tekst-wrap'>
                <span className='meni-meta-tekst meni-meta-naslov'>{kniga.celo_ime}</span>
                <span className='meni-meta-tekst meni-meta-podnaslov'>поднаслов</span>
            </span>
            <RightIcon
                className={`${knigaInd > 75 ? 'nav-disable' : '' } nav-icon`}
                onClick={knigaInd < 76 ? () => updateKniga(knigaInd+1) : () => {}}
            />
        </span>
    </div>;
}