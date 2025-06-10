import Resume from "../assests/ai-resume.png"
import Image from "../assests/ai-image.png";
import Chat from "../assests/py-chat.png";
import CRUD from "../assests/crud-app.png";
const Projects = () => {
  return (
    <section className="flex flex-col justify-evenly bg-purple-600 py-4 h-full lg:h-[500px]">
      <div className="ml-9 profile-txt p-1">
        <h1 className="text-5xl font-hero-font border-b-4 w-[210px] py-3 border-projects-b-color">
          Projects :
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-3  justify-around items-center font-hero-font text-white text-[20px] mt-3">
        {/* Project Img and paragraphs ---> */}
        <div className="relative border-outer">
          {/* AI resume reviewer section ---> */}
          <div>
            <img src={Resume} className="h-[280px] w-[350px]" />
            <div className="projects-des h-3/4">
              <p>
                A Python-based AI resume reviewer to <br />
                analyze resumes and deliver real-time, <br />
                role-specific feedback on structure,
                <br />
                keywords, and relevance.
              </p>
              <div className="flex justify-center items-center h-1/4">
                <button
                  className="bg-blue-500 p-2 rounded-lg"
                  onClick={() => {
                    window.open(
                      "https://github.com/guru-212002/python-resume-reviewer",
                      "_blank"
                    );
                  }}
                >
                  Project-Link
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative border-outer">
          {/* Image-classifier section ---> */}
          <img src={Image} className="h-[280px] w-[350px]" />
          <div className="projects-des">
            <p>
              Intelligent predictions about the image's contents using the
              <br /> pre-trained MobileNetV2 model . It uses image
              preprocessing, top-3 class prediction, and a simple Streamlit
              interface for interaction.
            </p>
            <div className="flex justify-center items-center h-1/4">
              <button
                className="bg-blue-500 p-2 rounded-lg"
                onClick={() => {
                  window.open(
                    "https://github.com/guru-212002/py-image-classifier",
                    "_blank"
                  );
                }}
              >
                Project-Link
              </button>
            </div>
          </div>
        </div>
        <div className="relative border-outer">
          {/* Chat-App section ---> */}
          <img src={Chat} className="h-[280px] w-[350px]" />
          <div className="projects-des">
            <p>
              A real-world chat application build
              <br /> by using python and socketio,which <br />
              enables user to interact with eachother. This application is ideal
              for Live-chat systems, Real-time dashboards,etc..,
            </p>
            <div className="flex justify-center items-center h-1/4">
              <button
                className="bg-blue-500 p-2 rounded-lg"
                onClick={() => {
                  window.open(
                    "https://github.com/guru-212002/py-chat-app",
                    "_blank"
                  );
                }}
              >
                Project-Link
              </button>
            </div>
          </div>
        </div>
        <div className="relative border-outer">
          {/* CRUD-App section ---> */}
          <img src={CRUD} className="h-[280px] w-[350px]" />
          <div className="projects-des">
            <p>
              React based CRUD app that Create,Read, Update,Delete data in form
              of Product Card in Product Store and MongoDB is used for data
              management.Rest-API integration for backend and frontend requests.
            </p>
            <div className="flex justify-center items-center h-1/4">
              <button
                className="bg-blue-500 p-2 rounded-lg"
                onClick={() => {
                  window.open(
                    "https://github.com/guru-212002/react-app-1",
                    "_blank"
                  );
                }}
              >
                Project-Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;