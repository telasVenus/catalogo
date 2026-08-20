import styles from "./CTASection.module.css";
import { trackWhatsApp, trackCatalog } from '../utils/analytics';

function openWhatsApp() {
  trackWhatsApp('cta')
  const phone = "5531988353453"
  const message = "Olá! Gostaria de solicitar um orçamento para telas e arames."
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
}

function openCatalog() {
  trackCatalog('cta')
  window.open("https://drive.google.com/file/d/1E1PUkDrif9ILFsHvqvuTALbdH0-cTZ8i/view?usp=sharing", "_blank")
}

export default function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContent}>
        <h2>Pronto para proteger seu espaço?</h2>
        <p>
          Receba seu orçamento personalizado em minutos. Atendimento
          especializado e sem compromisso!
        </p>
        <div className={styles.ctaButtons}>
          <a 
            href="#"
            className={styles.btnWhite}
            onClick={(e) => { e.preventDefault();
            openCatalog() }}
          >
            <i className="fas fa-book-open"></i>
            Ver Catálogo
          </a>
          <a 
            href="#"
            className={styles.btnWhite}
            onClick={(e) => { e.preventDefault();
            openWhatsApp() }}
          >
            <i className="fab fa-whatsapp"></i>
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
