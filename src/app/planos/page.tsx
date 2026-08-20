import Link from "next/link";
import "./planos.css";

const plans = [
  {
    name: "Essencial",
    description:
      "Para quem precisa manter o site funcionando com segurança e estabilidade.",
    price: "R$ 89/mês",
    features: [
      "Manutenção do site",
      "Correções de pequenos problemas",
      "Atualizações básicas",
      "Monitoramento básico",
      "Suporte",
    ],
  },
  {
    name: "Profissional",
    description:
      "Para empresas que querem acompanhamento e evolução contínua do site.",
    price: "R$ 149/mês",
    featured: true,
    features: [
      "Tudo do Essencial",
      "Atualizações de conteúdo",
      "Melhorias no site",
      "Monitoramento contínuo",
      "Otimizações básicas",
      "Suporte prioritário",
    ],
  },
  {
    name: "Premium",
    description:
      "Para empresas que precisam de um acompanhamento mais completo.",
    price: "R$ 249/mês",
    features: [
      "Tudo do Profissional",
      "Alterações frequentes",
      "Otimizações avançadas",
      "Acompanhamento contínuo",
      "Suporte prioritário",
      "Evolução do projeto",
    ],
  },
];

const maintenanceServices = [
  {
    number: "01",
    icon: "✓",
    title: "Segurança e estabilidade",
    description:
      "Mantemos seu site atualizado e acompanhamos seu funcionamento para reduzir problemas e indisponibilidades.",
  },
  {
    number: "02",
    icon: "↗",
    title: "Melhorias contínuas",
    description:
      "Seu site pode evoluir junto com sua empresa, recebendo ajustes e melhorias conforme novas necessidades surgirem.",
  },
  {
    number: "03",
    icon: "＋",
    title: "Conteúdo atualizado",
    description:
      "Faça alterações em informações, textos e conteúdos do site sem precisar se preocupar com a parte técnica.",
  },
  {
    number: "04",
    icon: "◌",
    title: "Suporte quando precisar",
    description:
      "Conte com acompanhamento para solucionar problemas e orientar as próximas melhorias do seu projeto.",
  },
];

const benefits = [
  {
    icon: "✓",
    title: "Site funcionando",
    description:
      "Acompanhamento para identificar e corrigir problemas técnicos.",
  },
  {
    icon: "↻",
    title: "Atualizações",
    description:
      "Alterações e atualizações para manter seu projeto sempre atual.",
  },
  {
    icon: "↗",
    title: "Evolução",
    description:
      "Seu site pode crescer junto com as necessidades da sua empresa.",
  },
];

export default function PlanosPage() {
  return (
    <main className="planos-page">

      {/* HERO */}

      <section className="planos-header">
        <div className="planos-container">

          <span className="planos-label">
            PLANOS DE MANUTENÇÃO
          </span>

          <h1>
            Seu site continua
            <br />
            <strong>evoluindo.</strong>
          </h1>

          <p>
            Depois da publicação, sua empresa ainda pode contar
            com acompanhamento para manter o site funcionando,
            atualizado e preparado para novas necessidades.
          </p>

        </div>
      </section>


      {/* PLANOS */}

      <section className="plans-section">

        <div className="planos-container">

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

                        <span className="check-icon">
                          ✓
                        </span>

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


      {/* MANUTENÇÃO */}

      <section className="maintenance-section">

        <div className="planos-container">

          <div className="maintenance-heading">

            <div>

              <span className="planos-label">
                MANUTENÇÃO
              </span>

              <h2>
                Mais tranquilidade
                <br />
                para sua empresa.
              </h2>

            </div>

            <p>
              Você cuida do seu negócio enquanto nós
              cuidamos da parte técnica do seu site.
            </p>

          </div>


          <div className="maintenance-grid">

            {maintenanceServices.map((service) => (
              <article
                key={service.number}
                className="maintenance-card"
              >

                <div className="maintenance-top">

                  <span className="maintenance-number">
                    {service.number}
                  </span>

                  <span className="maintenance-icon">
                    {service.icon}
                  </span>

                </div>

                <div className="maintenance-card-content">

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* ACOMPANHAMENTO */}

      <section className="support-section">

        <div className="planos-container">

          <div className="support-box">

            <div className="support-intro">

              <span className="planos-label">
                ACOMPANHAMENTO
              </span>

              <h2>
                Seu site não precisa
                <br />
                ficar parado.
              </h2>

              <p>
                Conforme sua empresa cresce, novas necessidades
                aparecem. A manutenção permite que seu site
                acompanhe essa evolução.
              </p>

              <Link
                href="/contato"
                className="support-button"
              >
                Falar sobre meu projeto
                <span>→</span>
              </Link>

            </div>


            <div className="benefits-list">

              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="benefit-item"
                >

                  <div className="benefit-icon">
                    {benefit.icon}
                  </div>

                  <div>

                    <h3>
                      {benefit.title}
                    </h3>

                    <p>
                      {benefit.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="plans-cta">

        <div className="planos-container">

          <div className="cta-content">

            <span className="cta-label">
              PROJETO PERSONALIZADO
            </span>

            <h2>
              Precisa de algo
              <br />
              diferente?
            </h2>

            <p>
              Entre em contato e vamos analisar o que
              sua empresa precisa.
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