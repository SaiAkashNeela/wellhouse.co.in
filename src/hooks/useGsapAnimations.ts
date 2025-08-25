import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapAnimations = () => {
  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set("*", { clearProps: "all" });
      return;
    }

    // Set initial states (content visible by default with minimal opacity change)
    gsap.set(".gsap-hero-title", { opacity: 0.3, scale: 0.95 });
    gsap.set(".gsap-cta-button", { opacity: 0.3 });
    gsap.set(".gsap-about", { opacity: 0.3, y: 30 });
    gsap.set(".gsap-amenity-item", { opacity: 0.3, y: 20 });
    gsap.set(".gsap-contact-item", { opacity: 0.3, scale: 0.95 });

    // Page load animations
    const tl = gsap.timeline({ delay: 0.2 });
    
    tl.to(".gsap-hero-title", {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power2.out"
    })
    .to(".gsap-cta-button", {
      opacity: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.4");

    // Scroll-triggered animations
    const isMobile = window.innerWidth < 768;
    const motionDistance = isMobile ? 20 : 50;

    // About section
    gsap.to(".gsap-about", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".gsap-about",
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse"
      }
    });

    // Amenities section - staggered reveal
    gsap.to(".gsap-amenity-item", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: isMobile ? 0.1 : 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".gsap-amenities-container",
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse"
      }
    });

    // Contact section
    gsap.to(".gsap-contact-item", {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".gsap-contact-container",
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse"
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};