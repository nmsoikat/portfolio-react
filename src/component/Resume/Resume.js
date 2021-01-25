function Resume() {
  return (
    <section className="resume-area">
      <section className="resume">
        <h2 className="resume__title section-title">Working Experiences</h2>
        <section className="resume__detail">
          <article className="resume-content">
            <div className="resume-content__year-map">
              <h3>
                2019 <br />
                To <br />
                Present
              </h3>
            </div>
            <div className="resume-content__desc ">
              <h2 className="resume-content__designation">
                Front-End Developer
              </h2>
              <h3 className="resume-content__company-name">
                b-cause Bangladesh, ltd.
              </h3>
              <p className="resume-content__responsibility">
                <h4>Responsibilities:</h4>
                <ul>
                  <li>Webpage Front End Part from PSD Or Concept</li>
                  <li>ERP Project Layout Fixing</li>
                  <li>Complex HTML table design</li>
                </ul>
              </p>
            </div>
          </article>
        </section>
      </section>

      <section className="resume edu-qualification">
        <h2 className="edu-qualification__title section-title">
          Educational Qualification
        </h2>
        <section className="resume__detail">
          <article className="resume-content">
            <div className="resume-content__year-map">
              <h3>
                Start-2018 <br /> Expected-2022
              </h3>
            </div>
            <div className="resume-content__desc ">
              <h2 className="resume-content__designation">B.Sc. In CSE</h2>
              <h3 className="resume-content__company-name">
                Dhaka International University
              </h3>
              {/* <p className="resume-content__responsibility">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a
                dignissimos quas saepe voluptates! Suscipit, a iure. Dolor
                totam, perspiciatis atque voluptates dolores, iusto deleniti
                eaque, non distinctio architecto cum.
              </p> */}
            </div>
          </article>

          <article className="resume-content">
            <div className="resume-content__year-map">
              <h3>
                Start-2013 <br /> Complete-2017
              </h3>
            </div>
            <div className="resume-content__desc">
              <h2 className="resume-content__designation">
                Diploma In Computer Technology
              </h2>
              <h3 className="resume-content__company-name">
                Dhaka International University
              </h3>
              {/* <p className="resume-content__responsibility">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a
                dignissimos quas saepe voluptates! Suscipit, a iure. Dolor
                totam, perspiciatis atque voluptates dolores, iusto deleniti
                eaque, non distinctio architecto cum.
              </p> */}
            </div>
          </article>
        </section>
      </section>
    </section>
  );
}

export default Resume;
