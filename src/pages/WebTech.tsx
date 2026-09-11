import { Link } from 'react-router-dom';

const WebTech = () => {
  const services = [
    { title: 'Website Design & Development', icon: '🌐', desc: 'Custom websites aligned with your vision, built to function efficiently and scale.' },
    { title: 'Website Maintenance', icon: '🔧', desc: 'Ongoing support, updates, and monitoring to keep your web presence secure and smooth.' },
    { title: 'UI/UX Design', icon: '✨', desc: 'Clean, intuitive interfaces that encourage exploration and enhance user experience.' },
    { title: 'Web Applications/Portals', icon: '💻', desc: 'Robust digital solutions and portals tailored to your specific business requirements.' },
    { title: 'App Design & Development', icon: '📱', desc: 'Stylish, usable mobile applications built around your target demographic.' },
    { title: 'App Maintenance', icon: '⚙️', desc: 'Post-deployment tracking, tweaks, and support to ensure optimal app performance.' },
    { title: 'LMS Development', icon: '🎓', desc: 'Comprehensive, easy-to-navigate learning management systems from scratch.' },
    { title: 'Website Content', icon: '📝', desc: 'Optimized copy and media creation to distinguish your digital presence.' }
  ];

  return (
    <div>
      {/* Section 1: Horizontal Visual */}
      <section className="page-section" style={{ 
        backgroundColor: 'var(--color-primary)', 
        padding: '7rem 1rem',
        backgroundImage: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
        color: '#ffffff'
      }}>
        <div className="container" style={{ maxWidth: '1000px', textAlign: 'center' }}>
          <h1 style={{ 
            fontFamily: '"Playfair Display", serif',
            fontSize: '2.75rem', 
            marginBottom: '2rem', 
            textTransform: 'uppercase', 
            letterSpacing: '1px',
            lineHeight: 1.3
          }}>
            Built around your business.<br/>Designed for what's next.
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#e2e8f0', 
            lineHeight: 1.8,
            fontWeight: 400,
            maxWidth: '850px',
            margin: '0 auto'
          }}>
            Technology should make your business simpler, more efficient and more connected. We design, build and improve digital solutions — from websites and applications to internal portals and digital transformation — with a focus on usability, scalability and real business needs.
          </p>
        </div>
      </section>

      {/* Section 2: Our Web Services */}
      <section className="page-section" style={{ backgroundColor: 'var(--color-surface)', padding: '6rem 0' }}>
        <div className="container">
          <h1 className="section-title" style={{ marginBottom: '4rem' }}>Our Web Services</h1>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2.5rem' 
          }}>
            {services.map((service, idx) => (
              <div key={idx} className="card" style={{ 
                display: 'flex', 
                flexDirection: 'column',
                height: '100%',
                borderTop: '4px solid var(--color-secondary)'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: 700, 
                  color: 'var(--color-primary)', 
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {service.title}
                </h3>
                <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1 }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebTech;
