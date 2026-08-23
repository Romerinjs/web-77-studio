/**
 * 77 STUDIO DESIGN SYSTEM - ANIMATIONS & MOTION ENGINE
 * Implements data-opai-animate, data-text-reveal, data-counter,
 * data-move-up-on-scroll-element, and pill button micro-interactions.
 */

export function init77Animations() {
  if (typeof window === 'undefined') return;

  // 1. Scroll Entry Animation ([data-opai-animate])
  const animateElements = document.querySelectorAll<HTMLElement>('[data-opai-animate]');
  
  const animateObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        const delay = el.getAttribute('data-delay') || '0';
        el.style.transitionDelay = `${delay}s`;
        el.classList.add('is-in-view');
        animateObserver.unobserve(el);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  animateElements.forEach((el) => {
    if (el.hasAttribute('data-instant')) {
      const delay = el.getAttribute('data-delay') || '0';
      setTimeout(() => {
        el.classList.add('is-in-view');
      }, parseFloat(delay) * 1000);
    } else {
      animateObserver.observe(el);
    }
  });

  // 2. Text Reveal Animation ([data-text-reveal])
  const textRevealElements = document.querySelectorAll<HTMLElement>('[data-text-reveal]');
  const textObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        const delay = el.getAttribute('data-delay') || '0';
        el.style.transitionDelay = `${delay}s`;
        el.classList.add('is-revealed');
        textObserver.unobserve(el);
      }
    });
  }, {
    threshold: 0.2
  });

  textRevealElements.forEach((el) => textObserver.observe(el));

  // 3. Counter Animation ([data-counter])
  const counterElements = document.querySelectorAll<HTMLElement>('[data-counter]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        const targetNum = parseInt(el.getAttribute('data-number') || '0', 10);
        const duration = parseInt(el.getAttribute('data-speed') || '1400', 10);
        
        if (!el.classList.contains('counted')) {
          el.classList.add('counted');
          let startTimestamp: number | null = null;
          
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentNum = Math.floor(progress * targetNum);
            el.innerText = currentNum.toString();
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              el.innerText = targetNum.toString();
            }
          };
          
          window.requestAnimationFrame(step);
        }
        counterObserver.unobserve(el);
      }
    });
  }, {
    threshold: 0.5
  });

  counterElements.forEach((el) => counterObserver.observe(el));

  // 4. Parallax Scroll Movement ([data-move-up-on-scroll-element])
  const parallaxElements = document.querySelectorAll<HTMLElement>('[data-move-up-on-scroll-element]');
  if (parallaxElements.length > 0) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          parallaxElements.forEach((el) => {
            const val = parseFloat(el.getAttribute('data-move-up-value') || '15');
            const translateY = -(scrollY * (val / 1000));
            el.style.transform = `translate3d(0, ${translateY}px, 0)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // 5. Header Scroll Class (.header-one)
  const header = document.querySelector<HTMLElement>('#main-header, .header-one');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }
}

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init77Animations);
  } else {
    init77Animations();
  }
}
