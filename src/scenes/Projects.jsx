import { motion } from "framer-motion";
import logo from "../assets/skillImages/logo.png";

function Projects() {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 tracking-[20px] uppercase text-gray-500 text-2xl">
        Projects
      </h3>

      <motion.div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin">
        {projects.map((project, i) => (
          <motion.div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src={logo} alt="" />
            </motion.div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50 ">
                  Case study {i + 1} of {projects.length}:
                </span>{" "}
                Netflix Clone
              </h4>
              <p className="text-center text-lg md:text-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                architecto delectus quis, voluptatum pariatur non cupiditate
                dolorum illum voluptas corrupti, totam in molestias
                necessitatibus consectetur animi corporis adipisci facilis
                harum! Odio accusantium sapiente consequatur dicta ab alias quo
                delectus iste! Officiis illo laborum quisquam quibusdam, autem
                cum laudantium a earum.
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
