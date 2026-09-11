import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useSanityData } from '../utils/useSanityData';
import { urlFor } from '../utils/sanity';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #f7f7f7;
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 2px 10px rgba(0,0,0,0.02);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const BrandSection = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: #1a1a1a;
`;

const LogoImage = styled.img`
  height: 48px;
  width: auto;
  object-fit: contain;
`;

const BrandName = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.2px;
  color: #1f2937;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 968px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  text-decoration: none;
  color: ${props => props.$isActive ? '#5e239d' : '#4b5563'};
  font-weight: ${props => props.$isActive ? '600' : '500'};
  font-size: 0.95rem;
  transition: all 0.2s ease;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

  &:hover {
    color: #5e239d;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 2px;
    background-color: #5e239d;
    transition: width 0.2s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const CtaButton = styled(Link)`
  background-color: #5e239d;
  color: #ffffff;
  padding: 0.6rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: background-color 0.2s ease, transform 0.1s ease;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

  &:hover {
    background-color: #4a1a7e;
  }
  
  &:active {
    transform: scale(0.98);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #1f2937;
  border-radius: 4px;

  &:focus {
    outline: 2px solid #5e239d;
    outline-offset: 2px;
  }

  @media (max-width: 968px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileNavOverlay = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem 2.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transform-origin: top;
  transform: ${props => props.$isOpen ? 'scaleY(1)' : 'scaleY(0)'};
  opacity: ${props => props.$isOpen ? 1 : 0};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;
  z-index: 999;
  border-top: 1px solid #eaeaea;

  @media (min-width: 969px) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)<{ $isActive?: boolean }>`
  text-decoration: none;
  color: ${props => props.$isActive ? '#5e239d' : '#1f2937'};
  font-size: 1.125rem;
  font-weight: ${props => props.$isActive ? '700' : '500'};
  padding: 1rem 0;
  border-bottom: 1px solid #f3f4f6;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  transition: color 0.2s ease;

  &:hover {
    color: #5e239d;
  }

  &:last-of-type {
    border-bottom: none;
    margin-bottom: 1rem;
  }
`;

const MobileCtaButton = styled(CtaButton)`
  text-align: center;
  display: block;
`;

const Navbar = () => {
  const { siteSettings, navigation } = useSanityData();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const headerNav = navigation?.find((n: any) => n.title === 'Header Nav' || n.title?.toLowerCase().includes('header'));
  const links = headerNav?.links || [
    { label: 'Home', url: '/' },
    { label: 'About Us', url: '/about' },
    { label: 'Career Mentoring', url: '/career-mentoring' },
    { label: 'Consulting', url: '/consulting' },
    { label: 'Web Tech', url: '/web-tech' },
    { label: 'Contact Us', url: '/contact' }
  ];

  // The last link is usually the CTA (Contact Us)
  const regularLinks = links.slice(0, -1);
  const ctaLink = links.length > 0 ? links[links.length - 1] : { label: 'Contact Us', url: '/contact' };

  const brandName = siteSettings?.siteName || "Shirvaiker Group";

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <HeaderWrapper>
      <NavContainer>
        <BrandSection to="/">
          {siteSettings?.logo ? (
            <LogoImage src={urlFor(siteSettings.logo).url()} alt={`${brandName} Logo`} />
          ) : (
            <LogoImage 
              src="/Sunil_Shirvaiker/logo.jpg" 
              alt="Shirvaiker Group Logo" 
              onError={(e) => { e.currentTarget.style.display = 'none'; }} 
            />
          )}
          <BrandName>{brandName}</BrandName>
        </BrandSection>

        <DesktopNav aria-label="Main Navigation">
          {regularLinks.map((link: any, idx: number) => {
            // Check if exact match for home, otherwise check if path starts with url
            const isActive = link.url === '/' 
              ? location.pathname === '/' 
              : location.pathname.startsWith(link.url);
              
            return (
              <NavLink 
                key={idx} 
                to={link.url}
                $isActive={isActive}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </NavLink>
            );
          })}
          <CtaButton to={ctaLink.url || '/contact'}>{ctaLink.label || 'Contact Us'}</CtaButton>
        </DesktopNav>

        <MobileMenuButton 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </MobileMenuButton>
      </NavContainer>

      <MobileNavOverlay $isOpen={isMobileMenuOpen} aria-hidden={!isMobileMenuOpen}>
        {regularLinks.map((link: any, idx: number) => {
          const isActive = link.url === '/' 
            ? location.pathname === '/' 
            : location.pathname.startsWith(link.url);
            
          return (
            <MobileNavLink 
              key={idx} 
              to={link.url}
              $isActive={isActive}
              aria-current={isActive ? 'page' : undefined}
            >
              {link.label}
            </MobileNavLink>
          );
        })}
        <MobileCtaButton to={ctaLink.url || '/contact'}>{ctaLink.label || 'Contact Us'}</MobileCtaButton>
      </MobileNavOverlay>
    </HeaderWrapper>
  );
};

export default Navbar;
