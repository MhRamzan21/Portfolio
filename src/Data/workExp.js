
import react from "../assets/skillImages/react.jpg"
import javascript from "../assets/skillImages/javascript.png"
import tailwind from "../assets/skillImages/tailwind.png"
import fiver from "../assets/skillImages/fiver.png"
import nku from "../assets/skillImages/nku.jpeg"
import bootstrap from "../assets/skillImages/bootstrap.jpg"
import css from '../assets/skillImages/css.jpg'
import node from '../assets/skillImages/node.jpg'
import mongo from '../assets/skillImages/mongo.jpg'

const Experience = [
    {
        logo: fiver,
        workedAs: 'Web Developer',
        company: 'Freelance',
        tech: [ react, javascript, bootstrap, css ],
        start: '10-Sep-2022',
        end: '10-sep-2023',
        summary: [
            'Developed FrontEnd for the High-End Applications.',
            'Worked with professional in the industry.',
            'Designed applications with tailwind.',
            'Built responsive, modern UIs with React.',
            'Collaborated with designers to bring designs to life.'
        ]
    },
    {
        logo: nku,
        workedAs: 'Full Stack Developer',
        company: 'NKU Technologies',
        tech: [ react, javascript, tailwind, node, mongo ],
        start: '15-Sep-2023',
        end: 'Present',
        summary: [
            'Developed full-stack MERN apps for scalability.',
            'Managed MongoDB databases for data integrity.',
            'Implemented secure user authentication.',
            'Utilized Redux or MobX for state management.',
            'Deployed apps to AWS, Heroku, or Firebase.',
            'Ensured code quality with testing.'
        ]
    },
]

export default Experience