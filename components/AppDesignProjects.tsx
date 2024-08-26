import AppDesignProject from "@/components/AppDesignProject";

const appDesignProjects = [
  {
    title: "Airfilter",
    description:
      "Solving the problem of poor indoor air quality by filtering the air",
    imgUrl: "/assets/app-design/desktop/image-airfilter.jpg",
  },
  {
    title: "Eyecam",
    description:
      "Product that lets you edit your favorite photos and videos at any time",
    imgUrl: "/assets/app-design/desktop/image-eyecam.jpg",
  },
  {
    title: "Faceit",
    description:
      "Get to meet your favorite internet superstar with the faceit app",
    imgUrl: "/assets/app-design/desktop/image-faceit.jpg",
  },
  {
    title: "Todo",
    description: "A todo app that features cloud sync with light and dark mode",
    imgUrl: "/assets/app-design/desktop/image-todo.jpg",
  },
  {
    title: "Loopstudios",
    description: "A VR experience app made for Loopstudios",
    imgUrl: "/assets/app-design/desktop/image-loopstudios.jpg",
  },
];

const AppDesignProjects = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center space-y-10 pt-[96px] tablet:items-start tablet:space-y-8 desktop:flex-row desktop:flex-wrap desktop:gap-[30px] desktop:space-y-0">
        {appDesignProjects.map((project, index) => (
          <AppDesignProject
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
