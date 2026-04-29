import React from "react";


const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Get in touch for any questions or feedback.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Our Office</h2>
          <p>FoodAlix Headquarters</p>
          <p>123 Gourmet Street, Islamabad</p>
          <p>Email: <a href="mailto:support@foodalix.com">support@foodalix.com</a></p>
          <p>Phone: +92 300 1234567</p>
        </div>

        <form className="contact-form">
          <h2>Send a Message</h2>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Write your message..." rows="5" required></textarea>
          </div>

          <button className="submit-button" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
