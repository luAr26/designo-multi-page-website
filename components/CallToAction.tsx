import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="rounded-[15px] bg-primary py-16 text-center">
      <h2 className="text-h1-sm">
        Let&apos;s talk about <br />
        your project
      </h2>
      <p className="mt-4 px-6 text-body-sm">
        Ready to take it to the next level? Contact us today and find out how
        our expertise can help your business grow.
      </p>
      <Link href="" className="btn mt-8 inline-block">
        Get in touch
      </Link>
    </div>
  );
};

export default CallToAction;
