const FooterAddress = () => {
  return (
    <address className="mt-10 text-center text-body not-italic text-[rgba(255,255,255,0.50)] tablet:mt-0 tablet:flex tablet:justify-between tablet:text-left">
      <p className="tablet:w-[223px]">
        <span className="font-bold">Designo Central Office</span> <br />
        3886 Wellington Street <br />
        Toronto, Ontario M9C 3J5
      </p>
      <p className="mt-10 tablet:mt-0 tablet:w-[223px]">
        <span className="font-bold">Contact Us (Central Office)</span>
        <br />
        P : +1 253-863-8967 <br />M : contact@designo.co
      </p>
    </address>
  );
};

export default FooterAddress;
