import Link from "next/link";

const LargeNav = () => {
  return (
    <nav>
      <ul className="hidden items-center justify-end space-x-[42px] text-nav uppercase tablet:flex">
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

export default LargeNav;
