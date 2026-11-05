import { useEffect, useState } from 'react';
import styles from './GoogleReviewFloat.module.css';

function openGoogleReview() {
  window.open(`https://g.page/r/CV5tXwpoIBz_EAI/review`)
}

export default function GoogleReview() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    function handleScroll() {
      setIsScrolling(true);
      window.clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => setIsScrolling(false), 800)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.clearTimeout(scrollTimeout);
    }
  })
  
  return (
    <a 
      href="#"
      className={`${styles.googleReviewFloat} ${isScrolling ? styles.expanded : ''}`}
      onClick={(event) => { 
        event.preventDefault(); 
        openGoogleReview();
      }}
    >
      <i className="fab fa-google" aria-hidden="true"></i>
      <span className={styles.label} aria-hidden={!isScrolling}>
        Avalie-nos no Google
      </span>
    </a>
  )
}
