import Link from "next/link";
import { twMerge } from "tailwind-merge";

const CallToAction = () => {
  return (
    <div className="call-to-action-container rounded-[15px] bg-primary py-16 text-center text-white tablet:py-[57px] desktop:flex desktop:items-center desktop:justify-between desktop:px-[95px] desktop:py-[72px] desktop:text-left">
      <div>
        <h2
          className={twMerge(
            "text-h1-sm tablet:text-h2",
            "tablet:leading-[1] tablet:tracking-[0px]",
          )}
        >
          Let&apos;s talk about <br />
          your project
        </h2>
        <p className="mx-auto mt-4 max-w-[327px] px-6 text-body-sm tablet:mx-auto tablet:max-w-[500px] tablet:text-body desktop:max-w-[459px] desktop:px-0">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <div>
        <Link href="/contact" className="btn mt-8 inline-block desktop:mt-0">
          Get in touch
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
