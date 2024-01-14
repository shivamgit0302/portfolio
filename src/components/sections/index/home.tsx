// Core packages
import Image from "next/image";

// Imports
import Section from "../../structure/section";
import Container from "../../structure/container";

import SectionTitle from "../../blocks/section.title";

// import BadgesBlock from "../../blocks/about.badges";
import CopyBlock from "../../blocks/about.copy";

import about from "../../../styles/scss/sections/index/about.module.scss";
import React from "react";

export default function Home() {
  return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="About Me"
          preTitle="Synopsis"
          subTitle="From an early age, my passion for creating new things has been a driving force. Immersed in the world of design and coding, I honed my skills and explored innovative solutions. This love for creation has shaped my career, fueling my desire to bring impactful and visually stunning projects to life. With meticulous attention to detail and a keen eye for aesthetics, I strive to craft exceptional and memorable experiences."
        />
        <section className={about.content}>
          <div className={about.image}>
            <Image
              src="https://avatars.githubusercontent.com/u/59158846?s=400&u=2683623ecc2c10d898ee3573f77eefce2c40167c&v=4"
              width={600}
              height={800}
              alt="Shivam Tiwari"
              loading="eager"
            />
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="Softskills"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fas", "user"]}
              copy="With a solid background in design and technical expertise, I am a skilled developer who excels in delivering high-quality solutions. Alongside my proficiency in coding, I possess strong leadership, time management, and multitasking skills, which I have honed through managing complex development projects. As a dedicated individual, I constantly seek opportunities to expand my knowledge and stay updated with the latest industry trends. With a passion for creating innovative and efficient applications, I am committed to bringing value and success to every development endeavor."
            />
            <CopyBlock
              title="Constant Learning and Improvements"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fas", "book"]}
              copy="I have an insatiable thirst for knowledge and a passion for continuous learning and development. Keeping up with the latest industry trends and emerging technologies allows me to stay ahead of the curve. By actively seeking new challenges and expanding my skill set, I constantly push the boundaries of my abilities, ensuring that I deliver cutting-edge solutions and provide valuable insights to clients."
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}
// const methods = [
//   {
//     key: "machinelearning",
//     name: "Machine Learning",
//     type: "fad",
//     icon: "devicon",
//   },
//   {
//     key: "artificialintelligence",
//     name: "Artificial Intelligence",
//     type: "fad",
//     icon: "devicon",
//   },
//   { key: "deeplearning", name: "Deep Learning", type: "fad", icon: "devicon" },
//   {
//     key: "neuralnetworks",
//     name: "Neural Networks",
//     type: "fad",
//     icon: "devicon",
//   },
// ];
