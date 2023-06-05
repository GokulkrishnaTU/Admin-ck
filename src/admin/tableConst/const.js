import { FaUsers, FaBalanceScale, FaUserSecret, FaUserCircle, FaCubes, FaMoneyBillAlt, FaRetweet, FaShoppingCart, FaUserGraduate, FaSchool, FaBook } from 'react-icons/fa'
import { MdOutlineCategory, MdPermContactCalendar } from 'react-icons/md'
import { BsQuestionDiamond, BsTrophy, BsPercent, BsFillBriefcaseFill } from 'react-icons/bs'

import { RiBarChart2Fill, RiBankFill, RiContactsBook2Fill } from 'react-icons/ri'
import { IoFastFoodSharp, IoSettings } from 'react-icons/io5'
import { MdOutlineMedicalServices } from 'react-icons/md'
import { AiTwotoneSound } from 'react-icons/ai'
import { MdPlace } from 'react-icons/md'
import { BiCategory } from 'react-icons/bi'
import { FaCalendar } from 'react-icons/fa'


const colors = {
    "white": '#ffffff',
    "black": '#000000',
    "primary": '#46a995',
    "disabled": '#c4c4c4',
    "grey": '#999999',
    "inputborder": '#ddd',
    "green": '#00a658',
    "red": '#d8505a',
    "info": '#5fcff5',
    "warning": '#fcb819',
    "white_smoke": '#f4f3f3',
    "blackish_grey": "#e9edf0",
    "yellowishGreen": "#b3c100",
    "blue": "#1c4e80",
    "lightViolet": "#488a99",
    "brown": "#484848",
    "offWhite": "#c6d4fc",
    "lightGrey": "#e3e3e3",
    "transparentBlack": "#000000cf",
    "bg": "#edf1eb",
    "dark_grey": " #707070"



}
const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}
const role = [

    {
        "id": 2,
        "key": "/Examinees",
        "name": "Examinees",
        "icon": <FaUsers />,

    },
    {
        "id": 3,
        "key": "/ExamCategory",
        "name": "Exam Category",
        "icon": <MdOutlineCategory />,

    },
    {
        "id": 1,
        "key": "/Position",
        "name": "Job Position",
        "icon": <BsFillBriefcaseFill />,

    },

    {
        "id": 4,
        "key": "/Questions",
        "name": "Add Questions",
        "icon": <BsQuestionDiamond />,

    },
    {
        "id": 5,
        "key": "/Cutoff",
        "name": "Cutoff",
        "icon": <BsPercent />,

    },
    {
        "id": 6,
        "key": "/Instructions",
        "name": "Instructions",
        "icon": <FaBook />,

    },
    {
        "id": 7,
        "key": "/Resultlist",
        "name": "Results",
        "icon": <BsTrophy />,

    },

]

export {
    colors,
    size,
    role
}