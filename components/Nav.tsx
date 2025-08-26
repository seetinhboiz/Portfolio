"use client"

import { access } from "fs";
import Link from "next/link"
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'home',
        pathname: '/'
    },
    {
        name: 'services',
        pathname: '/services'
    },
    {
        name: 'resume',
        pathname: '/resume'
    },
    {
        name: 'work',
        pathname: '/work'
    },
    {
        name: 'contact',
        pathname: '/contact'
    }
]

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">{links.map((link, index) => {
            return (
                <Link
                    href={link.pathname}
                    key={index}
                    className={`${link.pathname === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
                >
                    {link.name}
                </Link>
            )
        })}</nav>
    )
}

export default Nav;