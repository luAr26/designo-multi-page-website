const ServiceHero = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-primary tablet:bg-[transparent]">
      <div className="container">
        <div className="tablet:rounded-[15px] tablet:bg-primary">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
