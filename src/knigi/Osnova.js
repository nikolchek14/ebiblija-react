import React, {useState} from "react";
import Sodrzina from './Sodrzina.js';
import Kniga from './Kniga.js';
import Biblija from './Biblija.json';
import Popup from 'reactjs-popup';
import ReferencaPopup from './ReferencaPopup.js';

export default function Osnova() {
    const [kniga, setKniga] = useState(null);
    const [biblija] = useState(Biblija);

    const [glava, setGlava] = useState(null);
    const [stih, setStih] = useState(null);
    const [refkniga, setRefkniga] = useState(null);
    const [referenca, setReferenca] = useState(null);
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const updateKniga = (index) => setKniga(biblija[index]);

    const refPopup = <Popup className='referenca-popup' open={open} modal={true} closeOnDocumentClick
                            onClose={closeModal}>
        <ReferencaPopup stih={stih} referenca={referenca} kniga={refkniga} glava={glava} biblija={biblija}
                        setRefkniga={setRefkniga} setGlava={setGlava} setReferenca={setReferenca} setStih={setStih}
                        setOpen={setOpen}/>
    </Popup>

    const sodrzina = <Sodrzina key="sodrzina" biblija={biblija} setKniga={setKniga} kniga={kniga}/>

    return <>{refPopup} {kniga
        ? <Kniga key={kniga.meta_fajl} kniga={kniga} sodrzina={sodrzina}
                 setRefkniga={setRefkniga} setGlava={setGlava} setReferenca={setReferenca} setStih={setStih}
                 setOpen={setOpen} updateKniga={updateKniga} knigaInd={biblija.indexOf(kniga)} />
        : sodrzina}</>;
}