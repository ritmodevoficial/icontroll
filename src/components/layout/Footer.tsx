import Link from "next/link";
import styles from "./Footer.module.css";

const whatsappNumber = "5537998202975";

const whatsappMessage =
  "Olá, Ismael! Gostaria de solicitar um orçamento para um site.";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.main}>
          {/* MARCA */}
          <div className={styles.brand}>
            <Link
              href="/inicio"
              className={styles.logo}
              aria-label="iControll - Página inicial"
            >
              <span className={styles.logoMark} aria-hidden="true">
                i
              </span>

              <span className={styles.logoName}>iControll</span>
            </Link>

            <p className={styles.description}>
              Sites e sistemas feitos para o seu negócio.
            </p>
          </div>

          {/* CONTATO */}
          <div className={styles.contact}>
            <h2 className={styles.title}>Contato</h2>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              WhatsApp
              <span>(37) 99820-2975</span>
            </a>

            <div className={styles.email}>
              <span>E-mail</span>
              <span>A definir</span>
            </div>
          </div>
        </div>

        {/* RODAPÉ INFERIOR */}
        <div className={styles.bottom}>
          <p>© 2026 iControll. Todos os direitos reservados.</p>

          <p>Sites e sistemas feitos para o seu negócio.</p>
        </div>
      </div>
    </footer>
  );
}