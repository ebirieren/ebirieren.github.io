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




          <p className="document-code">Education</p>

          <div className="header-line" />

        <section className="education-section">


          <div className="education-row">


            <div className="school-name">
              <p>
                Istanbul Arel University
              </p>
            </div>
            
            <p>•</p>

            <div className="department">
              <p>
                Computer Engineering (English)
              </p>
            </div>

            <p>•</p>

            <div className="date">
              <p>
                September 2022 - July 2026
              </p>
            </div>

          </div>

          <div className="enclosed-info">
              <p>-{" "}
              <strong className="certificate-caption">Honor Certificate:</strong>{" "}
              Final-year GPA above 3.00/4.00, 2026.{" "}
              <a href="https://turkiye.gov.tr/ebd?eK=6533&eD=BSCBHLTBZC&eS=811587">Verify the certificate</a>
              </p>
          </div>

        
          <div className="education-row">


            <div className="school-name">
              <p>
                Istanbul Arel University
              </p>
            </div>
            
            <p>•</p>

            <div className="department">
              <p>
                English Prep
              </p>
            </div>

            <p>•</p>

            <div className="date">
              <p>
                September 2021 - June 2022
              </p>
            </div>

          </div>

        </section>

        <p className="document-code">Experience</p>

        <div className="header-line" />
        
        <section className="experience-section">

          <div className="company-name">
          <p>Econtech Bilişim A.Ş.</p>
          </div>

          <div className="company-info">
            <div className="role">
            <p>Full-Stack Developer</p>
            </div>
            <p>•</p>
            <div className="date">
            <p>April 2026 - September 2026</p>
            </div>
          </div>

          <div className="summary">
              <p>•{" "}

              Developed the backend data-collection infrastructure using Python, Playwright, and
              MongoDB. Extracted and processed official Trade Registry Gazette data to support company risk
              assessment workflows.

              </p>

              <p>•{" "}

              Designed concurrent workers, proxy rotation, checkpoint recovery, retry handling, and distributed
              deployment across Hetzner servers, improving the reliability of large-scale scraping operations.

              </p>

              <p>•{" "}

              Developed an end-to-end test automation framework for REM V3 using Playwright and TypeScript,
              validating UI workflows and data consistency between the V2 and V3 systems.
              </p>
          </div>
        </section>

        <p className="document-code">Projects</p>

        <div className="header-line" />

        <section className="projects-section">
          <div className="resume-project">
          <div className="project-name">
          <p>Billing and Branch System for Small Businesses</p>
          </div>
          <div className="summary">
          <p>
            •{" "}
            Developed a RESTful backend using ASP.NET Core and a layered architecture to manage branches,
            products, inventory, invoices, and stock transactions. Applied service and repository patterns, dependency
            injection, DTOs, and asynchronous CRUD operations.
          </p>
          <p>
            •{" "}
            Designed the PostgreSQL data layer using Entity Framework Core, including entity relationships,
            migrations, and query implementations. Implemented stock allocation, inventory validation and updates,
            transaction tracking, tax-inclusive price calculations, and OpenAPI/Swagger documentation.
          </p>
          </div>
          </div>

          <div className="resume-project">
          <div className="project-name">
          <p>AI-Based Behavioral Drift Detection for Retail Traders</p>
          </div>
          <div className="summary">
          <p>
            •{" "}
            Developed an AI-based anomaly detection system that identifies behavioral performance drifts in retail
            traders using transaction and journaling data. Built a machine learning pipeline and interactive dashboard
            for monitoring trading behavior.
          </p>
          </div>
          </div>

          <div className="header-line" />


        </section>
            <p className="subtitle" id="communicate">
              Hi there, if you have an idea that may save the world you can communicate with me via these channels:
            </p>

          <div className="contact-channels">
            <a
              href="mailto:ebirieren@gmail.com"
              className="contact-channel email-channel"
              aria-label="Send me an email"
              title="Gmail"
            >
              <svg
                viewBox="0 0 24 24"
                className="channel-icon mail-icon"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/ebirieren"
              className="contact-channel linkedin-channel"
              aria-label="Visit my LinkedIn profile"
              title="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                className="channel-icon linkedin-icon"
                aria-hidden="true"
              >
                <path d="M5.32 7.43a2.06 2.06 0 1 0 0-4.12 2.06 2.06 0 0 0 0 4.12ZM3.54 20.45H7.1V9H3.54v11.45ZM9.34 9v11.45h3.56v-5.67c0-1.49.29-2.94 2.14-2.94 1.82 0 1.85 1.71 1.85 3.04v5.57h3.56v-6.28c0-3.09-.67-5.46-4.27-5.46-1.73 0-2.89.95-3.37 1.85h-.05V9H9.34Z" />
              </svg>
            </a>
          </div>

        </header>


        <footer>
          <span>EREN EBIRI · 2026</span>
        </footer>
      </article>


      <a
        href="#communicate"
        className="communication-button"
        aria-label="Go to communication section"
      >
        <svg
          viewBox="0 0 24 24"
          className="communication-icon"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </a>
    </main>
  );
}

export default App;