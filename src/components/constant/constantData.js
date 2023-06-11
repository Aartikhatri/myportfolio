import { FaGithub , FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
 
// project data object
import ecommerce from '../../assets/istockphoto-1249219777-612x612.jpg'
import dream11 from '../../assets/Dream112.webp'
import videoPlay from "../../assets/video-logo2.png"
import portfolio from  "../../assets/Portfolio.png"
import CodeEditor from "../../assets/CodeEditor.png"

 export const NavListLink = [
    {
        id :1 ,
        link : "Home"
    },
    {
        id :2 ,
        link : "About"
    },
    {
        id : 3,
        link : "Portfolio"
    },
    {
        id : 4,
        link : "Experience"
    },
    {
        id : 5,
        link : "Contact"
    }
]

// social accout data link
export const socialId = [
    {
        id : 1,
        child : (
            <>
            Linkdin <FaLinkedin size={30} />
            </>
        ),
        href : "https://www.linkedin.com/in/aarti-khatri-596a68259/" ,
        style : "rounded-tr-md"
    },
    {
        id :2 ,
        child : (
            <>
            Github <FaGithub size={30} />
            </>
        ),
        href : "https://github.com/Aartikhatri" ,
   
    },
    {
        id : 3,
        child : (
            <>
            Mail <HiOutlineMail  size={30} />
            </>
        ),
        href : "mailto:aartikhatri223@gmail.com" ,
       
    },
    {
        id : 4,
        child : (
            <>
            Resume <BsFillPersonLinesFill size={30} />
            </>
        ),
        href : "" ,
        style : "rounded-br-md",
        download : true
    }
]



//  project object
export const projects = [
    {
        id: 1,
        title : "Ecommerce" ,
        src : ecommerce,
        link: "https://gleaming-llama-80be0f.netlify.app/" ,
        githubLink : "https://github.com/Aartikhatri/ecomm"
    },
    {
        id: 2,
        title : "video Player" ,
        src : videoPlay ,
        link : "https://647ccd97c08dfa526e8bcaf8--meek-flan-382b96.netlify.app/" ,
        githubLink : "https://github.com/Aartikhatri/namsteyoutube"
    },
    {
        id:3 ,
        title : "Dream 11" ,
        src : dream11 ,
        link: "https://dream11-team-7kul.vercel.app/" ,
        githubLink : "https://github.com/Aartikhatri/Dream11Team"
        
    },
   
    {
        id: 4,
        title : "My portfolio" ,
        src : portfolio,
        link : "https://647cd8c13fcd7d57ad424e4d--iridescent-entremet-ac3fd0.netlify.app/" ,
        githubLink : ""
    },
    {
        id: 5,
        title : " Code Editor" ,
        src : CodeEditor ,
        link : "https://6484c4c2ff845b109197829b--nimble-blini-9e8d14.netlify.app/" ,
        githubLink : "https://github.com/Aartikhatri/codeeditor"
    },
]