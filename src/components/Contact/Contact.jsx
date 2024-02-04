
import React, { useContext, useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import './Contact.css'; // Assuming you have a CSS file for styling



const Contact = () => {
  
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_bpx7q02', // Replace with your service ID
      'template_ku8yj47', // Replace with your template ID
      form.current,
      'WdMFqgpjljGcSW12w' // Replace with your user ID
    ).then(
      (result) => {
        console.log(result.text);
        console.log("Your message Sent")
        setDone(true);
        e.target.reset(); // Reset the form after successful submission
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contact-container">
      <h2>Get in Touch</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
        {done && <p>Thanks for contacting me!</p>}
      </form>
    </div>
  );
};

export default Contact;
