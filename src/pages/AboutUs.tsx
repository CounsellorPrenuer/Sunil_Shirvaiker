import { urlFor } from '../utils/sanity';
import { useSanityData } from '../utils/useSanityData';

const AboutUs = () => {
  const { aboutPage, about, gallery: images, loading } = useSanityData();

  if (loading) return <div style={{padding: '5rem', textAlign: 'center'}}>Loading...</div>;

  return (
    <div>
      <section className="page-section" style={{textAlign: 'center', backgroundColor: '#fff', paddingTop: '4rem', paddingBottom: '2rem'}}>
        <div className="container">
          <h2 style={{fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 600}}>Built on experience. Growing through possibilities.</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '1.5rem', maxWidth: '900px', margin: '0 auto 1.5rem'}}>
            Shirvaiker Group brings together expertise across mentoring, business consulting and technology.
          </p>
          <p style={{fontSize: '1.1rem', maxWidth: '900px', margin: '0 auto', color: '#555'}}>
            Founded on decades of professional and academic experience, the Group combines human understanding, analytical thinking and technology to create practical solutions for people and organisations.
          </p>
        </div>
      </section>

      <section id="about" className="page-section" style={{backgroundColor: '#f9fafb'}}>
        <div className="container">
          <h1 className="section-title">{aboutPage?.founder?.heading || "About the Founder"}</h1>
          <div className="grid-2">
            <div>
              <h2 style={{color: 'var(--color-secondary)'}}>{aboutPage?.founder?.name || about?.fullName || "Prof. Sunil S. Shirvaiker"}</h2>
              <p style={{marginBottom: '1rem', whiteSpace: 'pre-wrap'}}>{aboutPage?.founder?.bio || about?.bio}</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              {(aboutPage?.founder?.photo || about?.photo) && (
                <img src={urlFor(aboutPage?.founder?.photo || about?.photo).width(500).url()} alt={aboutPage?.founder?.name || about?.fullName} style={{borderRadius: '8px', maxWidth: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" style={{backgroundColor: '#fff'}}>
        <div className="container">
          <h1 className="section-title">{aboutPage?.coFounder?.heading || "About the Co-Founder"}</h1>
          <div className="grid-2">
            <div>
              <h2 style={{color: 'var(--color-secondary)'}}>{aboutPage?.coFounder?.name || "Suchita S. Shirvaiker — Director, Finance & Administration"}</h2>
              <p style={{marginBottom: '1rem', whiteSpace: 'pre-wrap'}}>
                {aboutPage?.coFounder?.bio || "A Bachelor of Commerce (1987), Suchita brings over a decade of banking and financial operations experience to Shirvaiker Consulting Services. She began her career at Jaideep Engineering as an Accountant, followed by 13 years at Grindlays Bank's Customer Service Unit, where she handled customer service, transaction processing, and remittance operations. At the firm, she brings this same precision and discipline to Finance & Administration."}
              </p>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              {aboutPage?.coFounder?.photo && (
                <img src={urlFor(aboutPage.coFounder.photo).width(500).url()} alt={aboutPage?.coFounder?.name || "Suchita S. Shirvaiker"} style={{borderRadius: '8px', maxWidth: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
              )}
            </div>
          </div>
        </div>
      </section>

      {images && images.length > 0 && (
        <section id="gallery" className="page-section">
          <div className="container">
            <h1 className="section-title">{aboutPage?.galleryHeading || "Gallery"}</h1>
            <div className="grid-3">
              {images.map((img: any, idx: number) => (
                <div key={idx} className="card" style={{padding: '1rem'}}>
                  {img.image && <img src={urlFor(img.image).width(400).url()} alt={img.title} style={{width: '100%', height: '250px', objectFit: 'cover', borderRadius: '4px'}} />}
                  <h3 style={{marginTop: '1rem'}}>{img.title}</h3>
                  <p style={{fontSize: '0.9rem', opacity: 0.8}}>{img.caption}</p>
                  <span style={{fontSize: '0.75rem', backgroundColor: 'var(--color-primary-off)', padding: '0.2rem 0.5rem', borderRadius: '12px'}}>{img.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


    </div>
  );
};

export default AboutUs;
