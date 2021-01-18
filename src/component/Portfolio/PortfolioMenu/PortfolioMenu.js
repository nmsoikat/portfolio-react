import { NavLink } from 'react-router-dom';

function PortfolioMenu() {
  return (
    <ul className="project-menu">
      <li className="project-menu__item">
        <NavLink
          exact
          activeClassName="activeLink"
          to="/portfolio/all"
          className="project-menu__link"
        >
          All
        </NavLink>
      </li>
      <li className="project-menu__item">
        <NavLink
          activeClassName="activeLink"
          to="/portfolio/react"
          className="project-menu__link"
        >
          React
        </NavLink>
      </li>
      <li className="project-menu__item">
        <NavLink
          activeClassName="activeLink"
          to="/portfolio/landing-page"
          className="project-menu__link"
        >
          Landing Page
        </NavLink>
      </li>
    </ul>
  );
}

export default PortfolioMenu;
