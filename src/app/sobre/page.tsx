import Link from "next/link";
import "./sobre.css";

const principles = [
  {
    number: "01",
    icon: "◆",
    title: "Soluções sob medida",
    description:
      "Cada projeto é pensado de acordo com a realidade, os objetivos e os processos de cada empresa.",
  },
  {
    number: "02",
    icon: "↗",
    title: "Tecnologia útil",
    description:
      "Utilizamos tecnologia para resolver problemas reais, melhorar processos e gerar resultados.",
  },
  {
    number: "03",
    icon: "⌘",
    title: "Experiência simples",
    description:
      "Criamos soluções modernas, organizadas e fáceis de utilizar no dia a dia.",
  },
  {
    number: "04",
    icon: "+",
    title: "Evolução contínua",
    description:
      "Pensamos em soluções preparadas para acompanhar o crescimento e as novas necessidades do negócio.",
  },
];

const commitments = [
  {
    number: "01",
    icon: "✓",
    title: "Clareza",
    description:
      "Comunicação simples e transparente durante todas as etapas do projeto.",
  },
  {
    number: "02",
    icon: "↗",
    title: "Eficiência",
    description:
      "Buscamos sempre maneiras melhores de organizar processos e utilizar tecnologia.",
  },
  {
    number: "03",
    icon: "◌",
    title: "Qualidade",
    description:
      "Desenvolvemos projetos com atenção aos detalhes, desempenho e experiência.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Entender",
    description: "Conhecemos o problema antes de propor a solução.",
  },
  {
    number: "02",
    title: "Planejar",
    description: "Estruturamos a solução de forma clara e objetiva.",
  },
  {
    number: "03",
    title: "Desenvolver",
    description: "Transformamos a ideia em uma solução funcional.",
  },
  {
    number: "04",
    title: "Evoluir",
    description: "Acompanhamos a solução para que ela continue útil.",
  },
];

export default function SobrePage() {
  return (
    <main className="sobre-page">

      {/* HERO */}

      <section className="sobre-hero">
        <div className="sobre-container">
          <div className="sobre-hero-grid">

            <div className="sobre-hero-content">

              <span className="sobre-label">
                SOBRE A ICONTROLL
              </span>

              <h1>
                Tecnologia para
                <br />
                <span>transformar negócios.</span>
              </h1>

              <p>
                A iControll desenvolve sites, sistemas e soluções
                digitais para empresas que querem utilizar a
                tecnologia de forma prática, moderna e estratégica.
              </p>

              <div className="sobre-hero-buttons">

                <Link
                  href="/contato"
                  className="sobre-primary-button"
                >
                  Falar sobre um projeto
                  <span>→</span>
                </Link>

                <a
                  href="#quem-somos"
                  className="sobre-secondary-button"
                >
                  Conhecer a iControll
                  <span>↓</span>
                </a>

              </div>

            </div>

            {/* PAINEL VISUAL */}

            <div className="sobre-visual">

              <div className="visual-glow" />

              <div className="visual-card-main">

                <div className="visual-logo">
                  <span>i</span>
                  Controll
                </div>

                <div className="visual-line" />

                <h3>
                  Tecnologia em
                  <br />
                  movimento.
                </h3>

                <p>
                  Sites, sistemas e soluções
                  desenvolvidas para empresas.
                </p>

              </div>

              <div className="visual-floating visual-floating-top">
                <span>+</span>
                <div>
                  <strong>Soluções digitais</strong>
                  <small>para negócios</small>
                </div>
              </div>

              <div className="visual-floating visual-floating-bottom">
                <span>✓</span>
                <div>
                  <strong>Projetos sob medida</strong>
                  <small>pensados para cada empresa</small>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* QUEM SOMOS */}

      <section
        className="about-section"
        id="quem-somos"
      >

        <div className="sobre-container">

          <div className="about-grid">

            <div className="about-heading">

              <span className="sobre-label">
                QUEM SOMOS
              </span>

              <h2>
                Tecnologia deve
                <br />
                <span>resolver problemas.</span>
              </h2>

            </div>

            <div className="about-content">

              <p className="about-lead">
                A iControll nasceu com um objetivo simples:
                tornar a tecnologia mais acessível e útil para
                empresas que precisam melhorar sua presença
                digital ou seus processos.
              </p>

              <div className="about-highlight">

                <div className="highlight-number">
                  01
                </div>

                <div>
                  <h3>
                    Mais do que desenvolver,
                    buscamos entender.
                  </h3>

                  <p>
                    Antes de pensar em tecnologia, buscamos
                    compreender o problema. Entender como a
                    empresa funciona permite construir uma
                    solução realmente adequada às suas
                    necessidades.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* OBJETIVO */}

      <section className="objective-section">

        <div className="sobre-container">

          <div className="objective-card">

            <div className="objective-icon">
              ◆
            </div>

            <div className="objective-content">

              <span>
                NOSSO OBJETIVO
              </span>

              <h2>
                Transformar necessidades
                <br />
                em soluções digitais.
              </h2>

              <p>
                Seja um site profissional, um sistema
                personalizado ou uma automação, cada projeto
                deve gerar valor para o negócio.
              </p>

            </div>

            <div className="objective-arrow">
              ↗
            </div>

          </div>

        </div>

      </section>


      {/* FORMA DE TRABALHAR */}

      <section className="workflow-section">

        <div className="sobre-container">

          <div className="section-heading-centered">

            <span className="sobre-label">
              NOSSA FORMA DE TRABALHAR
            </span>

            <h2>
              Simples na ideia.
              <br />
              <span>Profissional na execução.</span>
            </h2>

          </div>

          <div className="workflow-grid">

            {workflow.map((item) => (

              <article
                className="workflow-card"
                key={item.number}
              >

                <div className="workflow-top">

                  <span className="workflow-number">
                    {item.number}
                  </span>

                  <span className="workflow-arrow">
                    →
                  </span>

                </div>

                <div className="workflow-bottom">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* PRINCÍPIOS */}

      <section className="principles-section">

        <div className="sobre-container">

          <div className="principles-heading">

            <div>

              <span className="sobre-label">
                O QUE NOS GUIA
              </span>

              <h2>
                Princípios que fazem
                <br />
                parte de cada projeto.
              </h2>

            </div>

            <p>
              Nosso trabalho é baseado em princípios que
              ajudam a manter cada projeto simples, eficiente
              e alinhado aos objetivos do cliente.
            </p>

          </div>


          <div className="principles-grid">

            {principles.map((item) => (

              <article
                className="principle-card"
                key={item.number}
              >

                <div className="principle-header">

                  <span>
                    {item.number}
                  </span>

                  <div className="principle-icon">
                    {item.icon}
                  </div>

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

                <div className="principle-footer">
                  <span>iControll</span>
                  <span>→</span>
                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* COMPROMISSO */}

      <section className="commitment-section">

        <div className="sobre-container">

          <div className="commitment-card">

            <div className="commitment-heading">

              <span className="sobre-label">
                NOSSO COMPROMISSO
              </span>

              <h2>
                Uma parceria,
                <br />
                não apenas um projeto.
              </h2>

              <p>
                Acreditamos que bons resultados acontecem
                quando existe proximidade, comunicação e
                entendimento entre quem desenvolve e quem
                utiliza a solução.
              </p>

            </div>


            <div className="commitment-list">

              {commitments.map((item) => (

                <div
                  className="commitment-item"
                  key={item.number}
                >

                  <div className="commitment-icon">
                    {item.icon}
                  </div>

                  <div className="commitment-number">
                    {item.number}
                  </div>

                  <div className="commitment-text">

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="sobre-cta">

        <div className="sobre-container">

          <div className="sobre-cta-card">

            <div className="cta-decoration">
              i
            </div>

            <div className="sobre-cta-content">

              <span className="sobre-label">
                VAMOS CONVERSAR
              </span>

              <h2>
                Tem uma ideia ou
                <br />
                um problema para resolver?
              </h2>

              <p>
                Conte o que sua empresa precisa. Vamos entender
                o cenário e encontrar uma solução que faça sentido
                para o seu negócio.
              </p>

              <Link
                href="/contato"
                className="sobre-cta-button"
              >
                Falar sobre meu projeto
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}