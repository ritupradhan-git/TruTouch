// components/ContactUs.js
import React from 'react';
import '../styles/ContactUs.css';

function ContactUs() {
  return (
    <section id="contact-us" className="section">
      <h2>Get in Touch</h2>
      <p>We'd love to hear from you! Whether you have questions, partnership inquiries, or simply want to learn more, feel free to reach out.</p>
      <div className="contact-info">
        <p><strong>Email:</strong> info@rootach.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Address:</strong> [Your Project/University Address, if applicable]</p>
      </div>
      {/* Optional: Add a simple contact form */}
      {/* <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form> */}
    </section>
  );
}

export default ContactUs;