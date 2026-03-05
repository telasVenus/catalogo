import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <div className={styles.footerSection}>
            <h3>Contato</h3>
            <div className={styles.contactInfo}>
              <i className="fab fa-whatsapp"></i>
              <span>(31) 98835-3453</span>
            </div>
            <div className={styles.contactInfo}>
              <i className="fas fa-envelope"></i>
              <span>vendas@telasvenus.com.br</span>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h3>Localização</h3>
            <div className={styles.contactInfo}>
              <i className="fas fa-map-marker-alt"></i>
              <span>Rua Marcolino Cruz 81, Lagoa santa - MG</span>
            </div>
            <div className={styles.contactInfo}>
              <i className="fas fa-clock"></i>
              <span>Seg a Sex: 8h às 17h</span>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h3>Seguimento</h3>
            <div className={styles.contactInfo}>
              <i className="fas fa-shield-alt"></i>
              <span>Produtos de qualidade</span>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 Telas Vênus. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
