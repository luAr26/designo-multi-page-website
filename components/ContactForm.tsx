"use client";
import { useFormik } from "formik";
import { twMerge } from "tailwind-merge";
import * as Yup from "yup";
import toast from "react-hot-toast";
import IconError from "@/public/assets/contact/desktop/icon-error.svg";

const ContactForm = () => {
  // Formik logic
  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "", message: "" },
    // form validation
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be 2 characters or more.")
        .max(25, "Name must be 25 characters or less.")
        .required("Can't be empty."),
      email: Yup.string()
        .email("Please use a valid email address.")
        .required("Can't be empty."),
      phone: Yup.string().required("Can't be empty."),
      message: Yup.string()
        .min(10, "Message must be 10 characters or more.")
        .max(140, "Message must be 140 characters or less.")
        .required("Can't be empty."),
    }),
    onSubmit: (values) => {
      toast.success(
        `Thank you ${values.name}, your message has sent successfully!`,
      );
      formik.resetForm();
    },
  });
  return (
    <div className="tablet:container">
      <div className="contact-hero-container flex flex-col items-center bg-primary px-6 py-[72px] text-white tablet:items-start tablet:rounded-[15px] tablet:px-[58px] tablet:py-[71px] desktop:flex-row desktop:items-center desktop:pb-[54px] desktop:pl-[95px] desktop:pr-[96px] desktop:pt-[55px]">
        <div className="text-center tablet:text-left">
          <h2 className="text-h1-sm tablet:text-h1">Contact Us</h2>
          <p className="mt-6 max-w-[70ch] text-body-sm tablet:text-body desktop:pr-[95px]">
            Ready to take it to the next level? Let&apos;s talk about your
            project or idea and find out how we can help your business grow. If
            you are looking for unique digital experiences that&apos;s relatable
            to your users, drop us a line.
          </p>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="mt-12 flex w-full flex-col space-y-[25px] desktop:mt-0 desktop:w-[380px] desktop:shrink-0"
        >
          <div className="relative">
            <label htmlFor="name">
              <span className="sr-only">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              className="form-input"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? (
              <p className="error-message">
                {formik.errors.name}
                <IconError className="h-5 w-5 text-primary" />
              </p>
            ) : null}
          </div>
          <div className="relative">
            <label htmlFor="email">
              <span className="sr-only">Email address</span>
            </label>
            <input
              type="email"
              placeholder="Email Address"
              id="email"
              name="email"
              className="form-input"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <p className="error-message">
                {formik.errors.email}
                <IconError className="h-5 w-5 text-primary" />
              </p>
            ) : null}
          </div>

          <div className="relative">
            <label htmlFor="phone">
              <span className="sr-only">Phone</span>
            </label>
            <input
              type="text"
              placeholder="Phone"
              id="phone"
              name="phone"
              className="form-input"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.phone && formik.touched.phone ? (
              <p className="error-message">
                {formik.errors.phone}
                <IconError className="h-5 w-5 text-primary" />
              </p>
            ) : null}
          </div>
          <div className="relative">
            <label htmlFor="message">
              <span className="sr-only">Message</span>
            </label>
            <textarea
              placeholder="Your Message"
              id="message"
              name="message"
              className={twMerge("form-input", "h-[102px]")}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.errors.message && formik.touched.message ? (
              <p className="error-message">
                {formik.errors.message}
                <IconError className="h-5 w-5 text-primary" />
              </p>
            ) : null}
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
