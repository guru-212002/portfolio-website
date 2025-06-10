import resume from "../assests/resume.jpg";

const Resume = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-evenly items-center lg:items-stretch p-3 bg-purple-400 font-hero-font">
      {/*Resume Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center p-4">
        <img
          src={resume}
          className="h-[530px] w-full lg:w-[650px] border-purple-700 border-[15px] rounded-lg"
        />
      </div>
      <div className="w-1/2 p-14 flex justify-center items-center">
        {/*Resume download Section */}
        <div>
          <h1 className="text-5xl mb-5 pb-2 w-[250px] profile-txt">Resume:</h1>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-7">
            <p className="text-3xl">Click Button to Download Resume</p>
              <a  href={"/guru-resume.pdf"} download className="bg-blue-500 p-2 rounded-lg hover:bg-blue-500 text-white">
                Download
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
