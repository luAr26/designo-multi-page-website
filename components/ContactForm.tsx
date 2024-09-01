import { twMerge } from "tailwind-merge";

const ContactForm = () => {
  return (
    <div className="tablet:container">
      <div className="flex flex-col items-center bg-primary px-6 py-[72px] text-white tablet:items-start tablet:rounded-[15px] tablet:px-[58px] tablet:py-[71px] desktop:flex-row desktop:items-center desktop:pb-[54px] desktop:pl-[95px] desktop:pr-[96px] desktop:pt-[55px]">
        <div className="text-center tablet:text-left">
          <h2 className="text-h1-sm tablet:text-h1">Contact Us</h2>
          <p className="mt-6 max-w-[70ch] text-body-sm tablet:text-body desktop:pr-[95px]">
            Ready to take it to the next level? Let&apos;s talk about your
            project or idea and find out how we can help your business grow. If
            you are looking for unique digital experiences that&apos;s relatable
            to your users, drop us a line.
          </p>
        </div>
        <form className="mt-12 flex w-full flex-col space-y-[25px] desktop:mt-0 desktop:w-[380px] desktop:shrink-0">
          <div>
            <label htmlFor="name">
              <span className="sr-only">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="email">
              <span className="sr-only">Email address</span>
            </label>
            <input
              type="email"
              placeholder="Email Address"
              id="email"
              name="email"
              className="form-input"
            />
          </div>

          <div>
            <label htmlFor="phone">
              <span className="sr-only">Phone</span>
            </label>
            <input
              type="text"
              placeholder="Phone"
              id="phone"
              name="phone"
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="message">
              <span className="sr-only">Message</span>
            </label>
            <textarea
              placeholder="Your Message"
              id="message"
              name="message"
              className={twMerge("form-input", "h-[102px]")}
            ></textarea>
          </div>
          <div className="flex justify-center pt-[15px] tablet:justify-end tablet:pt-0">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
