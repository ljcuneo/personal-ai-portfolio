import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <nav className="mx-auto flex max-w-3xl justify-center gap-3 p-3">
        <Link href="https://www.linkedin.com/in/lucianojcuneo/" legacyBehavior>
          <a className="flex items-center" target="_blank" rel="noopener noreferrer">
            <Image
              src="/LinkedIn-logo.png"
              alt="LinkedIn"
              width={30}
              height={30}
            />
            LinkedIn
          </a>
        </Link>
      </nav>
    </footer>
  );
}
