import React, {useState, useLayoutEffect} from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Hamburger from 'hamburger-react'
import { ReactComponent as LeftIcon } from '../icons/chevron-left.svg'
import { ReactComponent as RightIcon } from '../icons/chevron-right.svg'

const isBrowser = typeof window !== `undefined`;

export default function Meni({kniga, sodrzina, updateKniga, knigaInd, glavi, openNav}) {
    const [aktivno, setAktivno] = useState(false);
    const [podnaslov, setPodnaslov] = useState(null);
    const [podmeta, setPodmeta] = useState('Вовед');

    const getPodnaslovText = () => {
        if (!isBrowser) return 0;
        const glava = glavi.current.filter((el) => el != null && el.offsetTop - 56 < window.pageYOffset);
        if (glava.length > 0) {
        const glavaOffset = glava[glava.length-1].offsetTop;
        const glavaBroj = glava[glava.length-1].children[0].children[0].getElementsByClassName('glava-broj')[0].innerHTML;
        const podnaslovi = Array.from(glava[glava.length-1].children[0].getElementsByClassName('podnaslov')).filter((el) => glavaOffset + el.offsetTop - 56 < window.pageYOffset);
        const podnaslovText = podnaslovi && podnaslovi.length > 0 ? setPodnaslov(podnaslovi[podnaslovi.length-1].innerHTML) : podnaslov;
        return `${glavaBroj} | ${podnaslovText || podnaslov}`;
        } else {
            return "Вовед";
        }
    }

    const handleScroll = () => {
        setPodmeta(getPodnaslovText());
    }

    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    });

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
            <span className='meni-meta-tekst-wrap' onClick={() => openNav(kniga)}>
                <span className='meni-meta-tekst meni-meta-naslov'>{kniga.kratko_ime}</span>
                <span className='meni-meta-tekst meni-meta-podnaslov'>{podmeta}</span>
            </span>
            <RightIcon
                className={`${knigaInd > 75 ? 'nav-disable' : '' } nav-icon`}
                onClick={knigaInd < 76 ? () => updateKniga(knigaInd+1) : () => {}}
            />
        </span>
    </div>;
}