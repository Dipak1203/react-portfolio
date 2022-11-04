import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import AVT1 from '../assets/home.jpg'
import AVT2 from '../assets/about.jpg'
import IMG1 from '../assets/portfolio1.png'
import IMG2 from '../assets/portfolio2.png'
import IMG3 from '../assets/portfolio3.png'
import IMG4 from '../assets/portfolio4.png'
import IMG5 from '../assets/portfolio5.png'
import IMG6 from '../assets/portfolio6.png'



const contactData = [
  {
    id: 1,
    type: "Email",
    url: "mailto:dipakkumal673@gmail.com",
    icon: <MdOutlineEmail />
  }, {
    id: 2,
    type: "Messenger",
    url: "https://m.me/dipak.kumal.9235",
    icon: <RiMessengerLine />
  }, {
    id: 3,
    type: "Whatsapp",
    url: "https://api.whatsapp.com/send?phone=+9779806268570",
    icon: <BsWhatsapp />
  }
]

const portfolioData = [
  {
    id: 1,
    img: IMG1,
    title: "School Website",
    github: "https://dipak1203.github/",
    live: "https://dipak1203.github/ads"
  },
  {
    id: 2,
    img: IMG2,
    title: "Clinic Site ",
    github: "https://dipak1203.github/",
    live: "https://dipak1203.github/ads"
  },
  {
    id: 3,
    img: IMG3,
    title: "Kcoder site",
    github: "https://dipak1203.github/",
    live: "https://dipak1203.github/ads"
  },
  {
    id: 4,
    img: IMG4,
    title: "Random number Guess Game",
    github: "https://dipak1203.github/",
    live: "https://dipak1203.github/ads"
  },
  {
    id: 5,
    img: IMG5,
    title: "Calculator App",
    github: "https://dipak1203.github/",
    live: "https://dipak1203.github/ads"
  },
  {
    id: 6,
    img: IMG6,
    title: "Simple Landing Page",
    github: "https://dipak1203.github/",
    live: "https://dipak1203.github/ads"
  }
]


const testimonialData = [
  {
    id:1,
    name:"Nabin Chaudhary",
    review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nostrum quidem eum? Numquam nesciunt id veritatis amet? Vero enim maxime velit porro, tempore cum obcaecati pariatur autem! Beatae, praesentium quos.",
    avatar:AVT1
  },
  {
    id:2,
    name:"Ganga Thapa",
    review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nostrum quidem eum? Numquam nesciunt id veritatis amet? Vero enim maxime velit porro, tempore cum obcaecati pariatur autem! Beatae, praesentium quos.",
    avatar:AVT2
  },
  {
    id:3,
    name:"Vikram Rana",
    review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nostrum quidem eum? Numquam nesciunt id veritatis amet? Vero enim maxime velit porro, tempore cum obcaecati pariatur autem! Beatae, praesentium quos.",
    avatar:AVT1
  },
  {
    id:4,
    name:"Shuvam Sharma",
    review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nostrum quidem eum? Numquam nesciunt id veritatis amet? Vero enim maxime velit porro, tempore cum obcaecati pariatur autem! Beatae, praesentium quos.",
    avatar:AVT2
  }
]

export {contactData,portfolioData,testimonialData}