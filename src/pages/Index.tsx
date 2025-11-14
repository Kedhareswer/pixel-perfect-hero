import { ArrowUpRight } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.jpg";

const Index = () => {
  return (
    <div className="landing-page">
      <section className="landing-hero">
        <div className="landing-section__container">
          <header className="landing-header">
            <div className="landing-tags">
              {["The Brand", "Paucek and Lage"].map((label) => (
                <button key={label} className="landing-tag">
                  <ArrowUpRight className="landing-tag__icon" />
                  {label}
                </button>
              ))}
            </div>

            <span className="landing-year">2024</span>
          </header>

          <div className="landing-hero__grid">
            <div className="landing-hero__text">
              <p>
                Presentations are communication tools that can be used as demonstrations, lectures, speeches, reports, and more. It is
                mostly presented before an audience.
              </p>
            </div>

            <div className="landing-hero__title">
              <span>PRODUCT</span>
              <span>PHOTOGRAPHY</span>
            </div>
          </div>

          <div className="landing-hero__media">
            <div className="landing-hero__image">
              <img src={heroPhoto} alt="Product photography showcase" />
              <span className="landing-hero__badge">
                <ArrowUpRight />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-creative">
        <div className="landing-section__container">
          <header className="landing-creative__header">
            <div className="landing-creative__tags">
              {["Paucek and Lage", "Presentation"].map((label) => (
                <button key={label} className="landing-creative__tag">
                  <ArrowUpRight className="landing-creative__tag-icon" />
                  {label}
                </button>
              ))}
            </div>

            <div className="landing-creative__sparkles" aria-hidden="true">
              <span>✶</span>
              <span>✶</span>
              <span>✶</span>
            </div>
          </header>

          <div className="landing-creative__body">
            <div className="landing-creative__title">
              <span>CREATIVE</span>
              <span>BRIEF</span>
            </div>

            <div className="landing-creative__image">
              <div className="landing-creative__image-inner">
                <img src={heroPhoto} alt="Creative brief collaboration" />
                <span className="landing-creative__badge">
                  <ArrowUpRight />
                </span>
              </div>
            </div>

            <div className="landing-creative__copy">
              <p>
                Presentations serve as versatile communication tools, utilized for demonstrations, lectures, speeches, reports, and
                more. Typically delivered before an audience, they fulfill various purposes, making presentations powerful tools for both
                persuasion and education.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="landing-section__container">
          <div className="timeline-shell">
            <header className="timeline-nav">
              <div className="timeline-tags">
                {["Timelines", "Paucek and Lage"].map((label) => (
                  <button key={label} className="timeline-tag">
                    <ArrowUpRight className="timeline-tag__icon" />
                    {label}
                  </button>
                ))}
              </div>

              <span className="timeline-year">2024</span>
            </header>

            <div className="timeline-heading">
              <span className="timeline-pill" aria-hidden="true" />
              <h2 className="timeline-title">TIMELINE</h2>
            </div>
          </div>

          <div className="timeline-card">
            <div className="timeline-card__inner">
              <div className="timeline-row timeline-row--top">
                <div className="timeline-item timeline-item--top">
                  <span className="timeline-item__project">PROJECT 01</span>
                  <span className="timeline-item__month">January</span>
                  <p>
                    We completed a project earlier this month and are now gearing up to take the next step in the coming month.
                  </p>
                </div>

                <div className="timeline-item timeline-item--spacer" aria-hidden="true" />

                <div className="timeline-item timeline-item--top">
                  <span className="timeline-item__project">PROJECT 03</span>
                  <span className="timeline-item__month">March</span>
                  <p>
                    We completed a project earlier this month and are now gearing up to take the next step in the coming month.
                  </p>
                </div>

                <div className="timeline-item timeline-item--spacer" aria-hidden="true" />
              </div>

              <div className="timeline-track">
                {[0, 1, 2, 3].map((dot) => (
                  <span key={dot} className="timeline-dot" aria-hidden="true" />
                ))}
              </div>

              <div className="timeline-row timeline-row--bottom">
                <div className="timeline-item timeline-item--spacer" aria-hidden="true" />

                <div className="timeline-item timeline-item--bottom">
                  <span className="timeline-item__project">PROJECT 02</span>
                  <span className="timeline-item__month">February</span>
                  <p>
                    We completed a project earlier this month and are now gearing up to take the next step in the coming month.
                  </p>
                </div>

                <div className="timeline-item timeline-item--spacer" aria-hidden="true" />

                <div className="timeline-item timeline-item--bottom">
                  <span className="timeline-item__project">PROJECT 04</span>
                  <span className="timeline-item__month">April</span>
                  <p>
                    We completed a project earlier this month and are now gearing up to take the next step in the coming month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
