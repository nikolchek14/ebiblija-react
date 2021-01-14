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
            {knigaInd > 0 && <LeftIcon className='nav-icon' onClick={() => updateKniga(knigaInd-1)}/>}
            {kniga.celo_ime}
            {knigaInd < 76 && <RightIcon className='nav-icon' onClick={() => updateKniga(knigaInd+1)}/>}
        </span>
    </div>;
}