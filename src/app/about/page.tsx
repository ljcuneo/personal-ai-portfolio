import bjj from "@/assets/bjj.jpg";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Luciano J. Cuneo",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p>
          My name is Luciano J. Cuneo, and I am a dedicated software engineer
          with a passion for technology and continuous learning. I hold a B.S.
          in Computer Science from Florida International University and am
          currently pursuing a Master’s degree in Cybersecurity from Georgia
          Institute of Technology.
        </p>
        <p>
          I began my career in software development in 2016 and have since
          developed a diverse skill set that includes web development, database
          management, and cloud computing. I am committed to building innovative
          solutions that drive business success.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Professional Experience</H2>
        <p>
          <strong>
            Software Engineer, General Motors | GM Energy (02/2022 – Present)
          </strong>
          <br />
          In my current role, I develop applications for GM Energy using Next.js
          (TypeScript) and Quarkus (Java), aimed at collecting leads and driving
          sales, with predicted revenue impacts in the millions. I have been
          recognized as a top performer, earning a promotion in my second year
          through the competitive New College Hire Program. My role also
          involves maintaining 100% attendance in Agile stand-ups, fostering
          seamless collaboration within the software development life cycle, and
          skillfully using Azure for effective source control and project
          management.
        </p>
        <p>
          <strong>
            Multimedia Design Engineer, Cuneoism Productions (04/2016 – Present)
          </strong>
          <br />I produce high-quality content for various businesses, utilizing
          tools such as Figma, Adobe Suite, and Canva to develop creative UX
          designs. Additionally, I am an experienced videographer, skilled in
          capturing and editing compelling video content for different
          platforms.
        </p>
        <p>
          <strong>
            Simulation Technologist, University of Miami (02/2021 – 02/2022)
          </strong>
          <br />I managed advanced medical simulation technologies, ensuring
          operational excellence and system reliability for over 100 training
          sessions. My responsibilities included developing realistic patient
          scenarios critical for skills testing, maintaining documentation and
          inventory control, and analyzing and enhancing simulation technology
          infrastructure.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Skills</H2>
        <p>
          I&apos;m a full-stack web developer specializing in{" "}
          <strong>React</strong>, <strong>Next.js</strong>, and{" "}
          <strong>Node.js</strong>. I have extensive experience with SQL,
          particularly with PostgreSQL, and have worked with various cloud
          platforms, including Azure.
        </p>
        <p>
          My technical skills include TypeScript, JavaScript, React.js,
          HTML/CSS, Python, SQL, Quarkus, GraphQL, Agile/Scrum methodologies,
          Splunk, Docker, Kubernetes, AWS, Azure, GCP, CI/CD tools, Unit
          Testing, Web Accessibility (a11y), State Management Libraries (Redux),
          Advanced API Design (RESTful standards, gRPC), and Security Practices.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Social Media</H2>
        <p>
          In my free time, I enjoy working on side projects, surfing and flying
          drones 🤙🏽
        </p>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://instagram.com/cuneoism"
              className="text-primary hover:underline"
            >
              @cuneoism
            </a>{" "}
            - Instagram
          </li>
          <li>
            <a
              href="https://linkedin.com/in/lucianojcuneo"
              className="text-primary hover:underline"
            >
              lucianojcuneo
            </a>{" "}
            - LinkedIn
          </li>
          <li>
            <a
              href="https://www.cuneoism.com/"
              className="text-primary hover:underline"
            >
              Cuneoism.com
            </a>{" "}
            - Videography Porftolio
          </li>
        </ul>
      </section>
    </section>
  );
}
