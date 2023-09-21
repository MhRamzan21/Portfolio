import { motion } from 'framer-motion';

function Skill({ directionLeft, image, percentage }) {
  return (
    <div className='group realtive flex cursor-pointer'>
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <img
          src={image} // Use the 'image' prop as the source for the image
          alt='show'
          className='rounded-full border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale md:w-28 md:h-28 transition duration-300 ease-in-out'
        />
      </motion.div>
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 rounded-full z-0 md:w-28 md:h-28'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>{percentage}%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
