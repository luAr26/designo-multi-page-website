import Link from "next/link";
import FacebookIcon from "@/public/assets/shared/desktop/icon-facebook.svg";
import YoutubeIcon from "@/public/assets/shared/desktop/icon-youtube.svg";
import TwitterIcon from "@/public/assets/shared/desktop/icon-twitter.svg";
import PinterestIcon from "@/public/assets/shared/desktop/icon-pinterest.svg";
import InstagramIcon from "@/public/assets/shared/desktop/icon-instagram.svg";

const SocialLinks = () => {
  return (
    <ul className="mt-10 flex items-center justify-center space-x-4">
      <li>
        <Link href="/">
          <span className="sr-only">Facebook</span>
          <FacebookIcon className="h-6 w-6 text-primary transition-colors hover:text-primary-light" />
        </Link>
      </li>
      <li>
        <Link href="/">
          <span className="sr-only">Youtube</span>
          <YoutubeIcon className="h-6 w-6 text-primary transition-colors hover:text-primary-light" />
        </Link>
      </li>
      <li>
        <Link href="/">
          <span className="sr-only">Twitter</span>
          <TwitterIcon className="h-5 w-6 text-primary transition-colors hover:text-primary-light" />
        </Link>
      </li>
      <li>
        <Link href="/">
          <span className="sr-only">Pinterest</span>
          <PinterestIcon className="h-6 w-6 fill-primary transition-colors hover:fill-primary-light" />
        </Link>
      </li>
      <li>
        <Link href="/">
          <span className="sr-only">Instagram</span>
          <InstagramIcon className="h-6 w-6 text-primary transition-colors hover:text-primary-light" />
        </Link>
      </li>
    </ul>
  );
};

export default SocialLinks;
