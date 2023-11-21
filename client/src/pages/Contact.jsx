import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for form submission here
    console.log('Form submitted:', formData);
    // You can also reset the form fields after submission if needed
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <h2 className='contact-retro-h2'>Contact Retro Rewind</h2>
      <div className="container contact-container">
        <div className='row justify-content-center'>
          <form className="col-8" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className='d-flex justify-content-center'>
              <button className="btn btn-submit" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;