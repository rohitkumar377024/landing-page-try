import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <section className="section-contact">
        <h1>Contact Me</h1>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Message" />
        <button className="send-btn">Send</button>
        <p>
          It's only for visual purpose. Functionality doesn't exist for sending. Lol.
        </p>
      </section>
    </div>
  );
};

export default ContactUs;
