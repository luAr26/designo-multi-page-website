import Feature from "@/components/Feature";

type Feature = {
  title: string;
  imageUrl: string;
  description: string;
};

const features: Feature[] = [
  {
    title: "Passionate",
    imageUrl: "/assets/home/desktop/illustration-passionate.svg",
    description:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    title: "Resourceful",
    imageUrl: "/assets/home/desktop/illustration-resourceful.svg",
    description:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },

  {
    title: "Friendly",
    imageUrl: "/assets/home/desktop/illustration-friendly.svg",
    description:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

const Features = () => {
  return (
    <div className="container">
      <div className="flex flex-col space-y-20 pt-[120px]">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
