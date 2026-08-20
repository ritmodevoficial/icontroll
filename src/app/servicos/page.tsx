import Link from "next/link";
import "./servicos.css";

const plans = [
  {
    name: "Essencial",
    description: "Para profissionais e pequenos negócios.",
    price: "R$ 890",
    features: [
      "Site profissional",
      "Design responsivo",
      "Página inicial",
      "Seção de serviços",
      "Seção de contato",
      "Integração com WhatsApp",
      "Publicação do site",
    ],
  },
  {
    name: "Profissional",
    description:
      "Para empresas que querem uma presença digital mais completa.",
    price: "R$ 1.490",
    featured: true,
    features: [
      "Tudo do Essencial",
      "Mais páginas",
      "Portfólio",
      "Galeria de imagens",
      "Formulário de contato",
      "Melhor estrutura SEO",
      "Integrações simples",
    ],
  },
  {
    name: "Premium",
    description:
      "Para empresas que precisam de uma presença digital mais completa.",
    price: "R$ 2.290",
    features: [
      "Tudo do Profissional",
      "Mais páginas",
      "Catálogo simples",
      "Recursos personalizados",
      "Integrações adicionais",
      "Otimizações",
      "Estrutura personalizada",
    ],
  },
];

const extras = [
  {
    name: "Página adicional",
    description: "Adicione novas páginas ao seu site.",
    price: "R$ 150",
  },
  {
    name: "Landing Page",
    description: "Página criada para apresentar e divulgar uma oferta.",
    price: "R$ 350",
  },
  {
    name: "Catálogo simples",
    description: "Apresente seus produtos ou serviços de forma organizada.",
    price: "R$ 300",
  },
  {
    name: "Blog",
    description: "Publique conteúdos e informações para seus clientes.",
    price: "R$ 350",
  },
  {
    name: "Formulário avançado",
    description: "Formulários personalizados para necessidades específicas.",
    price: "R$ 200",
  },
  {
    name: "Integração simples",
    description: "Conecte seu site a ferramentas e serviços externos.",
    price: "R$ 300+",
  },
  {
    name: "Agendamento",
    description: "Permita que seus clientes solicitem horários online.",
    price: "R$ 500+",
  },
  {
    name: "Área administrativa",
    description: "Gerencie conteúdos e informações através de um painel.",
    price: "R$ 800+",
  },
];

export default function ServicosPage() {
  return (
    <main className="servicos-page">
      {/* HERO */}

      <section className="servicos-header">
        <div className="servicos-container">
          <span className="servicos-label">SERVIÇOS</span>

          <h1>
            Escolha o plano ideal
            <br />
            para o seu negócio
          </h1>

          <p>
            Sites profissionais, responsivos e preparados para apresentar
            sua empresa na internet.
          </p>
        </div>
      </section>

      {/* PLANOS */}

      <section className="plans-section">
        <div className="servicos-container">
          <div className="plans-grid">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`plan-card ${
                  plan.featured ? "plan-card-featured" : ""
                }`}
              >
                {plan.featured && (
                  <div className="popular-badge">
                    MAIS ESCOLHIDO
                  </div>
                )}

                <div className="plan-content">
                  <h2>{plan.name}</h2>

                  <p className="plan-description">
                    {plan.description}
                  </p>

                  <div className="plan-price">
                    {plan.price}
                  </div>

                  <div className="plan-divider" />

                  <ul className="plan-features">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <span className="check-icon">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contato"
                  className="plan-button"
                >
                  Quero este plano
                  <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS EXTRAS */}

      <section className="extras-section">
        <div className="servicos-container">
          <div className="extras-header">
            <span className="servicos-label">
              SERVIÇOS EXTRAS
            </span>

            <h2>Personalize seu projeto</h2>

            <p>
              Adicione recursos ao seu site de acordo com as
              necessidades do seu negócio.
            </p>
          </div>

          <div className="extras-grid">
            {extras.map((extra) => (
              <article
                key={extra.name}
                className="extra-card"
              >
                <div className="extra-icon">
                  +
                </div>

                <div className="extra-content">
                  <h3>{extra.name}</h3>

                  <p>{extra.description}</p>

                  <strong>{extra.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="services-cta">
        <div className="servicos-container">
          <div className="cta-content">
            <span className="servicos-label">
              PROJETO PERSONALIZADO
            </span>

            <h2>
              Precisa de algo
              <br />
              diferente?
            </h2>

            <p>
              Entre em contato e vamos analisar seu projeto
              para encontrar a melhor solução para o seu negócio.
            </p>

            <Link
              href="/contato"
              className="cta-button"
            >
              Solicitar orçamento
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}