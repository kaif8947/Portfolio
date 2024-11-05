import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1ovbtfp', 'template_m36seik', form.current, 'hoQD9AlPa1Gb29uM2')
      .then((result) => {
        console.log(result.text);
        setMessageStatus('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        setMessageStatus('Failed to send the message. Please try again.');
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="p-10 bg-gray-800 text-white">
      <h2 className="text-3xl font-semibold">Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="mt-6 flex flex-col gap-4">
        <input type="text" name="user_name" placeholder="Your Name" required className="p-3 rounded text-black" />
        <input type="email" name="user_email" placeholder="Your Email" required className="p-3 rounded text-black" />
        <textarea name="message" placeholder="Your Message" required className="p-3 rounded text-black"></textarea>
        <button type="submit" className="p-3 bg-blue-500 rounded text-white">Send Message</button>
      </form>
      {messageStatus && <p className="mt-4">{messageStatus}</p>}
    </section>
  );
}

export default Contact;
