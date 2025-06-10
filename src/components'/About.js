import AboutImg from "../assests/about.png";

const About = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-evenly items-center lg:items-stretch font-hero-font bg-purple-400">
      {/*Image section ---> */}
      <div className="w-1/2">
        <img src={AboutImg} />
      </div>
        <div className="w-1/2 flex flex-col justify-around text-white gap-4">
          <div>
            {/* About Me section ---> */}
            <h1 className="text-4xl mb-2 pb-2 w-[180px] profile-txt">
              About Me :
            </h1>
            <p className="text-3xl">
              I'am Innovative Engineer With A Strong Foundation In
              Problem-Solving, Analytical Thinking, And Technical Expertise,
              Seeking Opportunities In The IT Sector.
            </p>
          </div>
          <div>
            {/* Tech-Skills section ---> */}
            <h1 className="text-4xl mb-2 pb-2 w-[190px] profile-txt">
              Tech Skills:
            </h1>
            <p className="text-3xl">
              I'am a Innovative Engineer With A Strong Foundation In
              Problem-Solving, Analytical Thinking, And Technical Expertise,
              Seeking Opportunities In The IT Sector.
            </p>
          </div>
        </div>
    </section>
  );
};

export default About;
