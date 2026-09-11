import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { useSanityData } from '../utils/useSanityData';
import { urlFor } from '../utils/sanity';

const HeroSection = styled.section`
  position: relative;
  background-color: #ffffff;
  padding: 6rem 2rem 8rem;
  overflow: hidden;

  @media (max-width: 968px) {
    padding: 4rem 1.5rem 5rem;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 550px;

  @media (max-width: 968px) {
    max-width: 100%;
  }
`;

const HeroHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.15;
  color: #111827;
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.02em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 2.75rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: #4b5563;
  margin: 0 0 2.5rem 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

const HeroCtaGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  background-color: #111827;
  color: #ffffff;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 2px solid #111827;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

  &:hover {
    background-color: #374151;
    border-color: #374151;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  background-color: transparent;
  color: #111827;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 2px solid #e5e7eb;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

  &:hover {
    border-color: #d1d5db;
    background-color: #f9fafb;
    transform: translateY(-2px);
  }
`;

const HeroVisual = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  
  @media (max-width: 968px) {
    min-height: 400px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

const PlaceholderVisual = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  border-radius: 24px;
  border: 2px solid #111827;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 2rem;
  text-align: left;
  
  @media (max-width: 968px) {
    min-height: 300px;
  }
`;

const PlaceholderText = styled.div`
  font-size: 1.35rem;
  font-weight: 500;
  color: #111827;
  line-height: 1.4;
  max-width: 200px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

const ClaritySection = styled.section`
  padding: 8rem 2rem;
  background-color: #ffffff;
  overflow: hidden;

  @media (max-width: 968px) {
    padding: 5rem 1.5rem;
  }
`;

const ClarityContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ClarityContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ClarityEyebrow = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #5e239d;
  margin-bottom: 1rem;
  display: block;
`;

const ClarityHeading = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  color: #111827;
  line-height: 1.15;
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const ClarityDescription = styled.div`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #4b5563;
  margin: 0 0 2.5rem 0;

  p {
    margin-bottom: 1.25rem;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
`;

const ClarityHighlights = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
  padding: 0;
  align-items: center;
`;

const HighlightItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HighlightTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.5rem 0;
`;

const HighlightDesc = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
`;

const StatisticsSection = styled.section`
  padding: 8rem 2rem;
  background-color: #0a192f;
  color: #ffffff;
  
  @media (max-width: 968px) {
    padding: 5rem 1.5rem;
  }
`;

const StatisticsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StatisticsHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 5rem auto;
`;

const StatisticsEyebrow = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #a78bfa;
  margin-bottom: 1rem;
  display: block;
`;

const StatisticsHeading = styled.h2`
  font-size: 2.75rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.02em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const StatisticsDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #9ca3af;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

const StatisticsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 4rem 2rem;
  
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 1.5rem;
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StatValueContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-bottom: 0.75rem;
`;

const StatPrefix = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
  color: #d8b4fe;
  margin-right: 0.25rem;
`;

const StatNumber = styled.span`
  font-size: 4.5rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1;
  letter-spacing: -0.03em;
  font-variant-numeric: tabular-nums;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const StatSuffix = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: #a78bfa;
  margin-left: 0.1rem;
`;

const StatLabel = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #f3f4f6;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

const StatSupporting = styled.p`
  font-size: 0.9rem;
  color: #9ca3af;
  margin: 0;
  line-height: 1.4;
`;

const TestimonialSection = styled.section`
  padding: 8rem 2rem;
  background-color: #f8fafc;
  
  @media (max-width: 968px) {
    padding: 5rem 1.5rem;
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background: #ffffff;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
`;

const TestimonialQuote = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #374151;
  font-style: italic;
  margin: 0 0 2rem 0;
  flex-grow: 1;
`;

const TestimonialAuthor = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.25rem 0;
`;

const TestimonialRole = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

const PartnersSection = styled.section`
  padding: 6rem 2rem;
  background-color: #ffffff;
  border-top: 1px solid #f3f4f6;

  @media (max-width: 968px) {
    padding: 4rem 1.5rem;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 4rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const SliderTrackWrapper = styled.div`
  overflow: hidden;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  padding: 3rem 2rem;
`;

const SliderTrack = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: 4rem;
  align-items: center;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SliderArrow = styled.button<{ $direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.$direction === 'left' ? 'left: 0;' : 'right: 0;'}
  background: none;
  border: none;
  cursor: pointer;
  color: #a0aec0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  transition: color 0.2s;
  
  &:hover {
    color: #4a5568;
  }
  
  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Dot = styled.div<{ $active?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid #a0aec0;
  background: ${props => props.$active ? '#a0aec0' : 'transparent'};
  cursor: pointer;
`;

const PartnerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex: 0 0 auto;
  scroll-snap-align: center;
  width: 180px;
`;

const PartnerLogo = styled.img`
  max-height: 80px;
  max-width: 180px;
  object-fit: contain;
  filter: grayscale(100%) opacity(0.7);
  transition: all 0.3s ease;

  &:hover {
    filter: grayscale(0%) opacity(1);
  }
`;

const PartnerName = styled.p`
  font-size: 0.95rem;
  font-weight: 600;
  color: #4b5563;
  margin: 0;
  text-align: center;
`;

const SectionHeaderCenter = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem auto;
`;

const CapabilitiesSection = styled.section`
  padding: 8rem 2rem;
  background-color: #f9fafb;
`;

const CapabilitiesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const CapabilitiesHeading = styled.h2`
  font-size: 2.75rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 4rem;
  color: #111827;
  letter-spacing: -0.02em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 3rem;
  }
`;

const CapabilityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CapabilityCard = styled(Link)`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05), 0 4px 6px -2px rgba(0,0,0,0.025);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15);
    
    img {
      transform: scale(1.05);
    }
    
    span {
      color: #5e239d;
    }
  }
`;

const CardImageContainer = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
  position: relative;
  background-color: #eaeaea;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
`;

const CardNumber = styled.div`
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  background: rgba(255,255,255,0.95);
  color: #111827;
  font-weight: 700;
  font-size: 0.875rem;
  padding: 0.35rem 1rem;
  border-radius: 30px;
  letter-spacing: 1px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
`;

const CardContent = styled.div`
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CardTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 700;
  color: #5e239d;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0 0 1rem 0;
`;

const CardHeadline = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 1rem 0;
  line-height: 1.3;
  letter-spacing: -0.01em;
`;

const CardDescription = styled.p`
  font-size: 1.05rem;
  color: #4b5563;
  margin: 0 0 2.5rem 0;
  line-height: 1.6;
  flex: 1;
`;

const CardCta = styled.span`
  font-weight: 600;
  color: #111827;
  display: flex;
  align-items: center;
  font-size: 1rem;
  transition: color 0.3s ease;
  margin-top: auto;
`;

const Home = () => {
  const { homePage, testimonials, partners, loading } = useSanityData();
  const trackRef = React.useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  
  if (loading) return <div style={{padding: '5rem', textAlign: 'center'}}>Loading...</div>;

  const heading = homePage?.hero?.heading || "Experience that creates possibilities.";
  const description = homePage?.hero?.description || "Mentoring people. Advising businesses. Enabling technology.";

  const capabilitiesHeading = homePage?.capabilitiesHeading || "Three capabilities. One group.";
  const capabilities = homePage?.capabilities || [
    {
      title: "CAREER MENTORING",
      headline: "Helping people find clarity and direction.",
      description: "Career mentoring, counselling and development for students, professionals and individuals navigating important decisions.",
      cta: { label: "Explore Mentoring →", link: "/career-mentoring" },
      imagePlaceholder: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "CONSULTING",
      headline: "Helping businesses make better decisions.",
      description: "Strategic, statistical and business consulting built on experience, analysis and practical thinking.",
      cta: { label: "Explore Consulting →", link: "/consulting" },
      imagePlaceholder: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "TECHNOLOGY",
      headline: "Turning business needs into digital solutions.",
      description: "Websites, applications, portals, UI/UX and digital transformation solutions designed around real business requirements.",
      cta: { label: "Explore Technology →", link: "/web-tech" },
      imagePlaceholder: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <div id="home">
      <HeroSection>
        <HeroContainer>
          <HeroContent>
            <HeroHeading>{heading}</HeroHeading>
            <HeroDescription>{description}</HeroDescription>
            <HeroCtaGroup>
              {homePage?.hero?.ctas ? (
                homePage.hero.ctas.map((cta: any, idx: number) => {
                  if (idx === 0) {
                    return <PrimaryButton key={idx} to={cta.link || '/contact'}>{cta.label}</PrimaryButton>;
                  }
                  return <SecondaryButton key={idx} to={cta.link || '/contact'}>{cta.label}</SecondaryButton>;
                })
              ) : (
                <>
                  <PrimaryButton to="/contact">Get in Touch</PrimaryButton>
                  <SecondaryButton to="/about">Learn More</SecondaryButton>
                </>
              )}
            </HeroCtaGroup>
          </HeroContent>
          
          {homePage?.hero?.image ? (
            <HeroVisual>
              <HeroImage 
                src={urlFor(homePage.hero.image).url()} 
                alt="Strategic Consulting Professional Visual" 
              />
            </HeroVisual>
          ) : (
            <PlaceholderVisual>
              <PlaceholderText>
                A strong<br />photograph /<br />visual
              </PlaceholderText>
            </PlaceholderVisual>
          )}

        </HeroContainer>
      </HeroSection>

      <CapabilitiesSection>
        <CapabilitiesContainer>
          <CapabilitiesHeading>{capabilitiesHeading}</CapabilitiesHeading>
          <CapabilityGrid>
            {capabilities.map((cap: any, idx: number) => {
              const num = String(idx + 1).padStart(2, '0');
              const link = cap.link || cap.cta?.link || '/';
              const label = cap.cta?.label || 'Explore →';
              const imageUrl = cap.image ? urlFor(cap.image).width(600).url() : cap.imagePlaceholder;
              
              return (
                <CapabilityCard key={idx} to={link}>
                  <CardImageContainer>
                    <CardNumber>{num}</CardNumber>
                    {imageUrl && <CardImage src={imageUrl} alt={cap.title} />}
                  </CardImageContainer>
                  <CardContent>
                    <CardTitle>{cap.title}</CardTitle>
                    <CardHeadline>{cap.headline}</CardHeadline>
                    <CardDescription>{cap.description}</CardDescription>
                    <CardCta>{label}</CardCta>
                  </CardContent>
                </CapabilityCard>
              );
            })}
          </CapabilityGrid>
        </CapabilitiesContainer>
      </CapabilitiesSection>

      <ClaritySection>
        <ClarityContainer>
          <ClarityContentWrapper>
            <ClarityEyebrow>{homePage?.clutterToClarity?.eyebrow || "Strategic Advisory"}</ClarityEyebrow>
            <ClarityHeading>{homePage?.clutterToClarity?.heading || "Clutter to Clarity"}</ClarityHeading>
            <ClarityDescription>
              {homePage?.clutterToClarity?.content ? (
                <p>{homePage.clutterToClarity.content}</p>
              ) : (
                <>
                  <p>Shirvaiker Strategic Consulting is a mentoring and advisory practice founded by Prof. Sunil S. Shirvaiker, blending nearly four decades of corporate leadership and higher-education experience.</p>
                  <p>We help individuals and organisations move from "Clutter to Clarity" through evidence-based, precision-led guidance. Our work spans career counselling, statistics and quality (Six Sigma / SPC) consulting, combining scientific psychometric tools with real-world industry insight.</p>
                  <p>Whether guiding a student's stream choice or sharpening an organisation's analytical rigour, our approach is calculated, personalised and outcome-focused. Strategy-led growth is at the heart of everything we do.</p>
                </>
              )}
            </ClarityDescription>
            
            {homePage?.clutterToClarity?.highlights && homePage.clutterToClarity.highlights.length > 0 && (
              <ClarityHighlights>
                {homePage.clutterToClarity.highlights.map((hl: any, idx: number) => (
                  <HighlightItem key={idx}>
                    <HighlightTitle>{hl.title}</HighlightTitle>
                    <HighlightDesc>{hl.description}</HighlightDesc>
                  </HighlightItem>
                ))}
              </ClarityHighlights>
            )}

            <HeroCtaGroup>
              {homePage?.clutterToClarity?.ctas && homePage.clutterToClarity.ctas.length > 0 ? (
                homePage.clutterToClarity.ctas.map((cta: any, idx: number) => {
                  if (idx === 0) {
                    return <PrimaryButton key={idx} to={cta.link || '/contact'}>{cta.label}</PrimaryButton>;
                  }
                  return <SecondaryButton key={idx} to={cta.link || '/contact'}>{cta.label}</SecondaryButton>;
                })
              ) : (
                <>
                  <PrimaryButton to="/career-mentoring">View Packages</PrimaryButton>
                  <SecondaryButton to="/consulting">Explore Services</SecondaryButton>
                </>
              )}
            </HeroCtaGroup>

          </ClarityContentWrapper>
        </ClarityContainer>
      </ClaritySection>

      {homePage?.statisticsSection?.isVisible !== false && (
        <StatisticsSection>
          <StatisticsContainer>
            <StatisticsHeader>
              <StatisticsEyebrow>{homePage?.statisticsSection?.eyebrow || "Proven Track Record"}</StatisticsEyebrow>
              <StatisticsHeading>{homePage?.statisticsSection?.heading || "Success in Numbers"}</StatisticsHeading>
              <StatisticsDescription>
                {homePage?.statisticsSection?.description || "Join thousands of companies who trust us to deliver excellence."}
              </StatisticsDescription>
            </StatisticsHeader>
            <StatisticsGrid>
              {homePage?.statisticsSection?.statistics ? (
                homePage.statisticsSection.statistics
                  .filter((stat: any) => stat.isVisible !== false)
                  .map((stat: any, idx: number) => (
                    <StatItem key={idx}>
                      <StatValueContainer>
                        {stat.prefix && <StatPrefix>{stat.prefix}</StatPrefix>}
                        <StatNumber>{stat.number}</StatNumber>
                        {stat.suffix && <StatSuffix>{stat.suffix}</StatSuffix>}
                      </StatValueContainer>
                      <StatLabel>{stat.label}</StatLabel>
                      {stat.supportingText && <StatSupporting>{stat.supportingText}</StatSupporting>}
                    </StatItem>
                  ))
              ) : (
                <>
                  <StatItem>
                    <StatValueContainer>
                      <StatNumber>39</StatNumber>
                      <StatSuffix>+</StatSuffix>
                    </StatValueContainer>
                    <StatLabel>Years of professional experience</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatValueContainer>
                      <StatNumber>150</StatNumber>
                      <StatSuffix>+</StatSuffix>
                    </StatValueContainer>
                    <StatLabel>Professionals / students mentored</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatValueContainer>
                      <StatNumber>70</StatNumber>
                      <StatSuffix>+</StatSuffix>
                    </StatValueContainer>
                    <StatLabel>Consulting / market research engagements</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatValueContainer>
                      <StatNumber>12</StatNumber>
                      <StatSuffix>+</StatSuffix>
                    </StatValueContainer>
                    <StatLabel>Industries/sectors</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatValueContainer>
                      <StatNumber>10</StatNumber>
                      <StatSuffix>+</StatSuffix>
                    </StatValueContainer>
                    <StatLabel>Digital projects</StatLabel>
                  </StatItem>
                </>
              )}
            </StatisticsGrid>
          </StatisticsContainer>
        </StatisticsSection>
      )}

      {homePage?.testimonialsSection?.isVisible !== false && (
        <TestimonialSection>
          <SectionHeaderCenter>
            <ClarityEyebrow>{homePage?.testimonialsSection?.eyebrow || "Testimonials"}</ClarityEyebrow>
            <ClarityHeading>{homePage?.testimonialsSection?.heading || "Social Proof"}</ClarityHeading>
            {homePage?.testimonialsSection?.description && (
              <ClarityDescription>
                <p>{homePage.testimonialsSection.description}</p>
              </ClarityDescription>
            )}
          </SectionHeaderCenter>
          
          <TestimonialGrid>
            {homePage?.testimonialsSection?.testimonialsList ? (
              homePage.testimonialsSection.testimonialsList
                .filter((t: any) => t.isVisible !== false)
                .map((t: any, idx: number) => (
                  <TestimonialCard key={idx}>
                    <TestimonialQuote>"{t.quote}"</TestimonialQuote>
                    <TestimonialAuthor>{t.author}</TestimonialAuthor>
                    <TestimonialRole>{t.role}{t.organization ? `, ${t.organization}` : ''}</TestimonialRole>
                  </TestimonialCard>
                ))
            ) : testimonials && testimonials.length > 0 ? (
              testimonials.slice(0, 4).map((t: any, idx: number) => (
                <TestimonialCard key={idx}>
                  <TestimonialQuote>"{t.quote}"</TestimonialQuote>
                  <TestimonialAuthor>{t.author}</TestimonialAuthor>
                  <TestimonialRole>{t.role}{t.tags && t.tags.length > 0 ? `, ${t.tags[0]}` : ''}</TestimonialRole>
                </TestimonialCard>
              ))
            ) : (
              <>
                <TestimonialCard>
                  <TestimonialQuote>"Shirvaiker Sir has been instrumental in guiding me and helping me make the right decisions at every stage of my career. Right from choosing the BSc Applied Statistics and Analytics program at NMIMS, even before the whole AI boom..."</TestimonialQuote>
                  <TestimonialAuthor>Rhea Mirchandani</TestimonialAuthor>
                  <TestimonialRole>Vice President - Data Strategy Lead, JPMorganChase</TestimonialRole>
                </TestimonialCard>
                <TestimonialCard>
                  <TestimonialQuote>"Shirvaiker Sir has been an excellent mentor and teacher throughout my academic journey. His teaching is clear, well-structured, and focused on building a strong understanding of concepts."</TestimonialQuote>
                  <TestimonialAuthor>Kavish Jain</TestimonialAuthor>
                  <TestimonialRole>B.Sc. Applied Statistics & Analytics, NMIMS</TestimonialRole>
                </TestimonialCard>
                <TestimonialCard>
                  <TestimonialQuote>"Sunil Sir is a very friendly guide and motivating career counsellor. His guidance helped me understand my goals clearly and choose the right career path with confidence."</TestimonialQuote>
                  <TestimonialAuthor>Pratiksha Almelkar</TestimonialAuthor>
                  <TestimonialRole>Class 11 Student</TestimonialRole>
                </TestimonialCard>
                <TestimonialCard>
                  <TestimonialQuote>"Thank you so much sir for such a wonderful session. It helped me a lot to know about myself and changed my perspective in a positive direction."</TestimonialQuote>
                  <TestimonialAuthor>Gouri Shelake</TestimonialAuthor>
                  <TestimonialRole>Working Professional</TestimonialRole>
                </TestimonialCard>
              </>
            )}
          </TestimonialGrid>
        </TestimonialSection>
      )}

      {homePage?.partnersSection?.isVisible !== false && (
        <PartnersSection>
          <SectionHeaderCenter>
            <ClarityHeading>{homePage?.partnersSection?.heading || "Meet Our Partners"}</ClarityHeading>
          </SectionHeaderCenter>
          
          <SliderContainer>
            <SliderArrow $direction="left" onClick={scrollPrev}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </SliderArrow>
            
            <SliderTrackWrapper>
              <SliderTrack ref={trackRef}>
                {homePage?.partnersSection?.partners ? (
                  homePage.partnersSection.partners
                    .filter((p: any) => p.isVisible !== false)
                    .map((p: any, idx: number) => (
                      <PartnerCard key={idx}>
                        <PartnerLogo 
                          src={urlFor(p.logo).url()} 
                          alt={p.name || p.altText || "Partner"} 
                        />
                        {p.name && <PartnerName>{p.name}</PartnerName>}
                      </PartnerCard>
                    ))
                ) : partners && partners.length > 0 ? (
                  partners.map((p: any, idx: number) => (
                    <PartnerCard key={idx}>
                      <PartnerLogo 
                        src={urlFor(p.logo).url()} 
                        alt={p.name || "Partner"} 
                      />
                      {p.name && <PartnerName>{p.name}</PartnerName>}
                    </PartnerCard>
                  ))
                ) : (
                  <>
                    <PartnerCard>
                      <PartnerLogo src="/Sunil_Shirvaiker/partners/nmims.png" alt="NMIMS" />
                      <PartnerName>NMIMS</PartnerName>
                    </PartnerCard>
                    <PartnerCard>
                      <PartnerLogo src="/Sunil_Shirvaiker/partners/mentoria.png" alt="Mentoria" />
                      <PartnerName>Mentoria</PartnerName>
                    </PartnerCard>
                    <PartnerCard>
                      <PartnerLogo src="/Sunil_Shirvaiker/partners/mumbai_university.png" alt="Mumbai University" />
                      <PartnerName>Mumbai University</PartnerName>
                    </PartnerCard>
                    {[
                      { id: 'accenture', name: 'Accenture' },
                      { id: 'aditya_birla', name: 'Aditya Birla Capital' },
                      { id: 'adventz', name: 'Adventz' },
                      { id: 'akdn', name: 'AKDN' },
                      { id: 'alkem', name: 'Alkem' },
                      { id: 'axis_bank', name: 'Axis Bank' },
                      { id: 'britannia', name: 'Britannia' },
                      { id: 'cumi', name: 'CUMI' },
                      { id: 'daimler', name: 'Daimler' },
                      { id: 'glenmark', name: 'Glenmark' },
                      { id: 'hp', name: 'HP' },
                      { id: 'itc', name: 'ITC Limited' },
                      { id: 'jewelex', name: 'Jewelex' },
                      { id: 'jll', name: 'JLL' },
                      { id: 'kotak', name: 'Kotak' },
                      { id: 'l_and_t', name: 'Larsen & Toubro' },
                      { id: 'mahindra', name: 'Mahindra Rise' },
                      { id: 'optum', name: 'Optum' },
                      { id: 'titan', name: 'Titan Company' },
                      { id: 'upl', name: 'UPL' }
                    ].map((corp, idx) => (
                      <PartnerCard key={`corp-${idx}`}>
                        <PartnerLogo src={`/Sunil_Shirvaiker/partners/corp/${corp.id}.png`} alt={corp.name} />
                        <PartnerName>{corp.name}</PartnerName>
                      </PartnerCard>
                    ))}
                  </>
                )}
              </SliderTrack>
            </SliderTrackWrapper>

            <SliderArrow $direction="right" onClick={scrollNext}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </SliderArrow>
            
            <SliderDots>
              <Dot $active />
              <Dot />
              <Dot />
              <Dot />
              <Dot />
            </SliderDots>
          </SliderContainer>
        </PartnersSection>
      )}
    </div>
  );
};

export default Home;
