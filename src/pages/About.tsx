import { ArrowUpRight } from "lucide-react";
import heroPhoto from "@/assets/hero-photo.jpg";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-shell">
        <header className="about-nav">
          <div className="about-tags">
            {[
              "Paucek and Lage",
              "Presentation",
            ].map((label) => (
              <button key={label} className="about-tag">
                <ArrowUpRight className="about-tag__icon" />
                {label}
              </button>
            ))}
          </div>

          <div className="about-nav__divider">
            <span className="about-nav__line" />
            <div className="about-nav__sparkles" aria-hidden="true">
              <span>✶</span>
              <span>✶</span>
              <span>✶</span>
            </div>
          </div>
        </header>

        <main className="about-body">
          <div className="about-title">
            <span className="about-title__word">CREATIVE</span>
            <span className="about-title__word about-title__word--accent">BRIEF</span>
          </div>

          <div className="about-grid">
            <div className="about-image">
              <div className="about-image__inner">
                <img src={heroPhoto} alt="Creative brief collaboration" />
                <span className="about-image__badge">
                  <ArrowUpRight />
                </span>
              </div>
            </div>

            <div className="about-copy">
              <p>
                Presentations serve as versatile communication tools, utilized for demonstrations, lectures, speeches, reports, and
                more. Typically delivered before an audience, they fulfill various purposes, making presentations powerful tools for
                both persuasion and education.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
