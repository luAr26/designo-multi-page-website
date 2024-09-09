import Link from "next/link";
import { twMerge } from "tailwind-merge";

const LargeNav = ({ pathName }: { pathName: string }) => {
  console.log(pathName);
  return (
    <nav>
      <ul className="hidden items-center justify-end space-x-[42px] text-nav uppercase tablet:flex">
        <li>
          <Link
            href="/our-company"
            className={twMerge(
              "hover:underline",
              pathName === "/our-company" && "underline",
            )}
          >
            Our Company
          </Link>
        </li>
        <li>
          <Link href="/locations" className="hover:underline">
            Locations
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LargeNav;
