import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AIChatbutton from "./AIChatButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-background">
      <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-3 px-3 py-4">
        <nav className="space-x-4 font-medium">
          <div className="breadcrumbs text-sm">
            <ul className="flex space-x-2">
              <li>
                <Link href="/" legacyBehavior>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about" legacyBehavior>
                  <a>About Me</a>
                </Link>
              </li>
              <li>
                <Link href="/projects" legacyBehavior>
                  <a>Projects</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="flex items-center gap-4">
          <AIChatbutton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
