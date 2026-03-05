import styles from "./HeroSection.module.css";

function openWhatsApp() {
  const phone = "5531988353453";
  const message = "Olá! Gostaria de solicitar um orçamento de telas e arames.";
  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank",
  );
}

function openCatalog() {
  window.open(
    "https://drive.google.com/file/d/1E1PUkDrif9ILFsHvqvuTALbdH0-cTZ8i/view?usp=sharing",
    "_blank",
  );
}

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <img
            className={styles.iconeTelasVenus}
            src="public/faviconBranco.svg"
            alt="Logo Telas Vênus"
          />
          <img
            className={styles.iconeTelasVenusPalavras}
            src="public/telasVenusBranco.svg"
            alt="Telas Vênus"
          />
          <p className={styles.subtitle}>
            Segurança e qualidade para proteger o que você mais valoriza
          </p>

          <div className={styles.heroFeatures}>
            <div className={styles.featureItem}>
              <i className="fas fa-shield-alt"></i>
              <span>Máxima Segurança</span>
            </div>
            <div className={styles.featureItem}>
              <i className="fas fa-medal"></i>
              <span>Qualidade Garantida</span>
            </div>
          </div>

          <div className={styles.ctaContainer}>
            <a
              href="#"
              className={styles.btnPrimary}
              onClick={(e) => {
                e.preventDefault();
                openCatalog();
              }}
            >
              <i className="fas fa-book-open"></i>
              Ver Catálogo Completo
            </a>
            <a
              href="#"
              className={styles.btnSecondary}
              onClick={(e) => {
                e.preventDefault();
                openWhatsApp();
              }}
            >
              <i className="fab fa-whatsapp"></i>
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
