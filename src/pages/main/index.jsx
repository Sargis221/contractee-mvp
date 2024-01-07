import "./style.css"
import home from '../../assets/img/home.jpeg'
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
import {useEffect, useState} from "react"


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
    let faq = [
        {
            question: 'What is the main function of Contractee?',
            answer: 'The main function of Contractee is making the process of contract management more efficient by automating the traditional tasks of contract lawyer, such as risk assessment, task management and contract drafting.',
        },
        {
            question: 'Why should I trust my data to Contractee?',
            answer: 'Contractee has implemented robust access controls and authentication mechanisms. Access to sensitive data is limited to a need-to-know basis, ensuring that employees have access to the data required for their roles. Furthermore, Contractee conducts regular audits and vulnerability assessments to identify and address potential weaknesses in the system. Contractee also performs penetration testing to simulate real-world attacks and strengthen the system against potential threats.',
        },
        {
            question: 'Can your contract automation platform handle complex legal documents and customize them based on specific business needs?',
            answer: 'Absolutely. Our contract automation platform is designed to handle various legal document complexities and can be customized to meet your unique business requirements. Our platform supports a variety of document types, from standard agreements to intricate legal contracts. Whether you require simple modifications or intricate customization, our platform empowers you to streamline the risk assessment process while ensuring that your legal documents align precisely with your business goals and compliance needs.',
        },
        {
            question: 'How does your legal tech contract automation platform integrate with existing legal workflows and software systems?',
            answer: 'Our platform is designed with easy integration in mind. We offer versatile integration options, including APIs, allowing easy connectivity with your existing legal workflows and software systems. Whether you use popular document management systems, customer relationship management tools, or other legal software solutions, our platform can be configured to work harmoniously within your ecosystem. This integration not only streamlines your workflow but also enhances the efficiency of your legal processes by minimizing data silos and promoting a cohesive approach to contract management. Our dedicated support team is available to assist you throughout the integration process, ensuring a smooth implementation for your organization.',
        },
    ]
    let [selected, setSelected] = useState(null);
    let toggle = (i) => {
        if(selected == i){
            return setSelected(null);
        }
        setSelected(i);
    }
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="L-main">
            <div className="L-main-upper">
            <div className="L-centered" data-aos="fade-right">
                <h1 className="L-main-head">Your "ALL IN ONE"</h1>
                <h1 className="L-main-head">Contract Automation Platform</h1>
                <p className="L-main-p">PRIORITIZING DATA SECURITY</p>
            </div>
            <div className="L-cont-img" data-aos="fade-left" style={{backgroundImage: `url(${home})`}}/>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#000b76" fill-opacity="0.6" d="M0,64L60,85.3C120,107,240,149,360,181.3C480,213,600,235,720,245.3C840,256,960,256,1080,224C1200,192,1320,128,1380,96L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg>
            <div className="L-main-how">

                {
                    step.map((el, index) => <Steps key={index} icon={el.icon} text={el.text} stepcount={el.stepcount}/>)
                }
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#000b76" fill-opacity="0.6" d="M0,32L60,42.7C120,53,240,75,360,85.3C480,96,600,96,720,90.7C840,85,960,75,1080,74.7C1200,75,1320,85,1380,90.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
</svg>
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
            <h1 className="L-main-headline">FAQ</h1>
            <div className="L-FAQ">
                <div className="wrapper">
                <div className="accordion">
                    {
                        faq.map((item, i) =>(
                            <div className="item">
                                <div className="title" onClick={() => toggle(i)}>
                                    <h2 className="accordion-title">{item.question}</h2>
                                    <span className="L-faq-btn">{selected === i ? '-' : '+'}</span>
                                </div>
                                <div className={selected === i ? 'answer show' : 'answer'}>{item.answer}</div>
                            </div>
                        ))
                    }
                </div>
                </div>
            </div>
        </div>
    )
}

export default Main