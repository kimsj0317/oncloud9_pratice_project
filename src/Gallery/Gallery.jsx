import React from 'react';
import './Gallery.css'

function Gallery() {


    return (
        <>
            <div className='title'>GALLERY</div>
            <div style={{ paddingBottom: "300px" }}>
                <div className='gallery'>
                    <img style={{ marginLeft: "600px" }} className='mainArt' src={process.env.PUBLIC_URL + "/img/gallery/main34.png"} alt="Dream" />
                    <img className='mainArt' src={process.env.PUBLIC_URL + "/img/gallery/main37.png"} alt="PortraitG" />
                    <img className='mainArt' src={process.env.PUBLIC_URL + "/img/gallery/main27.png"} alt="Work" />
                    <img className='mainArt' src={process.env.PUBLIC_URL + "/img/gallery/main35.png"} alt="Berlin" />
                    <img className='mainArt' src={process.env.PUBLIC_URL + "/img/gallery/main29.png"} alt="Grapeseed" />
                    <img className='mainArt' src={process.env.PUBLIC_URL + "/img/gallery/main42.png"} alt="Untitled1" />
                    <img className='mainArt' src={process.env.PUBLIC_URL + "/img/gallery/main25.png"} alt="RedFlower2" />
                    <img className='mainArt' src={process.env.PUBLIC_URL + "/img/gallery/main44.png"} alt="PortraitL" />
                    <img className='mainArt' src={process.env.PUBLIC_URL + "/img/gallery/main41.png"} alt="Untitled2" />
                    <img className='mainArt' src={process.env.PUBLIC_URL + "/img/gallery/main43.png"} alt="Untitled3" />
                    <img className='mainArt' src={process.env.PUBLIC_URL + "/img/gallery/main20.png"} alt="Untitled4" />
                </div>
            </div>
        </>
    );
}

export default Gallery;
