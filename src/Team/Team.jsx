import { React } from 'react';
import './Team.css'
import { gsap } from 'gsap';

// function over(name) {
//     gsap.to({ name }, {
//         scale: 1.05,
//         duration: 1.0,
//         paused: true,
//         ease: "ease-in-out",
//     }).play();
// };

// function leave(name) {
//     gsap.to({ name }, {
//         scale: 1.05,
//         duration: 1.0,
//         paused: true,
//         ease: "ease-in-out",
//     }).reverse();
// };

function Team() {
    var style2 = { display: 'inline-block', marginLeft: '100px', };
    var style1 = { display: 'inline-block', };
    var width1 = { width: '420px' };
    var top1 = { marginTop: '70px' };

    const scaleValue1 = 1.05;
    const scaleValue2 = 1.0;
    const timeValue = 0.8;

    const animation = {
        scale: scaleValue1,
        duration: timeValue,
        paused: true,
        ease: "ease-in-out",
    };

    gsap.config({
        nullTargetWarn: false,
        trialWarn: false,
    });

    gsap.set('.null', { opacity: 1 })

    return (
        <>
            <div className='title'>TEAM</div>
            <div style={{
                marginTop: '300px',
                marginLeft: '100px',
            }}>
                <div>{/*첫째줄*/}
                    <div
                        onMouseOver={() => {
                            gsap.to(".Tyler", {
                                scale: scaleValue1,
                                duration: timeValue,
                                paused: true,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        onMouseOut={() => {
                            gsap.to(".Tyler", {
                                scale: scaleValue2,
                                duration: timeValue,
                                paused: false,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        className="Tyler" style={style1}>
                        <img style={{
                            border: '7px solid',
                            borderImage: 'linear-gradient(135deg, #B045E0, #59E7EC)',
                            borderImageSlice: '1',
                        }}
                            className='teamprofile'
                            src={process.env.PUBLIC_URL + "/img/teamprofile/teamprofile_celebchain_tyler_072622.jpg"} alt="tyler" />
                        <div className='nametag'>Tyler Lim</div>
                        <div style={width1} className='introduce'>Founder / CEO<br />
                            • APAC Head of BD/CD at Global Stealth Company<br />
                            • Founder/CEO at Simple Kitchen (Exited ~USD 10M)</div>
                    </div>
                    <div
                        onMouseOver={() => {
                            gsap.to(".Helen", {
                                scale: scaleValue1,
                                duration: timeValue,
                                paused: true,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        onMouseOut={() => {
                            gsap.to(".Helen", {
                                scale: scaleValue2,
                                duration: timeValue,
                                paused: false,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        className="Helen" style={style2}>
                        <img style={{
                            border: '7px solid',
                            borderImage: 'linear-gradient(135deg, #5BE5EB, #CE8BB4)',
                            borderImageSlice: '1',
                        }}
                            className='teamprofile' src={process.env.PUBLIC_URL + "/img/teamprofile/teamprofile_celebchain_helen_072622.jpg"} alt="helen" />
                        <div>
                            <div className='nametag'>Helen Cho</div>
                            <div className='introduce' style={width1}>Founder / CTO<br />
                                • Software Engineer at Google<br />
                                • Technology Analyst at Morgan Stanley<br />
                                • Technology Analyst at Merrill Lynch</div>
                        </div>
                    </div>
                    <div
                        onMouseOver={() => {
                            gsap.to(".June", {
                                scale: scaleValue1,
                                duration: timeValue,
                                paused: true,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        onMouseOut={() => {
                            gsap.to(".June", {
                                scale: scaleValue2,
                                duration: timeValue,
                                paused: false,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        className='June' style={style2}>
                        <img style={{
                            border: '7px solid',
                            borderImage: 'linear-gradient(135deg, #CE8BB4, #FC4238)',
                            borderImageSlice: '1',
                        }}
                            className='teamprofile' src={process.env.PUBLIC_URL + "/img/teamprofile/teamprofile_celebchain_june_072622.jpg"} alt="june" />
                        <div>
                            <div className='nametag'>June</div>
                            <div className='introduce' style={width1}>Creative Director<br />
                                • Lead UX/UI Designer at AMEX<br />
                                • Senior UX/UI Designer at Sony Music Entertainment</div>
                        </div>
                    </div>
                </div>
                <div style={top1}>{/*둘째줄*/}
                    <div
                        onMouseOver={() => {
                            gsap.to(".Thomas", {
                                scale: scaleValue1,
                                duration: timeValue,
                                paused: true,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        onMouseOut={() => {
                            gsap.to(".Thomas", {
                                scale: scaleValue2,
                                duration: timeValue,
                                paused: false,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        className='Thomas' style={style1}>
                        <img style={{
                            border: '7px solid',
                            borderImage: 'linear-gradient(135deg, #FD4037, #603FE4)',
                            borderImageSlice: '1',
                        }}
                            className='teamprofile' src={process.env.PUBLIC_URL + "/img/teamprofile/teamprofile_celebchain_thomas_072622.jpg"} alt="thomas" />
                        <div>
                            <div className='nametag'>Thomas</div>
                            <div className='introduce' style={width1}>CSO</div>
                        </div>
                    </div>
                    <div
                        onMouseOver={() => {
                            gsap.to(".Nacon", {
                                scale: scaleValue1,
                                duration: timeValue,
                                paused: true,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        onMouseOut={() => {
                            gsap.to(".Nacon", {
                                scale: scaleValue2,
                                duration: timeValue,
                                paused: false,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        className='Nacon' style={style2}>
                        <img style={{
                            border: '7px solid',
                            borderImage: 'linear-gradient(135deg, #6443E2, #CEA88C)',
                            borderImageSlice: '1',
                        }}
                            className='teamprofile' src={process.env.PUBLIC_URL + "/img/teamprofile/teamprofile_celebchain_nacon_072622.jpg"} alt="nacon" />
                        <div>
                            <div className='nametag'>Nacon</div>
                            <div className='introduce' style={width1}>Software Engineer</div>
                        </div>
                    </div>
                    <div
                        onMouseOver={() => {
                            gsap.to(".Torch", {
                                scale: scaleValue1,
                                duration: timeValue,
                                paused: true,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        onMouseOut={() => {
                            gsap.to(".Torch", {
                                scale: scaleValue2,
                                duration: timeValue,
                                paused: false,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        className='Torch' style={style2}>
                        <img style={{
                            border: '7px solid',
                            borderImage: 'linear-gradient(135deg, #CDA78D, #AF45DE)',
                            borderImageSlice: '1',
                        }}
                            className='teamprofile' src={process.env.PUBLIC_URL + "/img/teamprofile/teamprofile_celebchain_torch_072622.jpg"} alt="torch" />
                        <div>
                            <div className='nametag'>Torch</div>
                            <div className='introduce' style={width1}>Software Engineer</div>
                        </div>
                    </div>
                </div>
                <div style={top1}>{/*셋째줄*/}
                    <div
                        onMouseOver={() => {
                            gsap.to(".Shape", {
                                scale: scaleValue1,
                                duration: timeValue,
                                paused: true,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        onMouseOut={() => {
                            gsap.to(".Shape", {
                                scale: scaleValue2,
                                duration: timeValue,
                                paused: false,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        className='Shape' style={style1}>
                        <img style={{
                            border: '7px solid',
                            borderImage: 'linear-gradient(135deg, #CDA78B, #59E7EC)',
                            borderImageSlice: '1',
                        }}
                            className='teamprofile' src={process.env.PUBLIC_URL + "/img/teamprofile/teamprofile_celebchain_shape_072622.jpg"} alt="shape" />
                        <div>
                            <div className='nametag'>Shape</div>
                            <div className='introduce' style={width1}>Product Manager</div>
                        </div>
                    </div>
                    <div
                        onMouseOver={() => {
                            gsap.to(".JJ", {
                                scale: scaleValue1,
                                duration: timeValue,
                                paused: true,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        onMouseOut={() => {
                            gsap.to(".JJ", {
                                scale: scaleValue2,
                                duration: timeValue,
                                paused: false,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        className='JJ' style={style2}>
                        <img style={{
                            border: '7px solid',
                            borderImage: 'linear-gradient(135deg, #5BE5EB, #FA403B)',
                            borderImageSlice: '1',
                        }}
                            className='teamprofile' src={process.env.PUBLIC_URL + "/img/teamprofile/teamprofile_celebchain_jj_072622.jpg"} alt="jj" />
                        <div>
                            <div className='nametag'>JJ</div>
                            <div className='introduce' style={width1}>Head of Operations</div>
                        </div>
                    </div>
                    <div
                        onMouseOver={() => {
                            gsap.to(".Harry", {
                                scale: scaleValue1,
                                duration: timeValue,
                                paused: true,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        onMouseOut={() => {
                            gsap.to(".Harry", {
                                scale: scaleValue2,
                                duration: timeValue,
                                paused: false,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        className='Harry' style={style2}>
                        <img style={{
                            border: '7px solid',
                            borderImage: 'linear-gradient(135deg, #F8403B, #B047DE)',
                            borderImageSlice: '1',
                        }}
                            className='teamprofile' src={process.env.PUBLIC_URL + "/img/teamprofile/teamprofile_celebchain_harry_072622.jpg"} alt="harry" />
                        <div>
                            <div className='nametag'>Harry</div>
                            <div className='introduce' style={width1}>Operations</div>
                        </div>
                    </div>
                </div>
                <div style={top1}>{/*넷째줄*/}
                    <div
                        onMouseOver={() => {
                            gsap.to(".Jasmine", {
                                scale: scaleValue1,
                                duration: timeValue,
                                paused: true,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        onMouseOut={() => {
                            gsap.to(".Jasmine", {
                                scale: scaleValue2,
                                duration: timeValue,
                                paused: false,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        className='Jasmine' style={style1}>
                        <img style={{
                            border: '7px solid',
                            borderImage: 'linear-gradient(135deg, #FD4037, #603FE4)',
                            borderImageSlice: '1',
                        }}
                            className='teamprofile' src={process.env.PUBLIC_URL + "/img/teamprofile/teamprofile_celebchain_jasmine_072622.jpg"} alt="jasmine" />
                        <div>
                            <div className='nametag'>Jasmine</div>
                            <div className='introduce' style={width1}>Operation</div>
                        </div>
                    </div>
                    <div
                        onMouseOver={() => {
                            gsap.to(".Doo", {
                                scale: scaleValue1,
                                duration: timeValue,
                                paused: true,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        onMouseOut={() => {
                            gsap.to(".Doo", {
                                scale: scaleValue2,
                                duration: timeValue,
                                paused: false,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        className='Doo' style={style2}>
                        <img style={{
                            border: '7px solid',
                            borderImage: 'linear-gradient(135deg, #6443E2, #CEA88C)',
                            borderImageSlice: '1',
                        }}
                            className='teamprofile' src={process.env.PUBLIC_URL + "/img/teamprofile/teamprofile_celebchain_doo_072622.jpg"} alt="doo" />
                        <div>
                            <div className='nametag'>Doo</div>
                            <div className='introduce' style={width1}>Operation</div>
                        </div>
                    </div>
                    <div
                        onMouseOver={() => {
                            gsap.to(".Kyun", {
                                scale: scaleValue1,
                                duration: timeValue,
                                paused: true,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        onMouseOut={() => {
                            gsap.to(".Kyun", {
                                scale: scaleValue2,
                                duration: timeValue,
                                paused: false,
                                ease: "ease-in-out",
                            }).play();
                        }}
                        className='Kyun' style={style2}>
                        <img style={{
                            border: '7px solid',
                            borderImage: 'linear-gradient(135deg, #CDA78D, #AF45DE)',
                            borderImageSlice: '1',
                        }}
                            className='teamprofile' src={process.env.PUBLIC_URL + "/img/teamprofile/teamprofile_celebchain_kyun_072622.jpg"} alt="kyun" />
                        <div>
                            <div className='nametag'>Kyun</div>
                            <div className='introduce' style={width1}>Moderator</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;