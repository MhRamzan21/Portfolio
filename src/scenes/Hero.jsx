import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../components/BackgroundCircles";
import { motion } from "framer-motion";
import ProfileImage from "../assets/ProfileImage.jpg"

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, Its Muhammad Ramzan",
      "Web Developer",
      "<Coding is class={style.PASSION}/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={ProfileImage}
        alt="ProfilePicture"
      />
      <div className="z-20">
        <h2 className=" text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className=" text-5xl lg:text-6x1 font-semibold px-10">
          <span className="mr-3 ">{text}</span>
          <Cursor cursorColor="red" />
        </h1>
        <div className="pt-5">
            <a href='#about'>
          <button className="heroButton">About</button>
            </a>
            <a href='#experience'>
          <button className="heroButton">Experience</button>
            </a>
            <a href='#skills'>
          <button className="heroButton">Skills</button>
            </a>
            <a href='#projects'>
          <button className="heroButton">Projects</button>
            </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
