import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "a7e763e9-7368-4109-999f-0934d180ba62");

        const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setResult(res.message);
            event.target.reset();
        } else {
            console.log("Error", res);
            setResult(res.message);
        }
    }

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Sent us a message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact 
                    information below. Your feedback, questions, and suggestions are
                    important to us as we strive toi privide exceptional service to our
                    university communuty 
                </p>
                <ul>
                    <li><img src={mail_icon} alt="" />stavrosandrad@gmai.com</li>
                    <li><img src={phone_icon} alt="" />+30 2104717273</li>
                    <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge <br /> MA 02139, United States</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name='name' placeholder='Enter your name' required/>
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                    <label>Write your message here</label>
                    <textarea name="message" rows="6" placeholder='Enter your text message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact