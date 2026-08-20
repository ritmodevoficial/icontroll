import Link from "next/link";
import "./inicio.css";

export default function InicioPage() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-label">
              <span className="hero-label-dot" />
              Tecnologia para o seu negócio
            </div>

            <h1>
              Sites e sistemas
              <br />
              <span>feitos para o seu negócio.</span>
            </h1>

            <p className="hero-description">
              Desenvolvemos soluções digitais modernas, profissionais e
              personalizadas para ajudar sua empresa a crescer, organizar
              processos e conquistar novos clientes.
            </p>

            <div className="hero-actions">
              <Link href="/contato" className="primary-button">
                Solicitar orçamento
                <span>→</span>
              </Link>

              <Link href="/servicos" className="secondary-button">
                Conhecer serviços
              </Link>
            </div>

            <div className="hero-trust">
              <div className="trust-item">
                <strong>100%</strong>
                <span>Personalizado</span>
              </div>

              <div className="trust-divider" />

              <div className="trust-item">
                <strong>Web</strong>
                <span>Responsivo</span>
              </div>

              <div className="trust-divider" />

              <div className="trust-item">
                <strong>Suporte</strong>
                <span>Próximo</span>
              </div>
            </div>
          </div>

          {/* VISUAL */}
          <div className="hero-visual">
            <div className="visual-glow" />

            <div className="dashboard-window">
              <div className="window-header">
                <div className="window-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span className="window-title">
                  iControll Dashboard
                </span>
              </div>

              <div className="dashboard-content">
                <div className="dashboard-sidebar">
                  <div className="sidebar-logo">
                    <span>i</span>
                  </div>

                  <div className="sidebar-line active" />
                  <div className="sidebar-line" />
                  <div className="sidebar-line" />
                  <div className="sidebar-line" />
                </div>

                <div className="dashboard-main">
                  <div className="dashboard-top">
                    <div>
                      <span>Visão geral</span>
                      <strong>Dashboard</strong>
                    </div>

                    <div className="dashboard-user" />
                  </div>

                  <div className="dashboard-cards">
                    <div className="dashboard-card">
                      <span>Projetos</span>
                      <strong>24</strong>
                      <small>+12% este mês</small>
                    </div>

                    <div className="dashboard-card">
                      <span>Clientes</span>
                      <strong>128</strong>
                      <small>+18% este mês</small>
                    </div>
                  </div>

                  <div className="chart-card">
                    <div className="chart-header">
                      <span>Desempenho</span>
                      <span>2026</span>
                    </div>

                    <div className="chart">
                      <div className="chart-bar bar-1" />
                      <div className="chart-bar bar-2" />
                      <div className="chart-bar bar-3" />
                      <div className="chart-bar bar-4" />
                      <div className="chart-bar bar-5" />
                      <div className="chart-bar bar-6" />
                      <div className="chart-bar bar-7" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-card floating-card-one">
              <div className="floating-icon">✓</div>

              <div>
                <strong>Projeto entregue</strong>
                <span>Dentro do prazo</span>
              </div>
            </div>

            <div className="floating-card floating-card-two">
              <span>+32%</span>
              <small>crescimento</small>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-section">
        <div className="section-container intro-grid">
          <div>
            <span className="section-label">
              Por que iControll?
            </span>

            <h2>
              Tecnologia que trabalha
              <br />
              <span>junto com você.</span>
            </h2>
          </div>

          <div className="intro-text">
            <p>
              Cada negócio possui desafios diferentes. Por isso, não
              acreditamos em soluções genéricas.
            </p>

            <p>
              Entendemos suas necessidades e desenvolvemos ferramentas
              digitais pensadas para tornar sua empresa mais profissional,
              eficiente e preparada para crescer.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="services-section">
        <div className="section-container">
          <div className="section-heading">
            <div>
              <span className="section-label">
                Nossas soluções
              </span>

              <h2>
                O que podemos fazer
                <br />
                <span>pela sua empresa.</span>
              </h2>
            </div>

            <Link href="/servicos" className="section-link">
              Ver todos os serviços →
            </Link>
          </div>

          <div className="services-grid">
            <article className="service-item">
              <span className="service-number">01</span>

              <div className="service-icon">⌘</div>

              <h3>Sites profissionais</h3>

              <p>
                Sites modernos e responsivos para apresentar sua empresa,
                seus serviços e conquistar novos clientes.
              </p>

              <Link href="/servicos">
                Conhecer serviço →
              </Link>
            </article>

            <article className="service-item featured">
              <span className="service-number">02</span>

              <div className="service-icon">▦</div>

              <h3>Sistemas personalizados</h3>

              <p>
                Sistemas desenvolvidos sob medida para organizar processos,
                informações e operações da sua empresa.
              </p>

              <Link href="/sistemas">
                Conhecer sistemas →
              </Link>
            </article>

            <article className="service-item">
              <span className="service-number">03</span>

              <div className="service-icon">↗</div>

              <h3>Automação</h3>

              <p>
                Automatize tarefas repetitivas, reduza erros e economize
                tempo para focar no que realmente importa.
              </p>

              <Link href="/servicos">
                Conhecer serviço →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <div className="section-container">
          <div className="cta-box">
            <div>
              <span className="section-label">
                Vamos conversar?
              </span>

              <h2>
                Seu próximo projeto
                <br />
                começa com uma ideia.
              </h2>

              <p>
                Conte-nos o que você precisa e descubra como a iControll
                pode transformar sua ideia em uma solução digital.
              </p>
            </div>

            <Link href="/contato" className="primary-button">
              Falar com a iControll
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}