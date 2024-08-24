import Link from "next/link";

const LargeNav = () => {
  return (
    <nav>
      <ul className="hidden items-center justify-end space-x-[42px] text-nav uppercase tablet:flex">
        <li>
          <Link href="" className="hover:underline">
            Our Company
          </Link>
        </li>
        <li>
          <Link href="" className="hover:underline">
            Locations
          </Link>
        </li>
        <li>
          <Link href="" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LargeNav;
