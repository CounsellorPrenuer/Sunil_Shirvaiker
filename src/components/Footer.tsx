import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSanityData } from '../utils/useSanityData';
import { urlFor } from '../utils/sanity';

const FooterWrapper = styled.footer`
  background-color: #1a1a1a;
  color: #e5e7eb;
  padding: 4rem 0 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  border-top: 4px solid #5e239d;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1.2fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavColumn = styled(Column)`
  align-items: center;

  @media (max-width: 968px) {
    align-items: flex-start;
  }
`;

const BrandTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 1rem 0;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ColumnTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 1.5rem 0;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #9ca3af;
  margin: 0;
  max-width: 90%;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 0.75rem 2rem;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease, transform 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;

  &:hover {
    color: #ffffff;
    transform: translateX(4px);
  }

  &::after {
    content: '›';
    font-size: 1.2rem;
    line-height: 1;
    opacity: 0;
    transition: opacity 0.2s ease, transform 0.2s ease;
    transform: translateX(-4px);
  }

  &:hover::after {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #9ca3af;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const IconWrapper = styled.div`
  color: #5e239d;
  flex-shrink: 0;
  margin-top: 0.1rem;
`;

const ExternalLink = styled.a`
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`;

const BottomSection = styled.div`
  border-top: 1px solid #374151;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.85rem;
  color: #6b7280;

  @media (max-width: 640px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LogoImage = styled.img`
  height: 36px;
  width: auto;
  border-radius: 4px;
  background-color: #f7f7f7; // Added to match the logo's inherent bg properly inside the dark footer
  padding: 0.25rem;
`;

const Footer = () => {
  const { siteSettings, navigation } = useSanityData();

  // Find footer navigation or fallback
  const footerNav = navigation?.find((n: any) => n.title?.toLowerCase().includes('footer'));
  const links = footerNav?.links || [
    { label: 'Home', url: '/' },
    { label: 'About Us', url: '/about' },
    { label: 'Career Mentoring', url: '/career-mentoring' },
    { label: 'Consulting', url: '/consulting' },
    { label: 'Web Tech', url: '/web-tech' },
    { label: 'Contact Us', url: '/contact' }
  ];

  // Fallback values since Sanity is currently empty
  const brandName = siteSettings?.siteName || "Shirvaiker Group";
  const description = siteSettings?.footerText || "A strategic mentoring and advisory practice blending decades of corporate leadership with evidence-based guidance. Moving individuals and organisations from Clutter to Clarity.";
  const address = siteSettings?.address || "Mumbai, India (by appointment)";
  const phone = siteSettings?.phone || "+91 98204 11709";
  const email = siteSettings?.email || "consulting@shirvaikerconsulting.com";
  const linkedin = siteSettings?.linkedin || "#";
  const copyright = siteSettings?.copyrightText || `© ${new Date().getFullYear()} Shirvaiker Strategic Consulting. All rights reserved.`;

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterGrid>
          {/* Column 1: Branding */}
          <Column>
            <BrandTitle>
              {siteSettings?.logo ? (
                <LogoImage src={urlFor(siteSettings.logo).url()} alt={`${brandName} Logo`} />
              ) : (
                <LogoImage 
                  src="/Sunil_Shirvaiker/logo.jpg" 
                  alt={`${brandName} Logo`}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                />
              )}
              {brandName}
            </BrandTitle>
            <Description>{description}</Description>
          </Column>

          {/* Column 2: Navigation */}
          <NavColumn>
            <ColumnTitle>Services & Links</ColumnTitle>
            <NavList>
              {links.map((link: any, idx: number) => (
                <NavItem key={idx}>
                  <StyledLink to={link.url}>{link.label}</StyledLink>
                </NavItem>
              ))}
            </NavList>
          </NavColumn>

          {/* Column 3: Reach Out */}
          <Column>
            <ColumnTitle>Reach Out</ColumnTitle>
            <ContactList>
              {address && (
                <ContactItem>
                  <IconWrapper>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </IconWrapper>
                  <span>{address}</span>
                </ContactItem>
              )}
              {phone && (
                <ContactItem>
                  <IconWrapper>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </IconWrapper>
                  <ExternalLink href={`tel:${phone.replace(/[^0-9+]/g, '')}`}>{phone}</ExternalLink>
                </ContactItem>
              )}
              {email && (
                <ContactItem>
                  <IconWrapper>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </IconWrapper>
                  <ExternalLink href={`mailto:${email}`}>{email}</ExternalLink>
                </ContactItem>
              )}
              {linkedin && (
                <ContactItem>
                  <IconWrapper>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </IconWrapper>
                  <ExternalLink href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</ExternalLink>
                </ContactItem>
              )}
            </ContactList>
          </Column>
        </FooterGrid>

        <BottomSection>
          <div>{copyright}</div>
          <div>Powered by Shirvaiker Strategic Consulting</div>
        </BottomSection>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
