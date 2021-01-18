import AllProjects from './AllProjects/AllProjects';
import PortfolioMenu from './PortfolioMenu/PortfolioMenu';

function Portfolio() {
  return (
    <section className="portfolio-area">
      <section className="my-projects">
        <AllProjects />
        {/* <section className="projects">
        </section> */}
      </section>

      <aside className="project-menu-wrap">
        <PortfolioMenu />
      </aside>
    </section>
  );
}

export default Portfolio;
