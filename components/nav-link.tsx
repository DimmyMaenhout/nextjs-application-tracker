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
    <Link className={`${path === href ? "font-bold" : undefined}`} href={href}>
      {children}
    </Link>
  );
}
