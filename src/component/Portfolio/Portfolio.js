import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <section className="portfolio-area">
      <h2 className="portfolio-title section-title">Projects</h2>

      <section className="my-projects">
        <aside className="project-menu"></aside>
        <section className="projects">
          <a
            href="https://saykat1.github.io/backpack-site-a2/"
            target="_blank"
            className="project"
          >
            <div className="project__image">
              <img
                className="img-fluid"
                src="/img/projects/backpack.png"
                alt="Small Website"
              />
            </div>
            <h3 className="project__title">BackPack</h3>
          </a>
          <a href="#!" className="project">
            <div className="project__image">
              <img
                className="img-fluid"
                src="/img/projects/backpack.png"
                alt="Small Website"
              />
            </div>
            <h3 className="project__title">BackPack</h3>
          </a>
          <a href="#!" className="project">
            <div className="project__image">
              <img
                className="img-fluid"
                src="/img/projects/backpack.png"
                alt="Small Website"
              />
            </div>
            <h3 className="project__title">BackPack</h3>
          </a>
        </section>
      </section>
    </section>
  );
}

export default Portfolio;
