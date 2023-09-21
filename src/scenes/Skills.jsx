import {motion} from 'framer-motion'
import Skill from '../components/Skill'
import skillsData from '../Data/skills'

function Skills() {
  return (
    <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
     className='h-screen flex relative flex-col text-center md:text-left xl:flex-row mx-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className="absolute uppercase top-24 tracking-[20px] text-gray-500 text-2xl">Skills</h3>
        <h3 className='absolute top-36 tracking-[3px] uppercase text-gray-500 text-sm'>Hover over a skills for currenct proficiency</h3>

        <div className='grid grid-cols-4 gap-5'>
        {skillsData.map((skill, index) => (
            <Skill key={index} image={skill.image} percentage={skill.percentage}/>
        ))}
        </div>
     </motion.div>
  )
}

export default Skills