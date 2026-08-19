export default function Home() {
  return (
    <main>
      <section className="container" style={{ paddingBlock: "6rem" }}>
        <div style={{ maxWidth: "760px" }}>
          <span
            className="text-primary"
            style={{
              display: "inline-block",
              marginBottom: "1rem",
              fontSize: "0.875rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            iControll
          </span>

          <h1 className="heading-1">
            Sites e sistemas feitos para o seu negócio.
          </h1>

          <p
            className="text-lead"
            style={{
              maxWidth: "680px",
              marginTop: "1.5rem",
            }}
          >
            Desenvolvemos sites profissionais e sistemas personalizados para
            ajudar empresas a apresentar seus serviços, organizar processos e
            crescer no digital.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginTop: "2rem",
            }}
          >
            <button className="button button-primary">
              Solicitar orçamento
            </button>

            <button className="button button-secondary">
              Conhecer nossos sistemas
            </button>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
            marginTop: "4rem",
          }}
        >
          <article className="card">
            <h2 className="heading-3">Sites profissionais</h2>

            <p
              className="text-secondary"
              style={{ marginTop: "0.75rem" }}
            >
              Sites modernos, responsivos e preparados para apresentar sua
              empresa na internet.
            </p>
          </article>

          <article className="card">
            <h2 className="heading-3">Sistemas personalizados</h2>

            <p
              className="text-secondary"
              style={{ marginTop: "0.75rem" }}
            >
              Soluções desenvolvidas de acordo com os processos e necessidades
              do seu negócio.
            </p>
          </article>

          <article className="card">
            <h2 className="heading-3">Automação e integrações</h2>

            <p
              className="text-secondary"
              style={{ marginTop: "0.75rem" }}
            >
              Conecte ferramentas e simplifique tarefas repetitivas.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}