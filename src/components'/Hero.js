import ProfileImage from "../assests/hero.png";
import { SiIndeed } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Hero = (props) => {
  return (
    <section className="flex flex-col-reverse h-[800px] lg:flex-row justify-evenly items-center lg:items-stretch bg-purple-600">
      {/*Name and role section starts---> */}
      <div className="flex flex-col justify-center w-1/2 ml-14 font-hero-font">
        {/* <---- Name-section ---> */}
        <h1 className="text-white text-6xl font-hero-font">
          <div className="">
            <p>Hi,</p>
            <span className="mr-6">I am</span>
            <span className="profile-txt block md:inline mt-3">
              Guru
              <span className="profile-txt block md:inline">moorthi</span>
            </span>
          </div>
          {/* <---- role section ---> */}
          <p className="text-4xl mt-4 ">{props.role}</p>
        </h1>
        {/* <---- Name and role section ends*/}
        {/* Work-links-starts ---> */}
        <div className="flex w-1/2 mt-12 text-white">
          {/* <---- Indeed-links ---> */}
          <a href="#" className="mr-5 text-3xl hover:text-black">
            <SiIndeed size={40} />
          </a>
          {/* <---- Naukri-links ---> */}
          <a href="#" className="mr-5 hover:text-black">
            <SiIndeed size={40} />
          </a>
          {/* <---- Linkedin-links ---> */}
          <a href="#" className="mr-5 hover:text-black">
            <FaLinkedin size={40} />
          </a>
          {/* <---- Git-Hub-links ---> */}
          <a href="#" className="mr-5 hover:text-black">
            <FaGithub size={40} />
          </a>
        </div>
        {/* <-- Work-links-ends*/}
      </div>
      <img src={ProfileImage} className="w-1/2" />
    </section>
  );
};

export default Hero;
