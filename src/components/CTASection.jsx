import styles from "./CTASection.module.css";

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
            openWhatsapp() }}
          >
            <i className="fab fa-whatsapp"></i>
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
