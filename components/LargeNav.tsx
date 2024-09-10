import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const LargeNav = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="hidden items-center justify-end space-x-[42px] text-nav uppercase tablet:flex">
        <li>
          <Link
            href="/our-company"
            className={clsx(
              "hover:underline",
              pathname === "/our-company" && "active",
            )}
          >
            Our Company
          </Link>
        </li>
        <li>
          <Link
            href="/locations"
            className={clsx(
              "hover:underline",
              pathname === "/locations" && "active",
            )}
          >
            Locations
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={clsx(
              "hover:underline",
              pathname === "/contact" && "active",
            )}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LargeNav;
