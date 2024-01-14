// Core packages
import Badges from "../../../utils/badge.list";

// Section structure
import Section from "../../../structure/section";
import Container from "../../../structure/container";

// Section general blocks
import SectionTitle from "../../../blocks/section.title";

// Career scss
import career from "../../../../styles/scss/sections/index/career.module.scss";
import Education from "./education";

export default function Career() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experience"
          preTitle="Career"
          subTitle="I am a Full Stack Developer, currently working in the project development field. My primary goal is to enhance my skills and expand my knowledge to gain valuable experience in complex project development. I am dedicated to continuously improving and staying updated with the latest advancements in the industry."
        />
        <section className={career.area}>
          <div className={career.position}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Full Stack Developer at Aimedis </h3>
                <h4>Steyl, Netherlands - Present</h4>
              </span>
              <p>
                At Aimedis in the Netherlands, where I have been working as a
                Full Stack Developer since June 2022, I&apos;ve had the
                opportunity to delve into a range of innovative projects. My
                role primarily involves developing APIs for integrating virtual
                worlds into the metaverse, alongside creating sophisticated user
                authentication systems. A significant part of my work also
                includes designing and implementing avatar creation
                functionality, using advanced tools like Next.js and React,
                which has enhanced the user experience on our platforms.
              </p>
            </div>
            <div className={career.companyAlt}></div>

            <Badges
              list={aimedis}
              block="stack"
              fullContainer="fullContainer"
              color={undefined}
            />
          </div>

          <div className={career.position}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Python Django Developer at Baryons Software Solutions</h3>
                <h4>Bengaluru, Karnataka - (March 2020-May 2022)</h4>
              </span>
              <p>
                Before joining Aimedis, I was a Python Django Developer at
                Baryons Software Solutions in Bengaluru, Karnataka, from March
                2020 to May 2022. My responsibilities there encompassed
                developing both server applications and client interfaces,
                utilizing my expertise in Python, Django, jQuery, and AJAX. This
                role also involved managing the maintenance and troubleshooting
                of various Python Django projects. I was actively involved in
                deploying complex Django applications and writing testable code,
                contributing significantly to projects in sectors like Hospital
                Management, E-commerce, and CRM systems.
              </p>
            </div>
            <div className={career.companyAlt}></div>

            <Badges
              list={baryons}
              block="stack"
              fullContainer="fullContainer"
              color={undefined}
            />
          </div>
        </section>
      </Container>
      {/* <Education /> */}
    </Section>
  );
}

const aimedis = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
  { key: "django", name: "Django", type: "devicon" },
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "ajax", name: "ajax", type: "devicon" },
  { key: "jquery", name: "jQuery", type: "devicon" },
  { key: "tailwindcss", name: "TailwindCSS", type: "devicon" },
  { key: "bootstrap", name: "Bootstrap", type: "devicon" },
  { key: "ec2", name: "EC2", type: "devicon" },
  { key: "amazonwebservices", name: "AWS", type: "devicon" },
];

const baryons = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
  { key: "django", name: "Django", type: "devicon" },
  { key: "ajax", name: "ajax", type: "devicon" },
  { key: "jquery", name: "jQuery", type: "devicon" },
  { key: "bootstrap", name: "Bootstrap", type: "devicon" },
];
