import WebDesignProject from "./WebDesignProject";

const webDesignProjects = [
  {
    title: "Express",
    description: "A multi-carrier shipping website for ecommerce businesses",
    imgUrl: "/assets/web-design/desktop/image-express.jpg",
  },
  {
    title: "Transfer",
    description:
      "Site for low-cost money transfers and sending money within seconds",
    imgUrl: "/assets/web-design/desktop/image-transfer.jpg",
  },
  {
    title: "Photon",
    description:
      "A state-of-the-art music player with high-resolution audio and DSP effects",
    imgUrl: "/assets/web-design/desktop/image-photon.jpg",
  },
  {
    title: "Builder",
    description:
      "Connects users with local contractors based on their location",
    imgUrl: "/assets/web-design/desktop/image-builder.jpg",
  },
  {
    title: "Blogr",
    description:
      "Blogr is a platform for creating an online blog or publication",
    imgUrl: "/assets/web-design/desktop/image-blogr.jpg",
  },
  {
    title: "Camp",
    description:
      "Get expert training in coding, data, design, and digital marketing",
    imgUrl: "/assets/web-design/desktop/image-camp.jpg",
  },
];

const WebDesignProjects = () => {
  return (
    <div className="container">
      {webDesignProjects.map((project, index) => (
        <WebDesignProject
          key={index}
          title={project.title}
          description={project.description}
          imgUrl={project.imgUrl}
        />
      ))}
    </div>
  );
};

export default WebDesignProjects;
