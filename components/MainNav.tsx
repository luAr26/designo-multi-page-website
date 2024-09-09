"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";

import HamburgerIcon from "@/public/assets/shared/mobile/icon-hamburger.svg";
import CloseIcon from "@/public/assets/shared/mobile/icon-close.svg";
import MobileMenu from "@/components/MobileMenu";
import LargeNav from "@/components/LargeNav";

const MainNav = ({ pathName }: { pathName: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  function handleClick() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }

  return (
    <div className="container">
      <div className="flex items-center justify-between pb-[34px] pt-[35px] tablet:py-16">
        <Link href="/" className="relative h-[27px] w-[202px]">
          <Image
            src="/assets/shared/desktop/logo-dark.png"
            fill
            alt="Designo Logo"
          />
        </Link>
        <LargeNav pathName={pathName} />
        <button className="tablet:hidden" onClick={handleClick}>
          <span className="sr-only">Menu</span>
          {isMenuOpen ? (
            <CloseIcon className="h-5 w-5 fill-black" />
          ) : (
            <HamburgerIcon className="h-5 w-6 fill-black" />
          )}
        </button>
        {isMenuOpen && createPortal(<MobileMenu />, document.body)}
      </div>
    </div>
  );
};

export default MainNav;
