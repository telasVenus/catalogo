import styles from './WhatsAppFloat.module.css';

function openWhatsApp() {
  const phone = "5531988353453"
  const message = "Olá! Gostaria de solicitar um orçamento para telas e arames."
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
}

export default function WhatsAppFloat() {
  return (
    <a 
      href="#"
      className={styles.whatsappFloat}
      onClick={(e) => { e.preventDefault(); openWhatsApp() }}
    >
      <i className="fab fa-whatsapp"></i>
      Fale Conosco
    </a>
  )
}