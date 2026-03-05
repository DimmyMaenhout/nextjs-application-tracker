import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="flex justify-between my-6">
      <Link href="/">Home</Link>

      <nav>
        <ul className="flex gap-8">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/applications">Applications</Link>
          </li>
          <li>
            <Link href="/export">Export</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
