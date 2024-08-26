import GraphicDesignProject from "@/components/GraphicDesignProject";

const graphicDesignProjects = [
  {
    title: "Tim Brown",
    description: "A book cover designed for Tim Brown's new release, 'Change'",
    imgUrl: "/assets/graphic-design/desktop/image-change.jpg",
  },
  {
    title: "Boxed Water",
    description: "A simple packaging concept made for Boxed Water",
    imgUrl: "/assets/graphic-design/desktop/image-boxed-water.jpg",
  },
  {
    title: "Science!",
    description: "A poster made in collaboration with the Federal Art Project",
    imgUrl: "/assets/graphic-design/desktop/image-science.jpg",
  },
];

const AppDesignProjects = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center space-y-10 pt-[96px] tablet:items-start tablet:space-y-8 desktop:flex-row desktop:flex-wrap desktop:gap-[30px] desktop:space-y-0">
        {graphicDesignProjects.map((project, index) => (
          <GraphicDesignProject
            key={index}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default AppDesignProjects;
