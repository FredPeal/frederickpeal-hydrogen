import ImageText from "../components/ImageText";
import ImageText1 from "../assets/foto.png";
import "../output.css";
import Project1 from "../assets/image-1.png";
import Project2 from "../assets/1-Imagen-App.png";
import Column from "../components/Column";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Profesional",
      text: `Currently working for MemodApp as a Backend Developer. I'm responsible for the development of the backend of the application, and the integration of the frontend with the backend.`,
      image: Project1,
    },
    {
      id: 2,
      title: "Open Source",
      text: `I'm a big fan of open source, Since 2019 I've been contributing to the open source community, I've contributed to the following projects: Kanvas Ecosystem, Canvas-core, Workflows`,
      image: Project2,
    },
  ];
  return (
    <div className="">
      <div className="lg:py-20 md:py-20 bg-black divide-y-4">
        <ImageText
          image={ImageText1}
          width={617}
          height={642}
          title="Frederick Peñaló"
          subtitle="Software Engineer"
          text="I'm a Backend Developer, Lover all things tech, and a huge fan of the outdoors. I'm currently working on a few projects, and I'm always looking for new opportunities. Feel free to reach out to me on any of my socials, or send me an email."
        ></ImageText>
      </div>
      <div className="mt-[51px] md:ml-[125px] lg:ml-[125px] lg:mr-[125px] md:mr-[125px]">
        <div className="flex flex-row justify-between flex-wrap xs:flex-col sm:flex-col flex-wrap">
          <div>
            <h1 className="text-white text-[79.99px]">Projects</h1>
          </div>
          <div>
            <a href="#" className="text-[#FEED73] text-[33.89px]">
              All Projects
            </a>
          </div>
        </div>
        <div className="flex flex-row justify-between flex-wrap">
          {projects.map((project) => (
            <div>
              <Column
                title={project["title"]}
                text={project["text"]}
                image={project["image"]}
              ></Column>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[158px] md:ml-[125px] lg:ml-[125px] lg:mr-[125px] md:mr-[125px]">
        <div className="flex flex-row justify-between flex-wrap">
          <div>
            <h1 className="text-white text-[79.99px]">My latest blog posts</h1>
          </div>
          <div>
            <a href="#" className="text-[#FEED73] text-[33.89px]">
              All Articles
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
