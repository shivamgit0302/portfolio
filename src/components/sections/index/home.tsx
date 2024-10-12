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
          subTitle="With a strong background in backend development and a passion for building impactful web applications, I have over four years of experience creating scalable solutions and RESTful APIs. My expertise spans Python, Django, and cloud services like AWS, complemented by hands-on front-end experience with React and Next.js. I am dedicated to continuous learning and innovation, always aiming to deliver high-quality, efficient, and reliable solutions. Whether developing APIs for a metaverse platform or leading eCommerce projects, I strive to exceed expectations and stay at the forefront of technology."
        />
        <section className={about.content}>
          <div className={about.image}>
            <Image
              src="/img/Profilepic.jpg"
              width={600}
              height={800}
              alt="Shivam Tiwari"
              loading="eager"
            />
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="Technical Excellence"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fas", "user"]}
              copy="Commitment to delivering clean, efficient, and scalable code."
            />
            <CopyBlock
              title="Continuous Learning"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fas", "book"]}
              copy="Passion for expanding my skill set to adapt to new technologies."
            />
            <CopyBlock
              title="Collaborative Mindset"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fas", "book"]}
              copy="Thriving in cross-functional teams to achieve shared goals."
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
