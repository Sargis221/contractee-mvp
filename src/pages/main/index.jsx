import "./style.css"
import home from '../../assets/img/home.jpg'
import risk from '../../assets/img/riskassess.jpeg'
import assign from '../../assets/img/assign.jpeg'
import draft from '../../assets/img/drafting.jpeg'
import {FaClipboardCheck, FaFileContract, FaQuestion, FaSignature} from "react-icons/fa"
import Steps from "../../components/steps"
import rev1 from "../../assets/img/rev1.jpeg"
import rev2 from "../../assets/img/rev2.jpeg"
import rev3 from "../../assets/img/rev3.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react"


function Main() {
    let step = [
        {
            icon: <FaFileContract className="icon"/>,
            stepcount: "Step 1",
            text: "Upload your contract to be reviewed!",
        },
        {
            icon: <FaSignature className="icon"/>,
            stepcount: "Step 2",
            text: "Our advanced algorithms review your contract and provide unique suggestions based on your needs.",
        },
        {
            icon: <FaClipboardCheck className="icon"/>,
            stepcount: "Step 3",
            text: "Just click 'Assess my risks' and you will get 60%-70% of your contract lawyer's job done.",
        },
        {
            icon: <FaQuestion className="icon"/>,
            stepcount: "Step 4",
            text: "Make adjustments to the Contractee's answers, ask questions, and ask for a second review based on your comments.",
        }
    ]
    let rev = [
        {
            img: rev1,
            pos: 'Head Council',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum eum adipisci ipsum suscipit. Repellat molestiae dolorem odio quisquam nam nisi quia ipsa obcaecati ipsum quod beatae, minus, tempore incidunt.',
        },
        {
            img: rev2,
            pos: 'CLO',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum eum adipisci ipsum suscipit. Repellat molestiae dolorem odio quisquam nam nisi quia ipsa obcaecati ipsum quod beatae, minus, tempore incidunt.',
        },
        {
            img: rev3,
            pos: 'Contract Lawyer',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo cum eum adipisci ipsum suscipit. Repellat molestiae dolorem odio quisquam nam nisi quia ipsa obcaecati ipsum quod beatae, minus, tempore incidunt.',
        },
    ]
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="L-main">
            <div className="L-cont-img" style={{backgroundImage: `url(${home})`}}/>
            <div className="L-centered">
                <h1 className="L-main-head">Your "ALL IN ONE"</h1>
                <h1 className="L-main-head">Contract Automation Platform</h1>
                <p className="L-main-p">Guardians of legal data</p>
            </div>
            <div className="L-main-features">
                <h1 className="L-main-headline">Our top features</h1>
                <div className="L-main-feat1">
                    <div className="L-main-photo" data-aos="fade-right" style={{backgroundImage: `url(${risk})`}}/>
                    <div>
                        <p className="L-main-feat-t" data-aos="fade-left">Integrated with ChatGPT, our risk assessment
                            feature delivers insights into contract risks. ChatGPT engages in real-time discussions,
                            providing a summary of the most critical risk factors associated with the contract. </p>
                    </div>
                </div>
                <div className="L-main-feat1">

                    <div>
                        <p className="L-main-feat-t" data-aos="fade-right">Our assigning feature transforms contract
                            management by identifying operational, financial, legal, and technical clauses in the
                            contract. Contracts are assigned to the relevant departments, ensuring a streamlined
                            workflow. </p>
                    </div>
                    <div className="L-main-photo" data-aos="fade-left" style={{backgroundImage: `url(${assign})`}}/>
                </div>
                <div className="L-main-feat1">
                    <div className="L-main-photo" data-aos="fade-right" style={{backgroundImage: `url(${draft})`}}/>
                    <div>
                        <p className="L-main-feat-t" data-aos="fade-left">Our drafting feature offers personalised
                            suggestions on how to continue drafting the contract. Leveraging advanced algorithms, it
                            analyzes context, legal nuances, and industry standards to provide intelligent
                            recommendations, enhancing the drafting process.</p>
                    </div>
                </div>

            </div>
            <h1 className="L-main-headline">How It Works</h1>
            <div className="L-main-how" data-aos="zoom-in">

                {
                    step.map((el, index) => <Steps key={index} icon={el.icon} text={el.text} stepcount={el.stepcount}/>)
                }
            </div>
            {/* <h1 className="L-main-headline">What Others Say</h1>
            <div className="L-main-review" data-aos="zoom-in">
                {
                    rev.map(el => <Reviews img={el.img} pos={el.pos} desc={el.desc}/>)
                }
            </div> */}
            <div className="L-sub">
                <div className="L-sub-inner" data-aos="fade-down"
                     data-aos-easing="linear"
                     data-aos-duration="1500">
                    <p className="L-sub-p">Become the first user of our platform</p>
                    <h2 className="L-sub-h3">Subscribe to get an early access</h2>
                    <button className="L-sub-btn">Join us</button>
                </div>
            </div>
        </div>
    )
}

export default Main