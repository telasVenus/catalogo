import { useEffect } from "react";
import styles from "./ProductsSection.module.css";

function openCatalog() {
  window.open(
    "https://drive.google.com/file/d/1E1PUkDrif9ILFsHvqvuTALbdH0-cTZ8i/view?usp=sharing",
    "_blank",
  );
}

const products = [
  {
    icon: "fas fa-home",
    title: "Tela Alambrado",
    desc: "Perfeita para delimitar terrenos residenciais e comerciais. Resistente e durável.",
  },
  {
    icon: "fas fa-wave-square",
    title: "Tela Ondulada",
    desc: "Ideal para cercas decorativas e divisórias. Combina segurança com beleza.",
  },
  {
    icon: "fas fa-th-large",
    title: "Tela Soldada",
    desc: "Máxima resistência para projetos que exigem segurança reforçada.",
  },
  {
    icon: "fas fa-egg",
    title: "Tela Galinheiro",
    desc: "Especial para criação de aves e pequenos animais. Malha adequada e segura.",
  },
  {
    icon: "fas fa-grip-horizontal",
    title: "Tela Pinteiro",
    desc: "Proteção para criação de pintinhos e aves pequenas. Malha fina e resistente.",
  },
  {
    icon: "fas fa-plus",
    title: "Outros Produtos",
    desc: "Tela peneira, fachadeiro, tapume, entre outros.",
    action: openCatalog,
  },
];

export default function ProductsSection() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    });

    document.querySelectorAll(`.${styles.productCard}`).forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.products}>
      <div className={styles.productsContainer}>
        <div className={styles.sectionTitle}>
          <h2>Nossos Produtos</h2>
          <p>
            Soluções completas em telas e arames para todos os tipos de projeto
          </p>
        </div>

        <div className={styles.productsGrid}>
          {products.map((product, index) => (
            <div className={styles.productCard} key={index}>
              <div className={styles.productIcon}>
                {product.action ? (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      product.action();
                    }}
                  >
                    <i className={product.icon}></i>
                  </a>
                ) : (
                  <i className={product.icon}></i>
                )}
              </div>
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <a
            href="#"
            className={styles.btnPrimary}
            onClick={(e) => {
              e.preventDefault();
              openCatalog();
            }}
          >
            <i className="fas fa-eye"></i>
            Ver Todos os Produtos
          </a>
        </div>
      </div>
    </section>
  );
}
