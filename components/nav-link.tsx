"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type NavLinkProps = {
  href: string;
};

export default function NavLink({
  href,
  children,
}: PropsWithChildren<NavLinkProps>) {
  const path = usePathname();
  return (
    <Link
      className={`${path === href ? "text-(--color-nav-active)" : "text-(--color-nav-inactive)"} font-extrabold text-transform: uppercase text-sm`}
      href={href}
    >
      {children}
    </Link>
  );
}
