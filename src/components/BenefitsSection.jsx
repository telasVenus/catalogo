import { useEffect } from "react";
import styles from "./BenefitsSection.module.css";

const benefits = [
  {
    icon: "fas fa-certificate",
    title: "Qualidade certificada",
    desc: "Produtos de alta qualidade",
  },
  {
    icon: "fas fa-calculator",
    title: "Orçamento Gratuito",
    desc: "Orçamento sem custo e sem compromisso",
  },
  {
    icon: "fas fa-credit-card",
    title: "Facilidade de pagamento",
    desc: "Parcelamo no cartão e aceitamos PIX",
  },
];

export default function BenefitsSection() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    });

    document.querySelectorAll(`.${styles.benefitItem}`).forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.benefits}>
      <div className={styles.benefitsContainer}>
        <div className={styles.sectionTitle}>
          <h2>
            Por que escolher a <br />
            <span>Telas Vênus</span>?
          </h2>
          <p>Soluções inovadoras e personalizadas para o seu projeto</p>
        </div>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div className={styles.benefitItem} key={index}>
              <div className={styles.benefitIcon}>
                <i className={benefit.icon}></i>
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
