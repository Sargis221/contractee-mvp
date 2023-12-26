import './style.css'
import Sargis from '../../assets/img/sargis.jpg'
import Vlad from '../../assets/img/vlad.jpeg'

function About(){
    return(
        <div className='L-about'>
            <div className='L-about-main'>
        <h2 className='L-about-web'>About Contractee</h2>
        <div className='L-about-website'>
            <div className='L-about-website1'>
                <p className='L-about-website-p'>
                Contract automation platform which enables contract lawyers, stakeholders and the partners to work in parallel on one document with centralized versioning.</p>
                <p className='L-about-website-p'>With Contractee IT companies can significantly improve their operational processes. By automating manual tasks, the startup enables stakeholders to focus on more strategic and value-added activities, ultimately driving innovation and growth. 
The increased transparency, cost-efficiency, and speed achieved through automation contribute to higher productivity, improved customer experiences, and a competitive edge in the market.
</p>
               
            </div>
        </div>
       
        <div className='L-about-column'>
            <div className='L-about-column-l'>
            <h2 className='L-about-web'>Key Benefits of the Product</h2>
                <p className='L-about-website-p'><span className='text-bold'>Transparency:</span> Gain real-time visibility into the negotiation process. Every stakeholder involved can easily track progress, updates, and changes, promoting clarity and accountability.</p>
                <p className='L-about-website-p'><span className='text-bold'>Cost-Efficiency:</span> Cut down on resource-draining manual tasks, saving valuable time and money. Our platform optimizes workflows, allowing your team to allocate resources more strategically.</p>
                <p className='L-about-website-p'><span className='text-bold'>Speed:</span> Expedite negotiations without sacrificing accuracy. Our automated system facilitates efficient collaboration, enabling quicker decision-making and contract finalization.</p>
                <p className='L-about-website-p'><span className='text-bold'>Precision:</span> Reduce the risk of errors and discrepancies inherent in manual processes. Our technology ensures that contract terms and details are consistently accurate and in compliance.</p>
                <p className='L-about-website-p'><span className='text-bold'>Competitive Edge:</span> Stay ahead in a fast-paced industry. By automating and streamlining your negotiation processes, you'll be positioned to seize opportunities swiftly, leaving competitors behind.</p>
                <p className='L-about-website-p'><span className='text-bold'>Scalability:</span> Effortlessly handle a growing client base. Our platform's scalability ensures that your negotiation process remains efficient and effective, regardless of the volume.</p>
            
            </div>

        </div>
        <div className='L-about-column'>
            <div className='L-about-column-l'>
            <h2 className='L-about-web'>Automated Assignment</h2>
            <p className='L-about-website-p'> Our assigning feature transforms contract management by identifying operational, financial, legal, and technical clauses in the contract. Contracts are assigned to the relevant departments, ensuring a streamlined workflow.</p>
            
            </div>
           
        </div>
        <div className='L-about-column'>
        <div className='L-about-column-l'>
            <h2 className='L-about-web'>Risk Assessment with ChatGPT</h2>
            <p className='L-about-website-p'>Integrated with ChatGPT, our risk assessment feature delivers insights into contract risks. ChatGPT engages in real-time discussions, providing a summary of the most critical risk factors associated with the contract. 
</p>
            
            </div>

        </div>
        <div className='L-about-column'>
            <div className='L-about-column-l'>
            <h2 className='L-about-web'>Drafting Assistance</h2>
            <p className='L-about-website-p'>Our drafting feature offers personalized suggestions on how to continue drafting the contract. Leveraging advanced algorithms, it analyzes context, legal nuances, and industry standards to provide intelligent recommendations, enhancing the drafting process.
</p>
            
            </div>

        </div>
            {/* <div className='L-about-3columns'>
                <div className='L-about-column1'>
                    <div className='L-about-col-icon-div'>
                        <div className='L-about-image' style={{backgroundImage:`url(${Sargis})`}}/>
                    </div> */}
                    {/* <h2 className='L-about-web'></h2>
                    <p className='L-about-website-p'>Integer tristique arcu scelerisque mauris posuere convallis. Fusce egestas ipsum sapien, hendrerit ultricies nisi viverra eget. Vestibulum in tortor eget elit rutrum interdum.</p>
                    <p className='L-about-website-p'>Cras auctor velit urna, et feugiat ex tincidunt ut. Sed viverra, elit at pulvinar tristique, sem quam vehicula dolor, sed scelerisque augue mauris non dolor.</p>
                </div> */}
                {/* <div className='L-about-column1'>
                    <div className='L-about-col-icon-div'> */}
                    {/* <div className='L-about-image' style={{backgroundImage:`url(${Vlad})`}}/> */}
                    {/* </div> */}
                    {/* <h2 className='L-about-web'>Header</h2>
                    <p className='L-about-website-p'>Donec nec est tincidunt, rhoncus nulla sit amet, imperdiet augue. Phasellus sodales placerat ipsum ac auctor. Mauris molestie blandit turpis. Mauris ante tellus, feugiat nec metus non, bibendum semper velit.</p> */}
                    {/* <button className='L-about-column-btn'>Read More</button> */}
                {/* </div> */}
                
            {/* </div> */}

            </div>
        </div>
    )
}
export default About