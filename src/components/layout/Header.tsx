import Link from "next/link";
import styles from "./Header.module.css";

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

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
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

        <nav
          className={styles.desktopNavigation}
          aria-label="Navegação principal"
        >
          <ul className={styles.navigationList}>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button button-primary"
        >
          Solicitar orçamento
        </a>
      </div>
    </header>
  );
}