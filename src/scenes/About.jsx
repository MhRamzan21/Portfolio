
import { motion } from "framer-motion";
import pc from "../assets/pc.jpg";

function About() {
  return (
    <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="uppercase absolute top-24 tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0 , opacity: 1}}
        viewport={{ once: true }}
        className=" md:mb-0 flex-shrink-0"
      >
        <img
          src={pc}
          alt=""
          className="w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:h-[600px] xl:w-[500px]"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl font-bold ">Here is a <span className="underline decoration-[#f7ab0a]/50">little</span> background</h4>
        <p className="text-base">I come to NKU Technologies Plus with a year of freelancing experience, specializing in frontend development. During my freelancing stint, I had the chance to work on diverse projects, sharpening my skills in crafting attractive and user-friendly interfaces using React. Working hand-in-hand with UX/UI designers, I turned design ideas into captivating web apps, making sure users had seamless experiences. I'm well-versed in full-stack development, specializing in the MERN (MongoDB, Express.js, React, Node.js) stack. I've built scalable apps, designed RESTful APIs, and maintained MongoDB databases. Ensuring data security, I handle user authentication and state management with Redux. <br /> <span className="font-bold">"My mission is to deliver top-notch code and elevate user experiences through creative solutions."</span></p>
      </div>
    </motion.div>
  );
}

export default About;
