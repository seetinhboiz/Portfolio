"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";

const links = [
  {
    name: "home",
    pathname: "/",
  },
  {
    name: "resume",
    pathname: "/resume",
  },
  {
    name: "contact",
    pathname: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle className="sr-only"></SheetTitle>
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" className="text-4xl font-semibold">
            <h1>
              Trong Nghia<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.pathname}
                key={index}
                className={`${
                  link.pathname === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
