const AboutHero = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="tablet:container">{children}</div>;
};

export default AboutHero;
