import { useEffect } from 'react';
import styles from './ReviewAndMap.module.css';

export default function ReviewsAndMap() {

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://static.elfsight.com/platform/platform.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className={styles.heroVisual}>
      <div className={styles.heroCard}>
        <p className={styles.heroCardTitle}>Review dos nossos clientes</p>
        <div className="elfsight-app-a0eaff7b-f46c-4636-9d8c-c07f1faee9d9"
          data-elfsight-app-lazy></div>
        <p className={styles.heroCardP}>
          Empresa sob nova direção desde 2025. Compromisso renovado com a excelência.
        </p>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.0513226408939!2d-43.9051702546532!3d-19.60493264705501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69bd43cb50c0f%3A0xff1c20680a5f6d5e!2sF%C3%A1brica%20de%20Telas%20V%C3%AAnus!5e1!3m2!1spt-BR!2sbr!4v1752502110514!5m2!1spt-BR!2sbr" width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Telas Vênus"
        ></iframe>
      </div>
    </div>
  )
}