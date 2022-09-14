import React from 'react';
import './Loadmap.css'

function Loadmap() {
    return (
        <>
            <div className='title'>LOADMAP</div>
            <img className='loadmapbg' src={process.env.PUBLIC_URL + "/img/loadmap/roadmap_pc.png"} alt="roadmap" />
        </>
    );
}

export default Loadmap;