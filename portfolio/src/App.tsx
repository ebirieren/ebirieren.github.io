import "./App.css";

function App() {
  return (
    <main className="site-background">
      <article className="paper">
        <header className="paper-header">
          <div className="name-block">
            <p className="title">
                  Eren Ebiri
            </p>
            <p className="undertitle">
                Backend Engineer | .NET & C#
            </p>

            <p className="introduction">
            Computer Engineering graduate with hands-on experience developing backend
            applications using C#, .NET, ASP.NET Core, Entity Framework Core, and PostgreSQL. Experienced in
            RESTful API development, layered architecture, asynchronous programming, and dependency injection. 
            </p>
          </div>




          <div className="hero">
            <p className="document-code">PORTFOLIO 01</p>
            <div className="header-line" />
            <h1>
              Backend Developer
              <br />
              Building Software Systems
            </h1>

            <p className="subtitle">
              Computer engineer focused on .NET, ASP.NET Core,
              distributed systems and artificial intelligence.
            </p>

            <div className="actions">
              <a href="#projects" className="button button-primary">
                PROJECTS
              </a>

              <a href="#about" className="button button-secondary">
                ABOUT ME
              </a>
            </div>
          </div>
        </header>

        <section className="abstract" id="about">
          <h2>Abstract</h2>

          <p>
            I am a software developer focused on backend development using
            C#, .NET and ASP.NET Core. I enjoy designing APIs, working with
            databases, learning software architecture and building systems
            from first principles.
          </p>
        </section>

        <hr />

        <section className="document-section" id="projects">
          <div className="section-title">
            <span className="section-number">1.</span>
            <h2>Selected Projects</h2>
          </div>

          <p className="section-intro">
            Software engineering is learned by building real systems.
          </p>

          <div className="project">
            <div className="project-heading">
              <h3>Billing and Branch System</h3>
              <span>2026</span>
            </div>

            <p>
              RESTful backend developed with ASP.NET Core for managing
              branches, products, stock transactions and invoices.
            </p>

            <div className="tags">
              <span>C#</span>
              <span>ASP.NET Core</span>
              <span>EF Core</span>
              <span>PostgreSQL</span>
            </div>
          </div>

          <div className="project">
            <div className="project-heading">
              <h3>Tax Calculation System</h3>
              <span>2026</span>
            </div>

            <p>
              Event-driven tax calculation application using RabbitMQ,
              SignalR, PostgreSQL and ASP.NET Core.
            </p>

            <div className="tags">
              <span>.NET</span>
              <span>RabbitMQ</span>
              <span>SignalR</span>
              <span>React</span>
            </div>
          </div>
        </section>

        <hr />

        <section className="document-section">
          <div className="section-title">
            <span className="section-number">2.</span>
            <h2>Technical Focus</h2>
          </div>

          <p>
            My current focus is backend engineering, Clean Architecture,
            Domain-Driven Design, event-driven systems and modern .NET
            development.
          </p>
        </section>

        <footer>
          <span>EREN EBIRI · 2026</span>
        </footer>
      </article>
    </main>
  );
}

export default App;