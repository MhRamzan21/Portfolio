import ProfileImage from "../assets/ProfileImage.jpg"
import {motion } from 'framer-motion'

function ExperienceCard({logo, workedAs, company, tech, start, end, summary}) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 mt-20 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.div
        initial={{y:-100, opacity: 0 }}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        >
        
        <img className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' src={logo} alt='logo'/>
        </motion.div>
        <div className='px-0 md:px-10 overflow-y-auto'> 
            <h4 className='text-4xl font-light'>{workedAs}</h4>
            <p className='font-bold text-2xl mt-1'>{company}</p>
            <div className='flex space-x-2 my-2'>
            {tech.map((e) => (
                <img src={e} alt='kia' className='h-10 w-10 rounded-full object-cover'/>
            ))}
            </div>
            <p className='uppercase py-10 text-gray-500'>{start} - {end}</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
            {summary.map((lst) => (
                <li>{lst}</li>
            ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard