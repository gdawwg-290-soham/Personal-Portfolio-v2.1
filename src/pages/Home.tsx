import Button from "components/HTML/Button";
import { FaReact } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";


const Home = () => {
  return (
    <section className="section-layout">
      <h1 className="custom-text font-monts text-green font-normal ml-1 mb-8">
        Hi, my name is
      </h1>
      <h2 className="big-headings font-semibold m-0 text-lightest-slate leading-5">
        Soham Ghosh.
      </h2>
      <h3 className="big-headings text-slate font-semibold mt-2 whitespace-normal leading-snug">
        I build stuff on the web.
      </h3>
      <p className="max-w-3xl mt-5">
        I'm currently studying at Delhi Technological University(DCE), New Delhi pursuing B.Tech. in Electrical Engineering and a Minor in Software Engineering. <br />
        I do occasionally like to build & design exceptional digital experiences. <br />
        Currently, I'm focused on building accessible & performance apps with: <br /><br />
        <strong className="text-green ease-slow-transition"><FaReact />React</strong><br />
        <strong className="text-blue ease-slow-transition"><BiLogoTailwindCss />Tailwind</strong><br />
        <strong className="text-yellow ease-slow-transition"><SiTypescript />TypeScript</strong><br />
        <strong className="text-pink ease-slow-transition"><TbBrandFramerMotion />Framer-Motion</strong>
      </p>
      <a
        href="https://github.com/gdawwg-290-soham"
        target="_blank"
        className="email-btn"
        rel="noreferrer"
        title="github referrence"
      >
        <Button type="button" aria-label="profile-link">
          Check out my GitHub!
        </Button>
      </a>
    </section>
  );
};

export default Home;
