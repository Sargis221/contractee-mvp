import './style.css'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';


function Contact(){
    const [error,setError] = useState('')
    const [error1,setError1] = useState('')
  function emailValid(e){
    const regexEmail = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/
    if(!regexEmail.test(e.target.value)){
      setError('rgb(80, 23, 23)')
    }else{
      setError('')
    }
  }
  function emailValid1(e){
    const regexEmail1 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(!regexEmail1.test(e.target.value)){
      setError1('rgb(80, 23, 23)')
    }else{
      setError1('')
    }
  }
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2hgghbf', 'template_sva8yrp', form.current, '296AU6U9T-MEM4gU5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };



  const form = useRef();
    return(
        <div className='L-contact'>
            <div className='L-contact-main'>
                    <div className='L-contact-page'>
                    <h2 className='L-about-web'>Contact Page</h2>
                    <form ref={form} onSubmit={sendEmail} action="">
                      <input type="text" required placeholder='Name' name='user_name' onChange={emailValid} style={{borderColor: `${error}`}} className='L-contact-page-inp'/>
                      <input type="text" required placeholder='Email' name='user_email' onChange={emailValid1} style={{borderColor: `${error1}`}} className='L-contact-page-inp'/>
                      <input type="text" required placeholder='Subject' name='user_subject' className='L-contact-page-inp'/>
                      <textarea name="message" placeholder='Message' required className='L-contact-page-inp' id="" rows="8"></textarea>
                      <button type='submit' className='L-contact-send'>Send</button>
                    </form>
                    
                    </div>
                    <div className='L-contact-page'>
                    <h2 className='L-about-web'>Our Address</h2>
                    <p className='L-contact-website-p'>Quisque eleifend mi et nisi eleifend pretium. Duis porttitor accumsan arcu id rhoncus. Praesent fermentum venenatis ipsum, eget vestibulum purus.</p>
                    <p className='L-contact-website-p'>Nulla ut scelerisque elit, in fermentum ante. Aliquam congue mattis erat, eget iaculis enim posuere nec. Quisque risus turpis, tempus in iaculis.</p>
                    <p className='L-contact-website-p'>120-240 Fusce eleifend varius tempusDuis consectetur at ligula 10660</p>
                       <div className='L-contact-address'>
                        <div className='L-contact-address-div'>
                            <span className='icon-envelope L-contact-address-span'> Email: Info@contractee.co</span>
                            </div>
                            <div className='L-contact-address-div'>
                            <span className='icon-phone L-contact-address-span'>  Tel: 010-020-0340</span>
                            </div>
                            <div className='L-contact-address-div'>
                            <span className='icon-globe L-contact-address-span'> URL: www.contractee.net</span>
                            </div>
                       </div>
                    </div>
                    <div className='L-contact-page'>
                    <h2 className='L-about-web'>Our Location</h2>
                    <div className='L-contact-map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.719495139651!2d44.501869376009004!3d40.19305557147647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd173fd4d621%3A0x213beef7d45c07c5!2sAmerican%20University%20of%20Armenia!5e0!3m2!1sen!2sam!4v1703522831451!5m2!1sen!2sam" className='L-contact-map-frame' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    </div>
                </div>
        </div>
    )
}
export default Contact