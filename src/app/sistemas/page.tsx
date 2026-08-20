import Link from "next/link";
import "./sistemas.css";

const solutions = [
  {
    number: "01",
    icon: "▦",
    title: "Sistemas personalizados",
    description:
      "Desenvolvemos sistemas sob medida para organizar informações, processos e operações de acordo com a realidade da sua empresa.",
    features: [
      "Desenvolvimento sob medida",
      "Controle de usuários e acessos",
      "Banco de dados",
      "Interface moderna",
    ],
  },
  {
    number: "02",
    icon: "↗",
    title: "Automação de processos",
    description:
      "Transforme tarefas repetitivas em processos mais rápidos e eficientes, reduzindo trabalho manual e possíveis erros.",
    features: [
      "Automação de tarefas",
      "Integração entre sistemas",
      "Redução de processos manuais",
      "Maior produtividade",
    ],
  },
  {
    number: "03",
    icon: "⌘",
    title: "Integrações",
    description:
      "Conectamos ferramentas e sistemas para que as informações possam circular de forma mais organizada dentro da sua operação.",
    features: [
      "Integração com APIs",
      "Sistemas externos",
      "Compartilhamento de dados",
      "Processos conectados",
    ],
  },
];

const benefits = [
  {
    number: "01",
    icon: "✓",
    title: "Controle e organização",
    description:
      "Centralize informações importantes e tenha mais controle sobre os processos da sua empresa.",
  },
  {
    number: "02",
    icon: "↗",
    title: "Processos mais eficientes",
    description:
      "Reduza tarefas repetitivas e torne as operações mais rápidas e organizadas.",
  },
  {
    number: "03",
    icon: "◌",
    title: "Acesso personalizado",
    description:
      "Defina usuários, permissões e níveis de acesso de acordo com a estrutura da empresa.",
  },
  {
    number: "04",
    icon: "+",
    title: "Preparado para crescer",
    description:
      "Criamos soluções pensando não apenas no problema atual, mas também na evolução do negócio.",
  },
];

const process = [
  {
    number: "01",
    title: "Entendemos o problema",
    description:
      "Conhecemos sua empresa, seus processos e identificamos onde a tecnologia pode gerar resultados.",
  },
  {
    number: "02",
    title: "Definimos a solução",
    description:
      "Estruturamos as funcionalidades e definimos a melhor abordagem para o projeto.",
  },
  {
    number: "03",
    title: "Desenvolvemos",
    description:
      "Transformamos o planejamento em um sistema funcional, moderno e preparado para crescer.",
  },
  {
    number: "04",
    title: "Colocamos em funcionamento",
    description:
      "Entregamos a solução e acompanhamos sua utilização para garantir uma boa experiência.",
  },
];

export default function SistemasPage() {
  return (
    <main className="sistemas-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="sistemas-hero">
        <div className="sistemas-container">
          <div className="hero-grid">

            <div className="hero-content">

              <span className="sistemas-label">
                SISTEMAS PERSONALIZADOS
              </span>

              <h1>
                Tecnologia criada
                <br />
                <span>para o seu negócio.</span>
              </h1>

              <p>
                Desenvolvemos sistemas e soluções digitais sob medida
                para empresas que precisam organizar processos,
                automatizar tarefas e ter mais controle sobre suas
                operações.
              </p>

              <div className="hero-actions">

                <Link
                  href="/contato"
                  className="primary-button"
                >
                  Falar sobre meu projeto
                  <span>→</span>
                </Link>

                <a
                  href="#solucoes"
                  className="secondary-button"
                >
                  Conhecer soluções
                  <span>↓</span>
                </a>

              </div>

            </div>


            {/* PAINEL VISUAL */}

            <div className="hero-visual">

              <div className="visual-window">

                <div className="window-header">

                  <div className="window-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="window-title">
                    iControll / sistema
                  </div>

                </div>


                <div className="dashboard-preview">

                  <div className="dashboard-top">

                    <div>
                      <small>
                        VISÃO GERAL
                      </small>

                      <strong>
                        Controle simplificado
                      </strong>
                    </div>

                    <div className="dashboard-status">
                      ● Online
                    </div>

                  </div>


                  <div className="dashboard-cards">

                    <div className="mini-card">
                      <span>Processos</span>
                      <strong>124</strong>
                      <small>+18% este mês</small>
                    </div>

                    <div className="mini-card">
                      <span>Automatizados</span>
                      <strong>86%</strong>
                      <small>Mais eficiência</small>
                    </div>

                  </div>


                  <div className="chart-card">

                    <div className="chart-label">
                      Eficiência operacional
                    </div>

                    <div className="chart">
                      <span className="chart-line" />
                      <span className="chart-point point-1" />
                      <span className="chart-point point-2" />
                      <span className="chart-point point-3" />
                      <span className="chart-point point-4" />
                    </div>

                  </div>


                  <div className="floating-card">

                    <div className="floating-icon">
                      ✓
                    </div>

                    <div>
                      <strong>
                        Processo concluído
                      </strong>

                      <span>
                        Automatização executada
                      </span>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          SOLUÇÕES
      ===================================================== */}

      <section
        id="solucoes"
        className="solutions-section"
      >

        <div className="sistemas-container">

          <div className="section-heading">

            <div>
              <span className="sistemas-label">
                O QUE DESENVOLVEMOS
              </span>

              <h2>
                Soluções pensadas
                <br />
                para sua operação.
              </h2>
            </div>

            <p>
              Cada projeto é desenvolvido considerando os objetivos,
              processos e necessidades específicas da sua empresa.
            </p>

          </div>


          <div className="solutions-grid">

            {solutions.map((solution) => (

              <article
                key={solution.number}
                className="solution-card"
              >

                <div className="solution-top">

                  <span className="solution-number">
                    {solution.number}
                  </span>

                  <div className="solution-icon">
                    {solution.icon}
                  </div>

                </div>


                <div className="solution-content">

                  <h3>
                    {solution.title}
                  </h3>

                  <p>
                    {solution.description}
                  </p>

                </div>


                <ul className="solution-features">

                  {solution.features.map((feature) => (

                    <li key={feature}>

                      <span>
                        ✓
                      </span>

                      {feature}

                    </li>

                  ))}

                </ul>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          DESTAQUE
      ===================================================== */}

      <section className="custom-section">

        <div className="sistemas-container">

          <div className="custom-panel">

            <div className="custom-copy">

              <span className="sistemas-label">
                POR QUE UM SISTEMA PERSONALIZADO?
              </span>

              <h2>
                Seu negócio não precisa
                <br />
                <span>se adaptar ao sistema.</span>
              </h2>

              <p>
                A tecnologia deve se adaptar à forma como sua empresa
                trabalha. Por isso, desenvolvemos soluções de acordo
                com seus processos.
              </p>

              <Link
                href="/contato"
                className="panel-button"
              >
                Solicitar orçamento
                <span>→</span>
              </Link>

            </div>


            <div className="custom-stats">

              <div className="stat-box">

                <span className="stat-icon">
                  ✓
                </span>

                <strong>
                  Sob medida
                </strong>

                <p>
                  Solução construída de acordo com sua operação.
                </p>

              </div>


              <div className="stat-box">

                <span className="stat-icon">
                  ↗
                </span>

                <strong>
                  Mais eficiência
                </strong>

                <p>
                  Processos mais organizados e menos trabalho manual.
                </p>

              </div>


              <div className="stat-box">

                <span className="stat-icon">
                  ◌
                </span>

                <strong>
                  Mais controle
                </strong>

                <p>
                  Informações centralizadas e acessíveis.
                </p>

              </div>


              <div className="stat-box">

                <span className="stat-icon">
                  +
                </span>

                <strong>
                  Escalável
                </strong>

                <p>
                  Estrutura preparada para acompanhar seu crescimento.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESSO
      ===================================================== */}

      <section className="process-section">

        <div className="sistemas-container">

          <div className="process-heading">

            <span className="sistemas-label">
              COMO TRABALHAMOS
            </span>

            <h2>
              Do problema à solução.
            </h2>

            <p>
              Um processo simples e transparente para transformar
              uma necessidade da sua empresa em uma solução funcional.
            </p>

          </div>


          <div className="process-wrapper">

            <div className="process-line" />

            <div className="process-grid">

              {process.map((item) => (

                <article
                  key={item.number}
                  className="process-card"
                >

                  <div className="process-number">
                    {item.number}
                  </div>

                  <div className="process-icon">
                    {item.number === "01" && "⌕"}
                    {item.number === "02" && "◇"}
                    {item.number === "03" && "⌘"}
                    {item.number === "04" && "✓"}
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </article>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="systems-cta">

        <div className="sistemas-container">

          <div className="cta-panel">

            <div className="cta-decoration decoration-one" />
            <div className="cta-decoration decoration-two" />

            <div className="cta-content">

              <span className="cta-label">
                PROJETO PERSONALIZADO
              </span>

              <h2>
                Tem um processo que
                <br />
                <span>precisa ser melhorado?</span>
              </h2>

              <p>
                Conte o que sua empresa precisa. Vamos analisar
                o problema e encontrar uma solução adequada
                para o seu negócio.
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

        </div>

      </section>

    </main>
  );
}