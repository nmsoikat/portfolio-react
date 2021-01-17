import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaSass,
  FaJsSquare,
  FaReact,
  FaNode,
  FaGitAlt,
} from "react-icons/fa";

function About() {
  return (
    <section className="about">
      <section className="info">
        <div className="info__left">
          <h1 className="info__name">
            Hello, I'm <span class="highlight-text">NM Soikat</span>
          </h1>

          <p class="info__designation">
            A Front-End Developer at b-cause Bangladesh,. Ltd.
            <img src="" alt="" />
          </p>

          <p className="info__description">
            I am a Front-End Developer. I have 1 year experience about Front-End
            Development. I know well HTML, CSS, Bootstrap, JavaScript. I love my
            designation and I believe in my skill.
          </p>

          <button class="button">Hire Me</button>
        </div>

        <figure className="my-image">
          <img src="/img/profile-1.png" />
        </figure>
      </section>

      <section className="skill-area">
        <h2 className="skill-area__title section-title">Skill Set</h2>
        <div className="skills">
          <div className="skills__item html">
            <FaHtml5 /> <span className="sills__name">HTML5</span>
          </div>
          <div className="skills__item css">
            <FaCss3 /> <span className="sills__name">CSS3</span>
          </div>
          <div className="skills__item bootstrap">
            <FaBootstrap /> <span className="sills__name">Bootstrap</span>
          </div>
          <div className="skills__item sass">
            <FaSass /> <span className="sills__name">Sass</span>
          </div>
          <div className="skills__item js">
            <FaJsSquare /> <span className="sills__name">Javascript</span>
          </div>
          <div className="skills__item react">
            <FaReact /> <span className="sills__name">React</span>
          </div>
          <div className="skills__item node">
            <FaNode /> <span className="sills__name">NodeJS</span>
          </div>
          <div className="skills__item git">
            <FaGitAlt /> <span className="sills__name">Git</span>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;
