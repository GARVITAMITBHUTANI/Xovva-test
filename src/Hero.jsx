import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './hero.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const maskSectionRef = useRef(null);
  const bottleRef = useRef(null);

  useEffect(() => {
    // Locks the entire section in place while the reveal occurs
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=2000', // Scroll length determining reveal speed
        scrub: 1,      // Tracks scroll movements smoothly
        pin: true,     // Pins viewport elements
      }
    });

    // Gradually opens a circular window to reveal the hidden bottle
    tl.to(maskSectionRef.current, {
      clipPath: 'circle(75% at 50% 50%)',
      ease: 'none'
    });

    // Subtle parallax shift making the bottle rise into view
    tl.to(bottleRef.current, {
      y: '0%',
      scale: 1,
      ease: 'none'
    }, 0); // Runs simultaneously with the clipPath reveal

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-viewport">
      
      {/* 1. Base Text Layer (Always Visible Background Element) */}
      <div className="base-content">
        <div className="text-group">
          <span className="brand-tag">XOVVA TONEVA</span>
          <h1>Depigmentation <br />Face Serum</h1>
          <p>Advanced formula for radiant, flawless skin tone.</p>
          <button className="cta-button">Discover Radiance</button>
        </div>
      </div>

      {/* 2. Hidden Reveal Container Layer (Unmasks on Scroll) */}
      <div ref={maskSectionRef} className="reveal-mask-layer">
        <div className="reveal-content-inner">
          <img 
            ref={bottleRef}
            src="/images/ezgif-frame-300.jpg" 
            className="product-reveal-image" 
            alt="Xovva Toneva Serum Bottle" 
          />
        </div>
      </div>

    </div>
  );
}
