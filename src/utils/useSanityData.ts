import { useState, useEffect } from 'react';
import { client } from './sanity';
import fallbackData from '../sanity-data.json';

export function useSanityData() {
  const [data, setData] = useState<any>({
    siteSettings: fallbackData.siteSettings,
    navigation: [],
    homePage: null,
    aboutPage: null,
    careerMentoringPage: null,
    consultingPage: null,
    webTechPage: null,
    contactPage: null,
    services: fallbackData.services || [],
    packages: fallbackData.packages || [],
    customPlans: [],
    testimonials: fallbackData.testimonials || [],
    partners: [],
    statistics: [],
    gallery: fallbackData.gallery || [],
    about: fallbackData.about,
    loading: true
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const [
          siteSettings, navigation,
          homePage, aboutPage, careerMentoringPage, consultingPage, webTechPage, contactPage,
          services, packages, customPlans,
          testimonials, partners, statistics, gallery, about
        ] = await Promise.all([
          client.fetch(`*[_type == "siteSettings"][0]`),
          client.fetch(`*[_type == "navigation"]`),
          client.fetch(`*[_type == "homePage"][0]`),
          client.fetch(`*[_type == "aboutPage"][0]`),
          client.fetch(`*[_type == "careerMentoringPage"][0]`),
          client.fetch(`*[_type == "consultingPage"][0]`),
          client.fetch(`*[_type == "webTechPage"][0]`),
          client.fetch(`*[_type == "contactPage"][0]`),
          client.fetch(`*[_type == "service"] | order(order asc)`),
          client.fetch(`*[_type == "mentoringPackage"] | order(order asc)`),
          client.fetch(`*[_type == "customMentorshipPlan"] | order(order asc)`),
          client.fetch(`*[_type == "testimonial"] | order(order asc)`),
          client.fetch(`*[_type == "partner"] | order(order asc)`),
          client.fetch(`*[_type == "statistic"] | order(order asc)`),
          client.fetch(`*[_type == "galleryItem"] | order(order asc)`),
          client.fetch(`*[_type == "about"][0]`)
        ]);

        setData({
          siteSettings: siteSettings || fallbackData.siteSettings,
          navigation: navigation.length > 0 ? navigation : [],
          homePage, 
          aboutPage, 
          careerMentoringPage, 
          consultingPage, 
          webTechPage, 
          contactPage,
          services: services.length > 0 ? services : (fallbackData.services || []),
          packages: packages.length > 0 ? packages : (fallbackData.packages || []),
          customPlans,
          testimonials: testimonials.length > 0 ? testimonials : (fallbackData.testimonials || []),
          partners, 
          statistics, 
          gallery: gallery.length > 0 ? gallery : (fallbackData.gallery || []),
          about: about || fallbackData.about,
          loading: false
        });
      } catch (error) {
        console.error("Error fetching Sanity data:", error);
        setData((prev: any) => ({ ...prev, loading: false }));
      }
    }

    fetchData();
  }, []);

  return data;
}
