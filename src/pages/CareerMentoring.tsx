import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSanityData } from '../utils/useSanityData';

const CareerMentoring = () => {
  const [activeTab, setActiveTab] = useState<string>('8-9 STUDENTS');
  const { services: allServices, packages, loading } = useSanityData();
  
  if (loading) return <div style={{padding: '5rem', textAlign: 'center'}}>Loading...</div>;

  // Filter services for Career Mentoring
  const careerServices = allServices.filter((s: any) => 
    s.title.includes('Career') || s.title.includes('Admission')
  );

  // Deduplicate in case of duplicate runs
  const uniqueCareerServices = Array.from(new Map(careerServices.map((item: any) => [item.title, item])).values());


  
  // Deduplicate by title in case seed script was run multiple times
  const uniquePackages = Array.from(new Map(packages.map((item: any) => [item.title + item.targetAudience, item])).values());

  const groupedPackages = uniquePackages.reduce((acc: Record<string, any[]>, pkg: any) => {
    if (!acc[pkg.targetAudience]) {
      acc[pkg.targetAudience] = [];
    }
    acc[pkg.targetAudience].push(pkg);
    return acc;
  }, {});

  const tabs = ['8-9 STUDENTS', '10-12 STUDENTS', 'COLLEGE GRADUATES', 'WORKING PROFESSIONALS'];
  const activePackages = groupedPackages[activeTab] || [];

  const addOns = [
    { title: 'Career Report', price: '₹1,500', desc: 'Get a detailed report of your psychometric assessment for a scientific analysis of your interests. Find out where your interests lie and which future paths you can potentially consider.' },
    { title: 'Career Report + Career Counselling', price: '₹3,000', desc: 'Connect with India\'s top career coaches to analyse your psychometric report and shortlist the top three career paths you\'re most likely to enjoy and excel at.' },
    { title: 'Knowledge Gateway + Career Helpline Access', price: '₹100', desc: 'Unlock holistic information on your career paths and get direct access to Mentoria\'s experts, who will resolve your career-related queries through our dedicated Career Helpline. Validate your career decisions from now until you land a job you love.' },
    { title: 'One-to-One Session with a Career Expert', price: '₹3,500', desc: 'Resolve your career queries and glimpse into your future world through a one-on-one session with an expert from your chosen field.' },
    { title: 'College Admission Planning', price: '₹3,000', desc: 'Get unbiased recommendations and details on your future college options in India and abroad, organised in one resourceful planner.' },
    { title: 'Exam Stress Management', price: '₹1,000', desc: 'Get expert guidance on tackling exam stress, planning your study schedule, revision tips and more from India\'s top educators. Increase your chances of acing exams with a calm and clear mind.' },
    { title: 'College Admissions Planner - 100 (CAP-100)', price: '₹199', desc: '₹199 for a ranked list of the top 100 colleges in your course! Get an expert-curated list of colleges based on verified cut-offs. CAP-100 ranks the top 100 colleges into four tiers to help you plan smarter: Indian Ivy League, Target, Smart Backup, and Safe Bet colleges. You can then shortlist colleges based on where you stand!' }
  ];

  return (
    <div>
      <section className="page-section" style={{backgroundColor: '#fff', paddingTop: '4rem', paddingBottom: '2rem'}}>
        <div className="container">
          <h1 className="section-title" style={{textAlign: 'center', marginBottom: '3rem'}}>Who We Work With</h1>
          <div className="grid-2">
            <div style={{paddingRight: '2rem'}}>
              <h2 style={{fontSize: '1.5rem', marginBottom: '0.5rem', color: '#111827'}}>Students & Parents</h2>
              <h3 style={{fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 500, color: '#4b5563'}}>Mentoring and career guidance.</h3>
              <p style={{lineHeight: 1.6, color: '#374151', fontStyle: 'italic'}}>
                We help students and parents make informed decisions about education, career paths and future opportunities. Through personalised mentoring and career guidance, we help bring clarity to choices and create a practical direction for the journey ahead.
              </p>
            </div>
            <div style={{paddingLeft: '2rem', borderLeft: '1px solid #e5e7eb'}}>
              <h2 style={{fontSize: '1.5rem', marginBottom: '0.5rem', color: '#111827'}}>Working Professionals</h2>
              <h3 style={{fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: 500, color: '#4b5563'}}>Career direction, mentoring and advisory.</h3>
              <p style={{lineHeight: 1.6, color: '#374151', fontStyle: 'italic'}}>
                We support working professionals in navigating career transitions, professional growth and important career decisions. Through experienced mentoring and advisory, we help individuals gain perspective, identify opportunities and move forward with greater clarity and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <h1 className="section-title">Career Mentoring Services</h1>
          <div className="grid-2">
            {uniqueCareerServices.map((service: any, idx: number) => (
              <div key={idx} className="card">
                <h2 className="card-title" style={{fontSize: '1.75rem'}}>{service.title}</h2>
                <p style={{marginBottom: '1rem'}}>{service.description}</p>
                <div style={{marginBottom: '0.5rem'}}><strong>Who it's for:</strong> {service.whoItsFor}</div>
                <div style={{marginBottom: '1rem'}}><strong>Mode:</strong> {service.mode}</div>
                <Link to="/contact" className="btn btn-secondary" style={{display: 'inline-block', marginTop: '1rem'}}>Contact Us</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="page-section" style={{backgroundColor: '#f8f7fb', padding: '5rem 1rem'}}>
        <div className="container" style={{maxWidth: '1000px'}}>
          <h1 className="section-title" style={{color: '#5e239d', marginBottom: '0.5rem', fontFamily: 'serif', fontSize: '2.5rem'}}>Mentoria Packages</h1>
          <p style={{textAlign: 'center', marginBottom: '2.5rem', fontSize: '1rem', color: '#666'}}>Choose the right Mentoria plan for your career growth</p>
          
          <div className="tabs-container">
            {tabs.map(tab => (
              <button 
                key={tab} 
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="packages-grid">
            {activePackages.map((pkg: any, idx: number) => (
              <div key={idx} className={`mentoria-card ${pkg.isPopular ? 'popular-card' : ''}`}>
                {pkg.isPopular && <div className="popular-badge">★ Popular</div>}
                <div className="card-inner">
                  <h3 className="pkg-title">{pkg.title}</h3>
                  <p className="pkg-subtitle">Mentoria</p>
                  <div className="pkg-price">{pkg.price}</div>
                  <p className="pkg-features-title">Features:</p>
                  <ul className="pkg-features">
                    {pkg.features && pkg.features.map((f: string, i: number) => (
                      <li key={i}>
                        <svg className="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" fill="#10b981"/>
                          <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="pkg-btn">Book Now</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="addons-section">
            <h2 className="addons-title">Want To Customise Your Mentorship Plan?</h2>
            <p className="addons-subtitle">If you want to subscribe to specific services from Mentoria that resolve your career challenges, you can choose one or more of the following:</p>
            
            <div className="addons-grid">
              {addOns.map((addon, idx) => (
                <div key={idx} className="addon-card">
                  <div className="addon-content">
                    <h3 className="addon-title">{addon.title}</h3>
                    <div className="addon-price">{addon.price}</div>
                    <p className="addon-desc">{addon.desc}</p>
                  </div>
                  <div style={{marginTop: 'auto'}}>
                    <Link to="/contact" className="pkg-btn" style={{padding: '0.4rem 2rem', display: 'inline-block', width: 'auto'}}>Buy Now</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerMentoring;
