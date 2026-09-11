const ContactUs = () => {
  return (
    <section id="contact" className="page-section">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <div className="grid-2">
          <div>
            <h2>Get in Touch</h2>
            <p style={{marginBottom: '1.5rem'}}>We would love to hear from you. Please reach out for consulting, career guidance, or any other inquiries.</p>
            
            <div style={{marginBottom: '1rem'}}>
              <strong>Phone / WhatsApp:</strong>
              <p style={{marginBottom: '0.25rem'}}>For Career Counselling & Admission enquiries: +91 70210 24718</p>
              <p>For Consulting enquiries: +91 98204 11709</p>
            </div>
            
            <div style={{marginBottom: '1rem'}}>
              <strong>Email:</strong>
              <p>counselling@shirvaikerconsulting.com</p>
              <p>consulting@shirvaikerconsulting.com</p>
            </div>
            
            <div style={{marginBottom: '1rem'}}>
              <strong>Office location:</strong>
              <p>Mumbai, India (by appointment)</p>
            </div>
          </div>
          
          <div className="card">
            <h2>Send a Message</h2>
            <form style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem'}}>
              <input type="text" placeholder="Your Name" style={{padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc'}} />
              <input type="email" placeholder="Your Email" style={{padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc'}} />
              <textarea placeholder="Your Message" rows={5} style={{padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc'}}></textarea>
              <button type="button" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
