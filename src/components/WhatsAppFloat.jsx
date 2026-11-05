import { useEffect, useState } from 'react';
import styles from './WhatsAppFloat.module.css';
import { trackWhatsApp } from '../utils/analytics';

function openWhatsApp() {
  trackWhatsApp('float');
  const phone = '5531988353453';
  const message = 'Olá! Gostaria de solicitar um orçamento para telas e arames.';
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

export default function WhatsAppFloat() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    function handleScroll() {
      setIsScrolling(true);
      window.clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => setIsScrolling(false), 800);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <a
      href="#"
      className={`${styles.whatsappFloat} ${isScrolling ? styles.expanded : ''}`}
      aria-label="Fale Conosco pelo WhatsApp"
      onClick={(event) => {
        event.preventDefault();
        openWhatsApp();
      }}
    >
      <i className="fab fa-whatsapp" aria-hidden="true"></i>
      <span className={styles.label} aria-hidden={!isScrolling}>
        Fale Conosco
      </span>
    </a>
  );
}
