import { motion } from "framer-motion";
import ExperienceCard from "../components/ExperienceCard";
import Experience from "../Data/workExp"

function WorkExperience() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="h-screen relative flex items-center flex-col overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto "
    >
      <h3 className=" top-24 absolute uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="  w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
      {Experience.map((exp, index) => (
        <ExperienceCard key={index} logo={exp.logo} workedAs={exp.workedAs} company={exp.company} tech={exp.tech} start={exp.start} end={exp.end} summary={exp.summary}/>
      ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;