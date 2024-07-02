import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GMEnergy1 from "@/assets/GMEnergy1.png";
import GMEnergy2 from "@/assets/GMEnergy2.png";
import DewiCats1 from "@/assets/DC-1.png";
import DewiCats2 from "@/assets/DC-2.png";
import DewiCats3 from "@/assets/DC-3.png";
import DewiCats4 from "@/assets/DC-4.png";
import Cadillac1 from "@/assets/Cadillac1.png";
import Cadillac2 from "@/assets/Cadillac2.png";
import Cadillac3 from "@/assets/Cadillac3.png";
import Cadillac4 from "@/assets/Cadillac4.png";

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
          <li className="pb-6">
            <a
              href="https://gmenergy.gm.com/for-home/products/gm-energy-powershift-charger"
              className="text-primary hover:underline font-bold"
              target="_blank"
              rel="noopener noreferrer"
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
            <div className="p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                <div className="p-4">
                  <a
                    href={GMEnergy1.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={GMEnergy1}
                      alt="GM Energy Home Purchasing Platform screenshot"
                      className="rounded-md"
                      width={500}
                      height={500}
                    />
                  </a>
                </div>
                <div className="p-4">
                  <a
                    href={GMEnergy2.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={GMEnergy2}
                      alt="GM Energy Home Purchasing Platform screenshot"
                      className="rounded-lg"
                      width={500}
                      height={500}
                    />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <hr className="my-6 border" />
          <li className="p-6">
            <Link
              href="https://www.dewicats.xyz"
              className="text-primary hover:underline font-bold"
              target="_blank"
              rel="noopener noreferrer"
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
            <div className="p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                <div className="p-4">
                  <a
                    href={DewiCats1.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={DewiCats1}
                      alt="DewiCats Platform screenshot"
                      className="rounded-md"
                      width={500}
                      height={500}
                    />
                  </a>
                </div>
                <div className="p-4">
                  <a
                    href={DewiCats2.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={DewiCats2}
                      alt="DewiCats Platform screenshot"
                      className="rounded-lg"
                      width={500}
                      height={500}
                    />
                  </a>
                </div>
                <div className="p-4">
                  <a
                    href={DewiCats3.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={DewiCats3}
                      alt="DewiCats Platform screenshot"
                      className="rounded-lg"
                      width={500}
                      height={500}
                    />
                  </a>
                </div>
                <div className="p-4">
                  <a
                    href={DewiCats4.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={DewiCats4}
                      alt="DewiCats Platform screenshot"
                      className="rounded-lg"
                      width={500}
                      height={500}
                    />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <hr className="my-6 border" />
          <li className="p-6">
            <a
              href="https://www.cadillac.com/electric-life#public"
              className="text-primary hover:underline font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cadillac Lyriq Home Charging Platform
            </a>{" "}
            - The Cadillac Home Charging Platform is a comprehensive resource
            for electric vehicle owners, offering tools and information to
            enhance the EV ownership experience. I contributed to the design and
            development of this platform, which features interactive guides,
            charging station locators, and integration with Cadillac&apos;s
            energy management systems. Built using Next.js, Node.js, and
            PostgreSQL, this platform ensures a seamless and informative
            experience for Cadillac Lyriq owners.
            <div className="p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                <div className="p-4">
                  <a
                    href={Cadillac1.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={Cadillac1}
                      alt="Cadillac Lyriq Home Charging Platform"
                      className="rounded-md"
                      width={500}
                      height={500}
                    />
                  </a>
                </div>
                <div className="p-4">
                  <a
                    href={Cadillac2.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={Cadillac2}
                      alt="Cadillac Lyriq Home Charging Platform"
                      className="rounded-md"
                      width={500}
                      height={500}
                    />
                  </a>
                </div>
                <div className="p-4">
                  <a
                    href={Cadillac3.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={Cadillac3}
                      alt="Cadillac Lyriq Home Charging Platform"
                      className="rounded-md"
                      width={500}
                      height={500}
                    />
                  </a>
                </div>
                <div className="p-4">
                  <a
                    href={Cadillac4.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={Cadillac4}
                      alt="Cadillac Lyriq Home Charging Platform"
                      className="rounded-md"
                      width={500}
                      height={500}
                    />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <hr className="border-muted" />
    </section>
  );
}
