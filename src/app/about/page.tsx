import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Drone1 from "@/assets/Drone1.jpg";
import Drone2 from "@/assets/Drone2.jpg";
import Drone3 from "@/assets/Drone3.jpg";
import Drone4 from "@/assets/Drone4.jpg";
import Drone5 from "@/assets/Drone5.jpg";
import mountainImg from "@/assets/SequoiaMountain.jpg";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Luciano J. Cuneo",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <p>
          Hi, I&apos;m Luciano! I am a software engineer fueled by{" "}
          <strong>creativity</strong>, passion for <strong>technology</strong>{" "}
          and a commitment to continuous <strong>learning</strong>. My journey
          began with a Bachelor of Science in Digital Communications, which
          ignited my interest in web design. After gaining valuable experience
          as a digital content creator, I decided to deepen my technical
          expertise by pursuing a degree in Computer Science from Florida
          International University. Currently, I am furthering my knowledge by
          pursuing a Master&apos;s degree in Cybersecurity at Georgia Institute
          of Technology.
        </p>
        <p>
          In my free time, I love flying FPV drones, capturing aerial
          photography, catching waves during a surfing session, exploring new
          hiking trails, and enjoying a good movie.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Image
            src={Drone1}
            alt="Image description 1"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <Image
            src={Drone5}
            alt="Drone"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <Image
            src={Drone3}
            alt="Drone"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <Image
            src={Drone4}
            alt="Drone"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <Image
            src={Drone2}
            alt="Drone"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <Image
            src={mountainImg}
            alt="Mountain"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
      </section>
      <hr className="border"/>
      <section className="space-y-3">
        <H2>Professional Experience</H2>
        <p>
          <strong>
            Software Engineer, General Motors | GM Energy (02/2022 - Present)
          </strong>
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            Developed and engineered responsive UI&apos;s for GM Energy
            applications, actively contributing to design refinements to
            optimize user engagement.
          </li>
          <li>
            Leveraged modern web technologies such as Next.js to create dynamic
            and interactive digital experiences.
          </li>
          <li>
            Utilized Git and Azure for robust source control and project
            management, consistently delivering high-quality work within set
            timelines.
          </li>
          <li>
            Navigated complex requirements to swiftly deliver user stories,
            thereby enhancing team productivity and facilitating seamless
            communication with non-technical stakeholders.
          </li>
          <li>
            Ensured inclusive design by adhering to accessibility standards and
            contributing to the maintenance of a comprehensive design system.
          </li>
        </ul>
        <p>
          <strong>
            Multimedia Design Engineer, Cuneoism Productions (04/2016 - 12/2023)
          </strong>
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            Produced high-quality video content for clients using advanced
            editing tools such as Adobe Premiere, After Effects, and DaVinci
            Resolve.
          </li>
          <li>
            Captured and edited compelling video content tailored for various
            platforms, ensuring engaging and professional visuals.
          </li>
          <li>
            Experienced videographer, skilled in capturing and editing
            compelling video content for different platforms.
          </li>
        </ul>
        <p>
          <strong>
            Simulation Technologist, University of Miami (02/2021 - 02/2022)
          </strong>
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            Managed advanced medical simulation technologies, ensuring
            operational excellence and system reliability for over 100 training
            sessions.
          </li>
          <li>
            Developed realistic patient scenarios critical for skills testing.
          </li>
          <li>
            Maintained documentation and inventory control for simulation
            equipment and supplies, ensuring compliance with university and
            healthcare regulations.
          </li>
          <li>
            Assisted in analyzing and enhancing simulation technology
            infrastructure, implementing cost-effective solutions that increased
            training efficiency and effectiveness.
          </li>
        </ul>
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
              target="_blank"
              rel="noopener noreferrer"
            >
              @cuneoism
            </a>{" "}
            - Instagram
          </li>
          <li>
            <a
              href="https://linkedin.com/in/lucianojcuneo"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              lucianojcuneo
            </a>{" "}
            - LinkedIn
          </li>
          <li>
            <a
              href="https://www.cuneoism.com/"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cuneoism.com
            </a>{" "}
            - Videography Portfolio
          </li>
        </ul>
      </section>
    </section>
  );
}
