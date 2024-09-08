import Link from "next/link";

const FooterNav = () => {
  return (
    <nav className="mt-8 text-white tablet:mt-0">
      <ul className="flex flex-col items-center space-y-8 text-nav uppercase tablet:flex-row tablet:space-x-[42px] tablet:space-y-0">
        <li>
          <Link href="/our-company" className="hover:underline">
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

export default FooterNav;
