import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <strong><img className='titleLogo' src={process.env.PUBLIC_URL + "/img/logo/logo.svg"} alt="logo" /></strong>
            <div className='titles'>
                <div className='subtitle'>ABOUT</div>
                <div className='subtitle'>ROADMAP</div>
                <div className='subtitle'>TEAM</div>
                <div className='subtitle'>ABOGALLERYUT</div>
                <div className='subtitle'>AG STUDIO</div>
            </div>
            <div className='connects'>
                <a href="http://discord.com">
                    <img className='connectLogo' src={process.env.PUBLIC_URL + "/img/logo/discord.svg"} alt="discord" />
                </a>
                <a href="https://twitter.com">
                    <img className='connectLogo' src={process.env.PUBLIC_URL + "/img/logo/twitter.svg"} alt="twitter" />
                </a>
                <a href="https://www.instagram.com">
                    <img className='connectLogo' src={process.env.PUBLIC_URL + "/img/logo/instagram.svg"} alt="instagram" />
                </a>
                <a href="https://opensea.io">
                    <img className='connectLogo' src={process.env.PUBLIC_URL + "/img/logo/opensea.svg"} alt="opensea" />
                </a>
            </div>
        </header>
    );
}

export default Header;