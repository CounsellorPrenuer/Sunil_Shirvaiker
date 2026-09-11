import { Link } from 'react-router-dom';
import { useSanityData } from '../utils/useSanityData';

const Consulting = () => {
  const { services: allServices, loading } = useSanityData();
  
  if (loading) return <div style={{padding: '5rem', textAlign: 'center'}}>Loading...</div>;

  // Filter services for Consulting
  const consultingServices = allServices.filter((s: any) => 
    s.title.includes('Consulting')
  );

  // Deduplicate in case of duplicate runs
  const uniqueConsultingServices = Array.from(new Map(consultingServices.map((item: any) => [item.title, item])).values());

  return (
    <div>
      {/* Section 1: Different challenges. One approach. */}
      <section className="page-section" style={{ backgroundColor: '#fff', padding: '5rem 0' }}>
        <div className="container">
          <h1 className="section-title">Different challenges. One approach.</h1>
          <div className="grid-2">
            <div className="card">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>01 — Understand</h3>
              <p style={{ color: '#555', fontSize: '1.1rem', margin: 0 }}>We listen before we recommend.</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>02 — Analyse</h3>
              <p style={{ color: '#555', fontSize: '1.1rem', margin: 0 }}>We examine the problem, context and opportunity.</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>03 — Advise</h3>
              <p style={{ color: '#555', fontSize: '1.1rem', margin: 0 }}>We develop practical and informed solutions.</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem' }}>04 — Execute</h3>
              <p style={{ color: '#555', fontSize: '1.1rem', margin: 0 }}>Where required, we help turn those solutions into action.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Data -> Insight -> Decision -> Action */}
      <section className="page-section" style={{ backgroundColor: 'var(--color-surface)', padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '1000px', textAlign: 'center' }}>
          <h1 className="section-title" style={{ marginBottom: '1.5rem' }}>
            Sometimes the challenge isn't a lack of information.<br/>It's knowing what to do with it.
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '4rem', fontWeight: 500 }}>
            We help organisations move from:
          </p>
          
          {/* Beautiful Flowchart */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto',
            padding: '1rem 0'
          }}>
            {/* Background connecting line */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '5%',
              right: '5%',
              height: '4px',
              background: 'linear-gradient(90deg, var(--color-secondary) 0%, var(--color-accent-green) 100%)',
              transform: 'translateY(-50%)',
              zIndex: 0,
              opacity: 0.3,
              borderRadius: '2px'
            }}></div>

            {[
              { id: '01', title: 'Data', icon: '📊', color: 'var(--color-secondary)' },
              { id: '02', title: 'Insight', icon: '💡', color: '#7c3aed' },
              { id: '03', title: 'Decision', icon: '🎯', color: '#0ea5e9' },
              { id: '04', title: 'Action', icon: '🚀', color: 'var(--color-accent-green)' }
            ].map((step, index) => (
              <div key={index} style={{ 
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                flex: 1
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#ffffff',
                  border: `3px solid ${step.color}`,
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '2.5rem',
                  boxShadow: `0 10px 25px -5px rgba(0,0,0,0.1)`,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 20px 25px -5px rgba(0,0,0,0.15)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 10px 25px -5px rgba(0,0,0,0.1)`;
                }}
                >
                  {step.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#888', fontWeight: 700, letterSpacing: '1px' }}>STEP {step.id}</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)', marginTop: '0.25rem' }}>{step.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Contact Us CTA */}
      <section className="page-section" style={{ backgroundColor: '#fff', padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem', borderTop: '4px solid var(--color-accent-green)' }}>
            <h1 className="section-title" style={{ marginBottom: '1rem' }}>
              Have a business challenge you're trying to solve?
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem' }}>
              Tell us what you're working through, and we'll explore whether our experience and expertise can help.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-block', fontSize: '1.1rem' }}>
              Send us Your Requirement →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Our Consulting Services */}
      <section className="page-section" style={{ backgroundColor: 'var(--color-surface)', padding: '5rem 0' }}>
        <div className="container">
          <h1 className="section-title">Our Consulting Services</h1>
          <div className="grid-2">
            {uniqueConsultingServices.map((service: any, idx: number) => (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <h2 className="card-title" style={{fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)'}}>{service.title}</h2>
                <p style={{marginBottom: '1.5rem', color: '#555', lineHeight: 1.6, flexGrow: 1}}>{service.description}</p>
                <div style={{marginBottom: '0.5rem', fontSize: '0.95rem'}}><strong style={{color: 'var(--color-primary)'}}>Who it's for:</strong> {service.whoItsFor}</div>
                <div style={{marginBottom: '1.5rem', fontSize: '0.95rem'}}><strong style={{color: 'var(--color-primary)'}}>Mode:</strong> {service.mode}</div>
                <div>
                  <Link to="/contact" className="btn btn-secondary" style={{display: 'inline-block'}}>Contact Us</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
