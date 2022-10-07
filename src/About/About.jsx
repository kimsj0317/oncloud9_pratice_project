import React from 'react';
import './About.css'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// import SplitText from 'gsap/SplitText';

function About() {
    gsap.registerPlugin(ScrollTrigger);

    // gsap.from(".title", {
    //     duration: 1,
    //     opacity: 0,
    //     y: 20,
    //     ease: "circ.out",
    //     stagger: 0.02,
    //     scrollTrigger: {
    //         trigger: ".title",
    //         start: "top 50%",
    //         end: "bottom center",
    //         scrub: 1,
    //     }
    // });

    // gsap.from(".explane", {
    //     scrollTrigger: ".explane",
    //     y: "400px",
    //     duration: 1,
    // })

    return (
        <>
            <div>
                <div className='title'>ABOUT</div>
                <div className='explane'
                    style={{ paddingTop: '100px', paddingLeft: '600px', paddingRight: '100px' }}>
                    Avant Garde Studio designs and produces luxury digital fashion NFTs and continuous profits to holders. Our unique
                    technology, AG Portal allows AG NFTs to be converted into wearable assets that can be worn in AG compatible
                    digital worlds including metaverses and games. Additionally, the holders will receive a continuous income stream
                    from external sales of those fashion items in the physical and digital worlds.
                </div>
                <img className='digitalfashion' src={process.env.PUBLIC_URL + "/img/infographic/infographic_digitalfashion_600.gif"}
                    alt="digitalfashion" />
                <div className='subTitle'
                    style={{ marginTop: '-500px', paddingLeft: '900px', paddingRight: '100px' }}>
                    DIGITAL FASHION
                    <div className='explane'
                        style={{ paddingTop: '25px' }}>
                        Unlike physical fashion items which you can only wear or carry to show your style, AG’s digital
                        fashion items allow you to change your appearance, add digital effects, wear rare wearables, and more.
                    </div>
                </div>
                <div className='subTitle'
                    style={{ paddingLeft: '100px', paddingRight: '1000px', paddingTop: '600px' }}>
                    TECHNOLOGY
                    <div className='explane'
                        style={{ paddingTop: '25px' }}>
                        Avant Garde Studio allows artists, fashion brands, and any designers to use the AG Portal technology for
                        them to design their unique digital fashion NFTs and safely mint through our launchpad platform. Through
                        limitless technical and operation support from Avant Garde, artists and designers will be able to show their
                        creativity continuously in digital worlds.
                    </div>
                </div>
                <img className='technology' src={process.env.PUBLIC_URL + "/img/infographic/infographic_technology_600_high.gif"} alt="technology" />
                <img className='nftinvestment' src={process.env.PUBLIC_URL + "/img/infographic/infographic_nftinvestment_600_high.gif"} alt="nftinvestment" />
                <div className='subTitle'
                    style={{ display: 'inline', position: 'absolute', paddingTop: '500px', paddingLeft: '200px', paddingRight: '100px' }}>
                    NFT AS AN INVESTMENT
                    <div className='explane'
                        style={{ position: 'relative', paddingTop: '25px', }}>
                        We believe one of the most fundamental values of NFT is its ability to generate a profit from
                        outside of the project’s community. Avant Garde Studio will create an ecosystem in which the
                        holders will indefinitely be provided with a profit share of fashion items that are sold individually
                        in each digital world.
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;