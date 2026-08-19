import Link from "next/link";

interface LogoProps {
  href?: string;
  className?: string;
}

export default function Logo({
  href = "/",
  className = "",
}: LogoProps) {
  return (
    <Link
      href={href}
      className={`logo ${className}`}
      aria-label="iControll - Página inicial"
    >
      <span className="logo-mark" aria-hidden="true">
        i
      </span>

      <span className="logo-name">
        Controll
      </span>
    </Link>
  );
}