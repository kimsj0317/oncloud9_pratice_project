import React from 'react';
import './Gallery.css'

function Gallery() {


    return (
        <>
            <div className='title'>GALLERY</div>
            <div style={{ paddingBottom: "300px" }}>
                <div className='gallery'>
                    <img style={{ marginLeft: "600px" }} className='mainArt' src={process.env.PUBLIC_URL + "/img/gallery/main34.png"} alt="Dream" />
                    <img className='mainArt' src={process.env.PUBLIC_URL + "/img/gallery/main37.png"} alt="Portrait G" />
                    <img className='mainArt' src={process.env.PUBLIC_URL + "/img/gallery/main27.png"} alt="Work" />
                    <img className='mainArt' src={process.env.PUBLIC_URL + "/img/gallery/main35.png"} alt="Berlin" />
                    <img className='mainArt' src={process.env.PUBLIC_URL + "/img/gallery/main29.png"} alt="Grapeseed" />
                </div>
            </div>
        </>
    );
}

export default Gallery;
