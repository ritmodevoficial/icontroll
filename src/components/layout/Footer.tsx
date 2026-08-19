import Link from "next/link";
import styles from "./Footer.module.css";

const navigationItems = [
  { label: "Início", href: "/inicio" },
  { label: "Serviços", href: "/servicos" },
  { label: "Planos", href: "/planos" },
  { label: "Sistemas", href: "/sistemas" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

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
          <div className={styles.brand}>
            <Link
              href="/"
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

          <nav aria-label="Navegação do rodapé">
            <h2 className={styles.title}>Navegação</h2>

            <ul className={styles.navigationList}>
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

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

        <div className={styles.bottom}>
          <p>© 2026 iControll. Todos os direitos reservados.</p>

          <p>Sites e sistemas feitos para o seu negócio.</p>
        </div>
      </div>
    </footer>
  );
}