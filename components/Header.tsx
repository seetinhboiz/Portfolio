import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 pl-4 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="#">
                    <h1 className="text-4xl font-semibold">Trong Nghia<span className="text-accent">.</span></h1>
                </Link>

                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/#">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}

export default Header;