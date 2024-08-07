import Main from "assets/images/main.jpg";

const skillsList = [
  { id: 1, title: "JavaScript (ES6+)" },
  { id: 4, title: "React" },
  { id: 2, title: "Firebase" },
  { id: 5, title: "Framer Motion" },
  { id: 3, title: "Tailwind CSS" },
  { id: 6, title: "TypeScript(Most Recent)" },
] as const;

const About = () => {
  return (
    <section id="about" className="section-layout fade-in">
      <h2 className="numbered-headings">
        <span className="num-headings">01.</span> About Me
      </h2>
      <article className="gap-12 grid grid-cols-1 md:grid-cols-2">
        <div className="block text-pretty">
          <p className="mb-3.5">
            Hello, I'm Soham Ghosh, a passionate{" "}
            <strong className="text-green"> React Developer </strong> following
            <strong className="text-green"> a Full-stack</strong> and a
            Data Science journey.
          </p>
          <p className="mb-3.5">
            I'm enthusiastic about embarking on my{" "}
            <strong className="text-green">professional</strong> journey in web
            development and data analytics and constatnly seeking new{" "}
            <strong className="text-green"> challenges and growth </strong>{" "}
            opportunities.
          </p>
          <p className="mb-3.5">
            My goal is to transform complex problems into elegant and
            user-friednly solutions, driven by my passion for creating beautiful
            and intuitive web experience.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="skills-layout">
            {skillsList.map((item) => {
              return (
                <li key={item.id} className="skills-list">
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="relative size-[70%] md:size-[300px] mx-auto md:mx-0">
          <div className="img-wrapper">
            <div className="img-filter">
              <img
                src={Main}
                alt="main"
                aria-hidden="true"
                decoding="async"
                loading="lazy"
                className="relative rounded aspect-auto object-cover object-center"
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
