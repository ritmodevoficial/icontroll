import Link from "next/link";
import "./contato.css";

export default function ContatoPage() {
  const whatsapp =
    "https://wa.me/5537998202975?text=Ol%C3%A1%2C%20Ismael!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

  return (
    <main className="contato-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="contato-hero">

        <div className="contato-container">

          <div className="contato-hero-content">

            <span className="contato-label">
              CONTATO
            </span>

            <h1>
              Vamos transformar
              <br />
              sua ideia em <span>solução.</span>
            </h1>

            <p>
              Conte um pouco sobre o que sua empresa precisa.
              Vamos entender seu projeto e encontrar a melhor
              solução para o seu negócio.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          CONTATO PRINCIPAL
      ========================================= */}

      <section className="contato-section">

        <div className="contato-container">

          <div className="contato-grid">


            {/* =====================================
                INFORMAÇÕES
            ===================================== */}

            <div className="contato-info">

              <span className="contato-label">
                FALE CONOSCO
              </span>

              <h2>
                Conte o que
                <br />
                você precisa.
              </h2>

              <p className="contato-intro">
                Seja para criar um site, desenvolver um
                sistema ou automatizar um processo, estamos
                prontos para entender sua necessidade.
              </p>


              {/* WHATSAPP */}

              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card contact-card-primary"
              >

                <div className="contact-icon">
                  ↗
                </div>

                <div className="contact-card-content">

                  <span>
                    WHATSAPP
                  </span>

                  <strong>
                    (37) 99820-2975
                  </strong>

                  <p>
                    Fale diretamente conosco.
                  </p>

                </div>

                <div className="contact-arrow">
                  →
                </div>

              </a>


              {/* EMAIL */}

              <div className="contact-card">

                <div className="contact-icon">
                  @
                </div>

                <div className="contact-card-content">

                  <span>
                    E-MAIL
                  </span>

                  <strong>
                    A definir
                  </strong>

                  <p>
                    Canal de contato por e-mail.
                  </p>

                </div>

              </div>


              {/* HORÁRIO */}

              <div className="contact-extra">

                <div className="contact-extra-number">
                  01
                </div>

                <div>

                  <h3>
                    Atendimento personalizado
                  </h3>

                  <p>
                    Cada projeto começa com uma conversa
                    para entendermos exatamente o que sua
                    empresa precisa.
                  </p>

                </div>

              </div>

            </div>


            {/* =====================================
                FORMULÁRIO
            ===================================== */}

            <div className="contact-form-wrapper">

              <div className="form-header">

                <span>
                  SOLICITAR ORÇAMENTO
                </span>

                <h2>
                  Fale sobre seu projeto.
                </h2>

                <p>
                  Preencha as informações abaixo e
                  entraremos em contato para conversar
                  sobre sua necessidade.
                </p>

              </div>


              <form className="contact-form">

                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="nome">
                      Nome
                    </label>

                    <input
                      id="nome"
                      type="text"
                      placeholder="Seu nome"
                    />

                  </div>


                  <div className="form-group">

                    <label htmlFor="empresa">
                      Empresa
                    </label>

                    <input
                      id="empresa"
                      type="text"
                      placeholder="Nome da empresa"
                    />

                  </div>

                </div>


                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="telefone">
                      WhatsApp
                    </label>

                    <input
                      id="telefone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                    />

                  </div>


                  <div className="form-group">

                    <label htmlFor="email">
                      E-mail
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                    />

                  </div>

                </div>


                <div className="form-group">

                  <label htmlFor="servico">
                    O que você precisa?
                  </label>

                  <select id="servico">

                    <option value="">
                      Selecione uma opção
                    </option>

                    <option value="site">
                      Desenvolvimento de site
                    </option>

                    <option value="sistema">
                      Sistema personalizado
                    </option>

                    <option value="automacao">
                      Automação de processos
                    </option>

                    <option value="manutencao">
                      Manutenção de site
                    </option>

                    <option value="outro">
                      Outro projeto
                    </option>

                  </select>

                </div>


                <div className="form-group">

                  <label htmlFor="mensagem">
                    Sobre o projeto
                  </label>

                  <textarea
                    id="mensagem"
                    rows={6}
                    placeholder="Conte brevemente o que sua empresa precisa..."
                  />

                </div>


                <button
                  type="button"
                  className="form-button"
                >
                  Enviar solicitação
                  <span>→</span>
                </button>

                <p className="form-note">
                  Ao enviar, suas informações serão utilizadas
                  apenas para entrarmos em contato sobre seu projeto.
                </p>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          COMO PODEMOS AJUDAR
      ========================================= */}

      <section className="help-section">

        <div className="contato-container">

          <div className="help-header">

            <span className="contato-label">
              COMO PODEMOS AJUDAR
            </span>

            <h2>
              Um projeto pode começar
              <br />
              com uma simples conversa.
            </h2>

            <p>
              Você não precisa ter tudo definido.
              Podemos ajudar a transformar sua necessidade
              em uma solução clara.
            </p>

          </div>


          <div className="help-grid">


            <article className="help-card">

              <div className="help-number">
                01
              </div>

              <div className="help-icon">
                ◇
              </div>

              <h3>
                Sites profissionais
              </h3>

              <p>
                Criação de sites modernos, responsivos
                e preparados para apresentar sua empresa
                profissionalmente.
              </p>

              <Link href="/servicos">
                Conhecer serviços →
              </Link>

            </article>


            <article className="help-card">

              <div className="help-number">
                02
              </div>

              <div className="help-icon">
                ⌘
              </div>

              <h3>
                Sistemas personalizados
              </h3>

              <p>
                Sistemas desenvolvidos de acordo com
                os processos e necessidades específicas
                do seu negócio.
              </p>

              <Link href="/sistemas">
                Conhecer soluções →
              </Link>

            </article>


            <article className="help-card">

              <div className="help-number">
                03
              </div>

              <div className="help-icon">
                ↗
              </div>

              <h3>
                Automação
              </h3>

              <p>
                Automatize tarefas repetitivas e torne
                os processos da sua empresa mais rápidos
                e eficientes.
              </p>

              <Link href="/sistemas">
                Conhecer soluções →
              </Link>

            </article>

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}

      <section className="contato-cta">

        <div className="contato-container">

          <div className="cta-box">

            <div>

              <span className="contato-label">
                FALE COM A ICONTROLL
              </span>

              <h2>
                Tem uma ideia?
                <br />
                Vamos conversar.
              </h2>

            </div>


            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Falar pelo WhatsApp
              <span>→</span>
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}