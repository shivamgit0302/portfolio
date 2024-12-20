import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import React from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/*
				Author: Shivam Tiwari
                 GitHub: Visit the GitHub repository at https://github.com/muhammad-fiaz/portfolio/ for more details.
                 license: MIT License
                  */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
        <meta
          name="description"
          content="Shivam Tiwari - A dedicated Software Engineer proficient in App/Web, Cloud, DevOps, AL/ML, and Design. Join my journey."
        />

        {/*These are need for PWA*/}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Shivam Tiwari" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="msapplication-tap-highlight" content="no" />

        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <link rel="canonical" href="https://shivamtiwari.info" />
        <meta name="license" content="MIT License" />
        <meta httpEquiv="content-language" content="en-us" />

        <link rel="preconnect" href="https://shivamtiwari.info" />

        <link rel="dns-prefetch" href="https://shivamtiwari.info" />

        <meta name="author" content="Shivam Tiwari" />

        <link rel="alternate" hrefLang="en" href="https://shivamtiwari.info" />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        <link rel="apple-touch-icon" href="/img/logo_rounded.png" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/logo_rounded.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon.jpg"
        />
        <link
          rel="icon"
          href="/favicon/favicon-org.ico"
          type="image/x-icon"
        ></link>
        <link
          rel="shortcut icon"
          href="/favicon/favicon-org.ico"
          type="image/x-icon"
        ></link>

        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />

        <meta property="og:title" content="Shivam Tiwari" key="title" />
        <meta
          property="og:description"
          content="Shivam Tiwari - A dedicated Software Engineer proficient in App/Web, Cloud, DevOps, AI/ML, and Design. Join my journey."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/59158846?s=400&u=2683623ecc2c10d898ee3573f77eefce2c40167c&v=4"
        />
        <meta
          property="og:image:secure_url"
          content="https://avatars.githubusercontent.com/u/59158846?s=400&u=2683623ecc2c10d898ee3573f77eefce2c40167c&v=4"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Shivam Tiwari" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:url" content="https://shivamtiwari.info" />
        <meta property="og:type" content="website" />
        <meta
          property="og:profile"
          content="https://github.com/shivamgit0302"
        />
        <meta property="og:site_name" content="Shivam Tiwari" />
        <meta property="og:locale" content="en_US" />

        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="2048x2732"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="1668x2224"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="1536x2048"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="1125x2436"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="1242x2208"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="750x1334"
        />
        <link
          rel="apple-touch-startup-image"
          href="/img/logo_rounded.png"
          sizes="640x1136"
        />

        {/*These are the Keywords that will Boost your SEO in Ranking, so Make Sure to include and Update it up to your preference or don't mind this! 😴*/}
        <meta
          name="keywords"
          content="
    Shivam Tiwari, Full Stack Engineer, Software Engineer, DevOps Engineer, Software Engineer,
    Programmer, Software Developer, Portfolio Website, Software Engineer, Coding, Full Stack Development,
    Technology Enthusiast, Software Development, Computer Science, Programming Projects,
    Frontend Developer, Backend Developer, Software Development Portfolio, Student,
    Full Stack Software Engineer, Shivam Tiwari Portfolio, Coding Projects, Tech Portfolio,
    Web Development, DevOps Professional, Shivam Tiwari Projects, Software Engineer Portfolio,
    IT Professional, Technology Projects, Software Development Engineer, Computer Programmer,
    Code Portfolio, Technology Student, Software Architect, Cloud Computing,
    DevOps Specialist, Software Engineering Projects, Coding Portfolio,
    Full Stack Engineer Portfolio, Shivam Tiwari Software Engineer,
    Software Development Student, Coding Enthusiast, DevOps Portfolio, Programming Portfolio,
    Shivam Tiwari DevOps, IT Portfolio, Software Engineer Portfolio, Shivam Tiwari Developer,
    Full Stack Engineer Shivam Tiwari, Shivam Tiwari Coding, Shivam Tiwari IT,
    Shivam Tiwari Software Engineer, Shivam Tiwari Software Engineer, Shivam Tiwari DevOps Engineer,
    Shivam Tiwari Programming, Shivam Tiwari Software Development, Shivam Tiwari Coding Projects,
    Shivam Tiwari Tech Portfolio, Shivam Tiwari IT Portfolio, Shivam Tiwari Software Engineer Portfolio,
    Shivam Tiwari Software Engineer Portfolio, Shivam Tiwari DevOps Portfolio, Shivam Tiwari Full Stack Engineer,
    Shivam Tiwari Software Engineer Portfolio, Shivam Tiwari Coding Portfolio, Shivam Tiwari Programming Portfolio,
    Shivam Tiwari Software Development Portfolio, Shivam Tiwari Technology Projects,
    Shivam Tiwari Computer Science, Shivam Tiwari Cloud Computing, Shivam Tiwari IT Professional,
    Shivam Tiwari Technology Enthusiast, Shivam Tiwari Computer Programmer, Shivam Tiwari Code Portfolio,
    Shivam Tiwari Technology Student, Shivam Tiwari Software Architect,fiaz,fiaz portfolio,fiaz devops,fiaz devops engineer,
    fiaz devops portfolio,fiaz devops projects,fiaz devops specialist,fiaz devops professional,fiaz devops engineer portfolio,
    fiaz devops engineer projects,fiaz devops engineer specialist,fiaz devops engineer professional,fiaz devops engineer coding,
    fiaz devops engineer coding projects,fiaz devops engineer coding portfolio,fiaz devops engineer coding specialist,
    Open Source Contributor,open source,open source projects,open source portfolio,open source contributions,
    open source contributions portfolio,open source contributions projects,open source contributions coding,
    open source contributions coding projects,open source contributions coding portfolio,open source contributions coding specialist,
    open source contributions coding professional,open source contributions coding engineer,open source contributions coding developer,
    open source contributions coding student,open source contributions coding enthusiast,open source contributions coding architect,
    open source contributions coding projects portfolio,open source contributions coding projects specialist,

"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Shivam Tiwari",
          "url": "https://shivamtiwari.info",
        }`,
          }}
        />

        {/*Edit this to your according FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Have you worked on any projects?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, in addition to my personal projects and hobbies, I have worked on several projects, both individually and in teams. These projects have allowed me to apply theoretical knowledge to real-world scenarios, honing my practical skills in software development, web technologies, and computer networks."
                }
              },
              {
                "@type": "Question",
                "name": "Can we recruit you?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, I am currently looking for jobs and I have also done several open-source projects as well."
                }
              },
              {
                "@type": "Question",
                "name": "Who is Shivam Tiwari?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Shivam Tiwari is a Software Engineer specializing in Cloud, DevOps, ML/AI, and Design. He is passionate about programming, innovation, and shaping the future. With expertise in various technologies and a strong background in software development, Shivam Tiwari strives to create innovative solutions and contribute to the advancement of technology. His skill set includes proficiency in cloud computing, DevOps practices, machine learning/artificial intelligence, and design principles. Shivam Tiwari is dedicated to staying up-to-date with the latest industry trends and leveraging his knowledge to drive impactful and transformative projects."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Shivam Tiwari from?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Shivam Tiwari is from Madurai, Tamil Nadu, India."
                }
              },
              {
                "@type": "Question",
                "name": "What does Shivam Tiwari do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Shivam Tiwari leverages Cloud, DevOps, ML/AI, Design, and web/mobile apps to benefit people with optimized operations and user-friendly experiences."
                }
              }
            ]
          }
        `,
          }}
        />

        {/*Edit this to your according to your website*/}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://shivamtiwari.info/"
            },{
              "@type": "ListItem",
              "position": 4,
              "name": "Projects",
              "item": "https://shivamtiwari.info/projects"
            }]
          }
        `,
          }}
        />

        {/*Edit this to your according to your website*/}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
          {
            "@context": "https://schema.org",
            "@type": "ResearchProject",
            "name": "NeuroLink",
            "description": "NeuroLink is a Python package that aims to provide various AI capabilities, including a chatbot, image processing, audio processing, Django support, and more. It utilizes TensorFlow and other related technologies for natural language processing and AI tasks.",
            "alternateName": "neurolink",
            "url": "https://github.com/muhammad-fiaz/neurolink",
            "logo": "https://private-user-images.githubusercontent.com/75434191/242214243-82fbf702-43e2-46e6-8e01-11758fa26310.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTQ4NTE2ODksIm5iZiI6MTY5NDg1MTM4OSwicGF0aCI6Ii83NTQzNDE5MS8yNDIyMTQyNDMtODJmYmY3MDItNDNlMi00NmU2LThlMDEtMTE3NThmYTI2MzEwLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzA5MTYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMwOTE2VDA4MDMwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ3NjJmNzA5MGU5NWY4NTUxZTcxYmVmNzNlZTYzOTViN2FjNzE1YTM2MjM1OTNlOGIxNzk0ODE1NDczMDMzNGEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.ay5bRLRoojQ33ZJLFnvjyq6Dq4qZfDY7quvv4WmgRLI",
             "sameAs": [
            "https://www.linkedin.com/in/muhammad-fiaz-/"
        ]          }
        `,
          }}
        />
        {/*theme*/}
        <Script id="theme.util.jsx" strategy="beforeInteractive">
          {`
				let themeLocalStorage = localStorage.getItem('theme')
				let themeSystem       = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
				document.querySelector(':root').dataset.theme = themeLocalStorage ?? themeSystem
				`}
        </Script>

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-SDJ0K1Y70X"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-SDJ0K1Y70X', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
