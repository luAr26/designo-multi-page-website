import Image from "next/image";
import Link from "next/link";

const FooterLogo = () => {
  return (
    <div className="flex w-full justify-center border-b-[1px] border-[rgba(255,255,255,0.1)] pb-8 tablet:block tablet:w-auto tablet:border-none tablet:pb-0">
      <Link href="/" className="relative block h-[27px] w-[202px]">
        <Image
          src="/assets/shared/desktop/logo-light.png"
          fill
          alt="Designo Logo"
          sizes="202px"
        />
      </Link>
    </div>
  );
};

export default FooterLogo;
