import Link from "next/link";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const pathname = usePathname();
  return (
    <div className="absolute inset-0 top-[96px] z-[9999] h-full w-full bg-[rgba(0,0,0,0.65)] text-nav-mobile uppercase text-white tablet:hidden">
      <div className="bg-black">
        <nav>
          <ul className="flex flex-col space-y-8 px-6 py-12">
            <li>
              <Link
                href="/our-company"
                className={clsx(pathname === "/our-company" && "active")}
              >
                Our Company
              </Link>
            </li>
            <li>
              <Link
                href="/locations"
                className={clsx(pathname === "/locations" && "active")}
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={clsx(pathname === "/contact" && "active")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
