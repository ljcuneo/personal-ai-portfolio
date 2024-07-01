import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GMEnergy1 from "@/assets/GMEnergy1.png";
import GMEnergy2 from "@/assets/GMEnergy2.png";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Luciano J. Cuneo",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Projects</H2>
        <p>Here are a couple of my current projects:</p>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://gmenergy.gm.com/for-home/products/gm-energy-powershift-charger"
              className="text-primary hover:underline"
            >
              GM Energy Home Purchasing Platform
            </a>{" "}
            - The GM Energy PowerShift Charger is a state-of-the-art home EV
            charging solution that enhances convenience and efficiency. It
            provides fast, reliable charging for GM&apos;s electric vehicles and
            features smart capabilities to optimize energy usage. Built using
            Next.js, Quarkus, and PostgreSQL, this charger seamlessly integrates
            with GM&apos;s energy management systems and offers robust safety
            features. The microfrontend architecture ensures user-friendly
            controls and secure, efficient home charging, making it ideal for
            homeowners embracing sustainable energy solutions.
            <div className="flex space-x-4 p-4">
              <Image
                src={GMEnergy1}
                alt="GM Energy Home Purchasing Platform screenshot"
                className="rounded-md"
                width={500}
                height={500}
              />
              <Image
                src={GMEnergy2}
                alt="GM Energy Home Purchasing Platform screenshot"
                className="rounded-md"
                width={500}
                height={500}
              />
            </div>
          </li>
          <li>
            <Link
              href="https://www.dewicats.xyz"
              className="text-primary hover:underline"
            >
              DewiCats
            </Link>{" "}
            - Dewi Cats is an innovative platform dedicated to a new class of
            NFTs designed for the community. I worked on the design and
            development of this engaging site, which offers a comprehensive
            roadmap detailing the launch and development of DeWiCats, including
            NFT minting, DAO governance, auctions, and the deployment of
            IoT/MOBILE hotspots. Dewi Cats emphasizes community involvement,
            allowing holders to vote on proposals and decide on the allocation
            of treasury funds. With features like an exclusive funded DAO,
            frequent auctions, and powerful DePin tools, Dewi Cats aims to build
            a robust, community-driven ecosystem.
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
    </section>
  );
}
