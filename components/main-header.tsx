import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <header className="flex justify-between my-6">
      <Link className="text-4xl font-bold" href="/">
        AppName
      </Link>

      <nav>
        <ul className="flex gap-8">
          <li>
            <NavLink href="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink href="/applications">Applications</NavLink>
          </li>
          <li>
            <NavLink href="/export">Export</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
