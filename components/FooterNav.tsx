import Link from "next/link";

const FooterNav = () => {
  return (
    <nav className="mt-8 tablet:mt-0">
      <ul className="flex flex-col items-center space-y-8 text-nav uppercase tablet:flex-row tablet:space-x-[42px] tablet:space-y-0">
        <li>
          <Link href="">Our Company</Link>
        </li>
        <li>
          <Link href="">Locations</Link>
        </li>
        <li>
          <Link href="">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
