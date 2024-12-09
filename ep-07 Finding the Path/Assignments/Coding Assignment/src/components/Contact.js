import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the form data to an API or email
    console.log(formData);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have questions or feedback? Reach out to us!</p>
      {isSubmitted && <p className="success-message">Your message has been sent successfully!</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            placeholder="Your Name" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            placeholder="Your Email" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            placeholder="Your Message" 
          />
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
