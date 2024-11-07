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
          subTitle="I am a Software Engineer, currently working in the project development field. My primary goal is to enhance my skills and expand my knowledge to gain valuable experience in complex project development. I am dedicated to continuously improving and staying updated with the latest advancements in the industry."
        />
        <section className={career.area}>
          <div className={career.position}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Senior Software Engineer at Aimedis </h3>
                <h4>Dubai, UAE - (June 2022 - Present)</h4>
              </span>
              <p>
                As a Senior Software Engineer at Aimedis, I have been
                instrumental in developing robust solutions for a cutting-edge
                metaverse healthcare platform. My work involves creating RESTful
                APIs to enable seamless integration of 3D functionalities,
                enhancing user experience significantly. I implemented a
                real-time chat system using Agora on AWS and developed a Pixel
                streaming solution leveraging AWS GPU instances for efficient
                web-based 3D application streaming. Additionally, I integrated
                payment systems such as Stripe and Metamask, allowing flexible
                payment options, including cryptocurrency.
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
                <h3>Software Engineer at Baryons Software Solutions</h3>
                <h4>Bengaluru, Karnataka - (March 2020-May 2022)</h4>
              </span>
              <p>
                At Baryons Software Solutions, I served as a Software Engineer
                focused on building and maintaining backend solutions using
                Python and Django. I developed server applications and
                interactive client interfaces with jQuery and AJAX, streamlining
                functionality and enhancing user experience. My role involved
                handling complex deployment challenges and troubleshooting to
                ensure stable performance for various projects, including
                hospital management and e-commerce systems. Additionally, I
                integrated Django-CMS to optimize content management,
                contributing to more efficient operational workflows for diverse
                client needs.
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
