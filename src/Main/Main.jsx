import React from 'react';
import Header from '../components/Header';
import './Main.css'
import About from '../About/About';
import Loadmap from '../Loadmap/Loadmap';
import Team from '../Team/Team';
import Gallery from '../Gallery/Gallery'

const unmuteClick = () => { //영상 소리 끄고 켜기
    const bgVideo = document.getElementById("video");
    if (bgVideo.muted == true) {
        bgVideo.muted = false; document.getElementById("gifImg").src = '{process.env.PUBLIC_URL + "/img/round/round_on_face_revised.gif"}';
    }
    else if (bgVideo.muted == false) {
        bgVideo.muted = true;
        document.getElementById("gifImg").src = '{process.env.PUBLIC_URL + "/img/round/round_off_face_revised.gif"}';
    }
}

function Main() {
    return (
        <>
            <Header />
            <div className='backgroundVideo'>
                <div className="bgVideo">
                    <video id="video" autoplay="autoplay" muted="muted" loop>
                        <source src={process.env.PUBLIC_URL + "/video/Web_AVANT_GARDE_M_10000.mp4"} type="video/mp4" />
                    </video>
                    <img id="gifImg" className="muteButton" src={process.env.PUBLIC_URL + "/img/round/round_off_face_revised.gif"}
                        alt="round_off" onClick={unmuteClick} />
                    <div className='scroll'>
                        <a className='scrollIcon'><span className='scrollDot' /></a>
                        {/* <a className='scrollArrow'><span className='arrows' /><span className='arrows' /></a> */}
                    </div>
                </div>
            </div>
            <About />
            <Loadmap />
            <Team />
            <Gallery />
        </>
    );
}

export default Main;