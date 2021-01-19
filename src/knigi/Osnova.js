import React, {useState} from "react";
import Sodrzina from './Sodrzina.js';
import Kniga from './Kniga.js';
import Biblija from './Biblija.json';
import Popup from 'reactjs-popup';
import ReferencaPopup from './ReferencaPopup.js';
import NavPopup from "./NavPopup";

export default function Osnova() {
    const [kniga, setKniga] = useState(null);
    const [biblija] = useState(Biblija);

    const [glava, setGlava] = useState(null);
    const [stih, setStih] = useState(null);
    const [refkniga, setRefkniga] = useState(null);
    const [referenca, setReferenca] = useState(null);

    const [nav, setNav] = useState(null);
    const [navKniga, setNavKniga] = useState(null);
    const [navOpen, setNavOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const closeNav = () => setNavOpen(false);

    const updateKniga = (index) => setKniga(biblija[index]);

    const openNav = (kniga) => {
        setNavKniga(kniga);
        setNavOpen(true);
    }

    const updateNav = (newNav, navKniga) => {
        closeNav();
        if (kniga !== navKniga) {
            setKniga(navKniga)
        }
        setNav(newNav)
    }

    const navPopup = <Popup
        open={navOpen}
        className='nav-popup'
        modal={true}
        position="bottom center"
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{padding: '7px'}}
        arrow={true}
        onClose={closeNav}
    ><NavPopup kniga={navKniga || kniga} updateNav={updateNav}/>
    </Popup>

    const refPopup = <Popup className='referenca-popup' open={open} modal={true} closeOnDocumentClick
                            onClose={closeModal}>
        <ReferencaPopup stih={stih} referenca={referenca} kniga={refkniga} glava={glava} biblija={biblija}
                        setRefkniga={setRefkniga} setGlava={setGlava} setReferenca={setReferenca} setStih={setStih}
                        setOpen={setOpen}/>
    </Popup>

    const sodrzina = <Sodrzina key="sodrzina" biblija={biblija} setKniga={setKniga} kniga={kniga} updateNav={updateNav} openNav={openNav}/>

    return <>{refPopup} {navPopup} {kniga
        ? <Kniga key={kniga.meta_fajl} kniga={kniga} sodrzina={sodrzina}
                 setRefkniga={setRefkniga} setGlava={setGlava} setReferenca={setReferenca} setStih={setStih}
                 setOpen={setOpen} updateKniga={updateKniga} knigaInd={biblija.indexOf(kniga)} openNav={openNav}
                 nav={nav}/>
        : sodrzina}</>;
}