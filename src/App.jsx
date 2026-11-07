import { useEffect, useState } from "react";
import {
  BrowserRouter, Routes, Route, NavLink, Link, useLocation
} from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import "./App.css";

import profileImg from "./assets/profile.jpg";
import studyImg from "./assets/studynotion.png";
import wanderlustImg from "./assets/wanderlust.png";
import sigmaImg from "./assets/sigmagpt.png";

const GITHUB = "https://github.com/Utkarsh-Raj-Profile";
const LINKEDIN = "https://www.linkedin.com/in/utkarsh-raj-software-engineer/";
const LEETCODE = "https://leetcode.com/u/Utkarsh__Raj_/";
const RESUME = "/resume.pdf";

const projects = [
  { name:"BrainBox AI", type:"AI · RAG · DOCUMENT INTELLIGENCE", description:"An AI-powered document assistant for uploading, organizing and querying documents using retrieval-augmented generation.", stack:["React","Vite","Node.js","FastAPI","MongoDB","Qdrant","Groq API"], live:"https://brainbox-ai-mu.vercel.app/", code: "https://github.com/Utkarsh-Raj-Profile/Brainbox-ai", image:null, featured:true },
  { name:"StudyNotion", type:"FULL STACK · EDTECH", description:"A MERN-based EdTech platform with authentication, OTP verification, payments, course management and cloud media storage.", stack:["React","Node.js","Express","MongoDB","Cloudinary","Razorpay"], live:"https://studynotiontech.vercel.app/", code: "https://github.com/Utkarsh-Raj-Profile/StudyNotion", image:studyImg },
  { name:"SigmaGPT", type:"GENERATIVE AI · CLOUD DEPLOYMENT", description:"An AI conversational application with a React interface, Node.js backend and cloud deployment workflow.", stack:["React","Node.js","OpenAI API","AWS","Nginx","GitHub Actions"], live:null, code:"https://github.com/Utkarsh-Raj-Profile/SigmaGPT", image:sigmaImg },
  { name:"Wanderlust", type:"FULL STACK · TRAVEL", description:"An Airbnb-inspired travel and listings platform featuring authentication, listing management and a responsive interface.", stack:["Node.js","Express","MongoDB","EJS","Bootstrap"], live:"https://wanderlust-f7qe.onrender.com/listings", code: "https://github.com/Utkarsh-Raj-Profile/Wanderlust", image:wanderlustImg }
];

const certificates = [
  { title:"Microsoft Certified: SQL AI Developer Associate", issuer:"Microsoft", period:"Issued Jul 16, 2026 · Expires Jul 17, 2027", category:"PROFESSIONAL CERTIFICATION", detail:"Microsoft Certified Associate credential. Credential ID: ED8C74581F7BB4B3.", url:"https://learn.microsoft.com/en-us/users/utkarshraj-7504/credentials/ed8c74581f7bb4b3", kind:"Professional" },
  { title:"The Complete Full-Stack Web Development Bootcamp", issuer:"Udemy", period:"Completed Sep 20, 2026 · 62 hours", category:"WEB DEVELOPMENT", detail:"Full-stack web development bootcamp by Dr. Angela Yu. Certificate of completion.", url:"https://drive.google.com/file/d/1ds9YznqdWFHopgLAb53m0JwcvVMH27Fs/view", kind:"Certificate" },
  { title:"Artificial Intelligence: Ethics & Societal Challenges", issuer:"Lund University · Coursera", period:"Completed Sep 24, 2023 · 13 hours", category:"ARTIFICIAL INTELLIGENCE", detail:"Verified Coursera course certificate from Lund University.", url:"https://www.coursera.org/account/accomplishments/verify/C9AKRFASPAZB", kind:"Certificate" },
  { title:"Introduction to Git and GitHub", issuer:"Google · Coursera", period:"Completed Apr 6, 2024 · 20 hours", category:"DEVELOPER TOOLS", detail:"Verified Coursera course certificate issued by Google.", url:"https://www.coursera.org/account/accomplishments/verify/HCD99E9RVMQV", kind:"Certificate" },
  { title:"Alpha — DSA with Java", issuer:"Apna College", period:"Certificate of completion", category:"DATA STRUCTURES & ALGORITHMS", detail:"Completed the Alpha DSA with Java course.", url:"https://drive.google.com/file/d/1fNHAtS3YCiQlabb1xeAhLy-EUg10GUSD/view", kind:"Certificate" },
  { title:"Delta — Full Stack Web Development", issuer:"Apna College", period:"Certificate of completion", category:"WEB DEVELOPMENT", detail:"Completed the Delta Full Stack Web Development course.", url:"https://drive.google.com/file/d/1yQJDrZ8QRlCfgrTDcbHkX8sV6xPNk3qy/view?usp=sharing", kind:"Certificate" },
  { title:"AWS Educate Getting Started with Storage", issuer:"Amazon Web Services (AWS)", period:"Issued Aug 2024", category:"CLOUD & STORAGE", detail:"Credly-verified AWS Educate training badge covering storage and Amazon S3 object storage.", url:"https://www.credly.com/badges/db0a0f6d-aab9-4c54-8b0b-851c93dd83f9/linked_in_profile", kind:"Badge" },
  { title:"AWS Educate Getting Started with Compute", issuer:"Amazon Web Services (AWS)", period:"Issued Aug 2024", category:"CLOUD & COMPUTE", detail:"Credly-verified AWS Educate training badge covering compute services and Amazon EC2.", url:"https://www.credly.com/badges/53d046a8-5c20-4e75-bf4a-156858b22bb5/linked_in_profile", kind:"Badge" },
  { title:"Meta Full-Stack Engineer Certificate", issuer:"Meta · Coursera", period:"Issued Aug 8, 2024", category:"FULL-STACK DEVELOPMENT", detail:"Meta credential covering the Front-End and Back-End Developer certificate programs and capstone projects.", url:"https://www.credly.com/badges/d8ec764f-d0ed-4084-8854-b777ef1e6a91/linked_in_profile", kind:"Professional" },
  { title:"AWS Educate Getting Started with Networking", issuer:"Amazon Web Services (AWS)", period:"Issued Aug 2024", category:"CLOUD & NETWORKING", detail:"AWS Educate training badge shown in the LinkedIn certifications list. Open the LinkedIn credentials list to locate the badge.", url:"https://www.credly.com/badges/06da6523-ea05-4ad9-a1da-90a02d67f7c5/linked_in_profile", kind:"Badge" },
  { title:"AWS Educate Getting Started with Security", issuer:"Amazon Web Services (AWS)", period:"Issued Aug 2024", category:"CLOUD & SECURITY", detail:"AWS Educate training badge shown in the LinkedIn certifications list. Open the LinkedIn credentials list to locate the badge.", url:"https://www.credly.com/badges/9c7f1fcb-6181-41b1-9b71-b9337d04555a/linked_in_profile", kind:"Badge" },
  { title:"AWS Educate Getting Started with Cloud Ops", issuer:"Amazon Web Services (AWS)", period:"Issued Aug 2024", category:"CLOUD OPERATIONS", detail:"AWS Educate training badge shown in the LinkedIn certifications list. Open the LinkedIn credentials list to locate the badge.", url:"https://www.credly.com/badges/f1d2564e-ca19-4159-9458-32320af7e840/linked_in_profile", kind:"Badge" },
  { title:"Front End Web Developer Certification", issuer:"Infosys Springboard", period:"Issued Oct 3, 2024 · Score 80", category:"WEB DEVELOPMENT", detail:"Front-end web developer certification shown in Infosys Springboard.", url:null, kind:"Certification" },
  { title:"TechA Modern HTML and CSS Scripting", issuer:"Infosys Springboard", period:"Issued Mar 3, 2024 · Score 65.57", category:"WEB DEVELOPMENT", detail:"Assessment/certification record shown in Infosys Springboard.", url:null, kind:"Assessment" },
  { title:"Practical HTML and CSS", issuer:"Infosys Springboard", period:"Feb 29, 2024 · Score 78", category:"WEB DEVELOPMENT", detail:"Completed assessment shown in Infosys Springboard.", url:null, kind:"Assessment" },
  { title:"JavaScript – Assessment", issuer:"Infosys Springboard", period:"Feb 29, 2024 · Score 92", category:"WEB DEVELOPMENT", detail:"Passed assessment shown in Infosys Springboard.", url:null, kind:"Assessment" },
  { title:"CSS3 – Assessment", issuer:"Infosys Springboard", period:"Feb 22, 2024 · Score 72", category:"WEB DEVELOPMENT", detail:"Passed assessment shown in Infosys Springboard.", url:null, kind:"Assessment" },
  { title:"Beginner HTML and CSS: Build your own personal blog", issuer:"Infosys Springboard", period:"Feb 15, 2024 · Score 73", category:"WEB DEVELOPMENT", detail:"Completed assessment shown in Infosys Springboard.", url:null, kind:"Assessment" },
  { title:"Assessment – HTML5", issuer:"Infosys Springboard", period:"Feb 13, 2024 · Score 60", category:"WEB DEVELOPMENT", detail:"Passed assessment shown in Infosys Springboard.", url:null, kind:"Assessment" },
  { title:"AssessmentDB2", issuer:"Infosys Springboard", period:"Feb 9, 2024 · Score 100", category:"DATABASES", detail:"Passed database assessment shown in Infosys Springboard.", url:null, kind:"Assessment" },
  { title:"AssessmentDB1", issuer:"Infosys Springboard", period:"Feb 9, 2024 · Score 100", category:"DATABASES", detail:"Passed database assessment shown in Infosys Springboard.", url:null, kind:"Assessment" },
  { title:"Self Assessment – Introduction to Artificial Intelligence", issuer:"Infosys Springboard", period:"Nov 3, 2023 · Score 86.67", category:"ARTIFICIAL INTELLIGENCE", detail:"Completed self-assessment shown in Infosys Springboard.", url:null, kind:"Assessment" },
  { title:"Self Assessment – Deep Learning", issuer:"Infosys Springboard", period:"Nov 3, 2023 · Score 80", category:"ARTIFICIAL INTELLIGENCE", detail:"Completed self-assessment shown in Infosys Springboard.", url:null, kind:"Assessment" },
  { title:"CCNA: Enterprise Networking, Security & Automation", issuer:"Cisco Networking Academy", period:"Issued Jun 11, 2024", category:"NETWORKING", detail:"Cisco Networking Academy course badge/certificate shown in the supplied profile screenshot.", url:null, kind:"Badge / Certificate" },
  { title:"CCNA: Switching, Routing, and Wireless Essentials", issuer:"Cisco Networking Academy", period:"Issued Jun 11, 2024", category:"NETWORKING", detail:"Cisco Networking Academy course badge/certificate shown in the supplied profile screenshot.", url:null, kind:"Badge / Certificate" },
  { title:"CCNA: Introduction to Networks", issuer:"Cisco Networking Academy", period:"Issued Jun 11, 2024", category:"NETWORKING", detail:"Cisco Networking Academy course badge/certificate shown in the supplied profile screenshot.", url:null, kind:"Badge / Certificate" },
  { title:"CyberOps Associate", issuer:"Cisco Networking Academy", period:"Issued Jun 11, 2024", category:"CYBERSECURITY", detail:"Cisco Networking Academy badge shown in the supplied profile screenshot.", url:null, kind:"Badge" },
  { title:"IT Essentials", issuer:"Cisco Networking Academy", period:"Issued Jun 11, 2024", category:"IT FUNDAMENTALS", detail:"Cisco Networking Academy badge shown in the supplied profile screenshot.", url:null, kind:"Badge" },
  { title:"Cybersecurity Essentials", issuer:"Cisco Networking Academy", period:"Issued Jun 5, 2024", category:"CYBERSECURITY", detail:"Cisco Networking Academy course record shown in the supplied profile screenshot.", url:null, kind:"Certificate" },
  { title:"Introduction to Cybersecurity", issuer:"Cisco Networking Academy", period:"Issued Jun 5, 2024", category:"CYBERSECURITY", detail:"Cisco Networking Academy course record shown in the supplied profile screenshot.", url:null, kind:"Certificate" },
  { title:"Generative AI Virtual Internship", issuer:"Skillible & AICTE", period:"Jul 2024 – Aug 2024", category:"ARTIFICIAL INTELLIGENCE", detail:"Generative AI, prompt engineering, large language models and AI research.", url:"https://drive.google.com/file/d/1IDm1EKXPlmliTHjklkD9xSwn8IUZAFrI/view?usp=sharing", kind:"Internship" },
  { title:"Cybersecurity Virtual Internship", issuer:"Cisco Networking Academy", period:"2023", category:"CYBERSECURITY", detail:"Cybersecurity fundamentals, networking and secure college network architecture.", url:"https://drive.google.com/file/d/1IRTcKL0uNFzgaxym40OWozv5QyOXfxLM/view?usp=sharing", kind:"Internship" },
  { title:"Data Science with Python Internship", issuer:"PERSONIFWY / Coincent", period:"Mar 2023 – May 2023", category:"DATA SCIENCE", detail:"Python, machine learning, NLP concepts and chatbot development.", url:"https://drive.google.com/file/d/1sHcmuLTkis9bauX0qg9r0aBZnOKy-spK/view?usp=sharing", kind:"Internship" },
  { title:"OCI 2025 Generative AI Professional", issuer:"Oracle Cloud Infrastructure", period:"2025", category:"CLOUD & GENERATIVE AI", detail:"Professional certification in generative AI on Oracle Cloud Infrastructure.", url:null, kind:"Professional" }
];

const achievements = [
  { value:"1,000+", title:"DSA problems solved", detail:"Consistent problem-solving practice across coding platforms." },
  { value:"800+", title:"LeetCode day streak", detail:"A long-term commitment to daily coding practice." },
  { value:"2025 & 2026", title:"LeetCode annual badge", detail:"Recognized for sustained activity on LeetCode." },
  { value:"100+", title:"Learning certificates", detail:"Courses and certifications across multiple learning platforms." }
];

const skills = [
  ["Frontend",["HTML5","CSS3","JavaScript","React.js","Tailwind CSS","SCSS"]],
  ["Backend & databases",["Node.js","Express.js","REST APIs","MongoDB","MySQL"]],
  ["AI & machine learning",["Python","Machine Learning","Generative AI","RAG","LLMs","Qdrant"]],
  ["Tools & cloud",["Java","Git","GitHub","AWS EC2","Nginx","GitHub Actions","Vercel","Render"]]
];

const experience = [
  { role:"Generative AI Virtual Internship", org:"Skillible & AICTE", date:"Jul 2024 – Aug 2024", text:"Explored generative AI, prompt engineering and large language models; authored a research paper covering AI applications, limitations and future impact." },
  { role:"Cybersecurity Virtual Internship", org:"Cisco Networking Academy", date:"2023", text:"Worked on secure college network architecture, including network topology, routing, communication flow and cybersecurity fundamentals." },
  { role:"Data Science with Python Internship", org:"PERSONIFWY / Coincent", date:"Mar 2023 – May 2023", text:"Built a machine-learning chatbot trained on custom datasets to respond to user queries, applying Python, NLP concepts and ML workflows." }
];

const education = [
  {
    degree: "Master of Technology · Computer Science & Engineering",
    institute: "IES College of Science and Technology, Bhopal · RGPV",
    period: "2026 – Present",
    status: "Currently Pursuing",
    score: "Currently Enrolled",
  },
  {
    degree: "Bachelor of Technology · Computer Science",
    institute: "Lakshmi Narain College of Technology & Science, Bhopal · RGPV",
    period: "Graduated May 2025",
    status: "Completed",
    score: "7.55 CGPA",
  },
  {
    degree: "Diploma · Computer Science",
    institute: "Patel College of Science & Technology, Bhopal · RGPV",
    period: "Completed",
    status: "Completed",
    score: "8.49 CGPA",
  },
];

const techs = [
  ["React","react/react-original.svg"],["JavaScript","javascript/javascript-original.svg"],["Node.js","nodejs/nodejs-original.svg"],
  ["Express","express/express-original.svg"],["MongoDB","mongodb/mongodb-original.svg"],["Python","python/python-original.svg"],
  ["Java","java/java-original.svg"],["Tailwind","tailwindcss/tailwindcss-original.svg"],["AWS","https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"],
  ["Git","git/git-original.svg"],["GitHub","github/github-original.svg"],["Vite","vitejs/vitejs-original.svg"]
];

function IconArrow(){ return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M6 5h9v9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
function Heading({tag,title,accent,sub}){ return <div className="section-heading"><span className="eyebrow">{tag}</span><h2>{title} <em>{accent}</em></h2>{sub&&<p>{sub}</p>}</div>; }

function ScrollManager(){
  const { pathname } = useLocation();
  useEffect(()=>{ window.scrollTo({top:0,behavior:"instant"}); },[pathname]);
  return null;
}

function Header(){
  const [open,setOpen]=useState(false);
  const [dark,setDark]=useState(()=>localStorage.getItem("portfolio-theme")!=="light");
  useEffect(()=>{document.documentElement.classList.toggle("light-mode",!dark);localStorage.setItem("portfolio-theme",dark?"dark":"light");},[dark]);
  const links=[
  ["Home","/"],
  ["Projects","/projects"],
  ["Certificates","/certifications"],
  ["Achievements","/achievements"],
  ["Education","/education"],
  ["Activity","/activity"],
  ["Contact","/contact"]
];
  return <header className="topbar"><div className="nav-inner"><Link to="/" className="wordmark" onClick={()=>setOpen(false)}>utkarsh<span>.</span></Link>
    <nav className={open?"nav-menu open":"nav-menu"}>{links.map(([label,path])=><NavLink end={path==="/"} key={path} to={path} onClick={()=>setOpen(false)}>{label}</NavLink>)}</nav>
    <div className="nav-tools"><button className="icon-btn" onClick={()=>setDark(v=>!v)} aria-label="Toggle theme">{dark?"☼":"◐"}</button><a className="nav-resume" href={RESUME} target="_blank" rel="noreferrer">Resume <IconArrow/></a><button className="mobile-menu" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">☰</button></div>
  </div></header>;
}

function Footer(){return <footer className="footer"><div className="footer-inner"><Link to="/" className="wordmark">utkarsh<span>.</span></Link><span>Designed & built by Utkarsh Raj</span><div><a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a><a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a><a href={LEETCODE} target="_blank" rel="noreferrer">LeetCode</a></div><small>© {new Date().getFullYear()} · All rights reserved</small></div></footer>;}

function Shell({children}){return <div className="app-shell"><div className="scroll-progress"/><div className="glow glow-a"/><div className="glow glow-b"/><Header/><main>{children}</main><Footer/></div>;}

function Reveal({children,delay=0,className=""}){const reduce=useReducedMotion();return <motion.div className={className} initial={reduce?false:{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.14}} transition={{duration:.65,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>;}

function ProjectCard({project,index=0}){
  return <Reveal delay={index*.07}><motion.article className="project-card tilt-card" whileHover={{y:-8,rotateX:2,rotateY:-2}} transition={{type:"spring",stiffness:220,damping:18}}>
    <div className="project-image">{project.image?<img src={project.image} alt={`${project.name} preview`} loading="lazy"/>:<div className="brainbox-art"><span>BB</span><i>AI</i><b>DOCUMENT INTELLIGENCE</b></div>}<span className="project-index">0{index+1}</span></div>
    <div className="project-content"><span className="eyebrow">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p><div className="chip-row">{project.stack.map(s=><span key={s}>{s}</span>)}</div><div className="project-actions">{project.live?<a className="btn btn-primary" href={project.live} target="_blank" rel="noreferrer">Live website <IconArrow/></a>:<span className="btn btn-muted">Live demo unavailable</span>}<a className="btn btn-outline" href={project.code} target="_blank" rel="noreferrer">Source code <IconArrow/></a></div></div>
  </motion.article></Reveal>;
}

function Home(){
  return <>
    <section className="hero container" id="home"><div className="hero-copy"><Reveal><div className="availability"><i/> OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES</div><span className="eyebrow">HELLO, I'M UTKARSH RAJ</span><h1>Engineering ideas<br/><em>into experiences.</em></h1><p className="hero-lead">Full Stack Developer building reliable web applications and exploring AI-powered products. I turn complex problems into clear, useful experiences.</p><div className="hero-buttons"><Link className="btn btn-primary" to="/projects">Explore my work <IconArrow/></Link><a className="btn btn-outline" href={RESUME} target="_blank" rel="noreferrer">View resume <IconArrow/></a></div><div className="social-row"><a href={GITHUB} target="_blank" rel="noreferrer">GitHub ↗</a><a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={LEETCODE} target="_blank" rel="noreferrer">LeetCode ↗</a></div></Reveal></div>
      <Reveal delay={.12} className="hero-stage"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="hero-halo"/><motion.div className="hero-photo" animate={{y:[0,-12,0],rotate:[0,1.2,0]}} transition={{duration:7,repeat:Infinity,ease:"easeInOut"}}><img src={profileImg} alt="Portrait of Utkarsh Raj"/></motion.div><motion.div className="float-card float-card-top" animate={{y:[0,-9,0],x:[0,4,0]}} transition={{duration:5,repeat:Infinity}}><b>⌘</b><span>BUILD · SHIP · LEARN</span></motion.div><motion.div className="float-card float-card-bottom" animate={{y:[0,8,0]}} transition={{duration:4.5,repeat:Infinity}}><b>AI + WEB</b><span>Full stack engineering</span></motion.div><div className="stage-cross">✳</div></Reveal>
    </section>
    <div className="ticker"><div>{[...Array(2)].flatMap(()=>["FULL STACK DEVELOPMENT","GENERATIVE AI","RAG SYSTEMS","PROBLEM SOLVING","PRODUCT ENGINEERING"]).map((x,i)=><span key={i}>{x}<b>✳</b></span>)}</div></div>
    <section className="section container"><Heading tag="A LITTLE ABOUT ME" title="Curiosity drives" accent="my work."/><div className="about-grid"><Reveal><p className="big-statement">I enjoy creating useful software that brings together thoughtful interfaces, dependable backend systems and emerging AI capabilities.</p><p className="muted-copy">My experience spans the MERN stack, cloud deployment and AI-enabled applications. I like understanding systems end to end—from shaping a user experience to designing APIs and connecting data services.</p></Reveal><div className="fact-stack">{[["01","Full Stack Development","Responsive products and RESTful services."],["02","AI & RAG Applications","LLM-powered workflows and document intelligence."],["03","Continuous Learning","DSA practice and engineering fundamentals."]].map(x=><Reveal key={x[0]}><div className="fact-row"><b>{x[0]}</b><div><strong>{x[1]}</strong><p>{x[2]}</p></div></div></Reveal>)}</div></div></section>
    <section className="section section-muted"><div className="container"><Heading tag="WHAT I WORK WITH" title="A practical" accent="toolkit." sub="A growing toolkit across web engineering, databases, AI and deployment."/><div className="skills-grid">{skills.map((group,i)=><Reveal key={group[0]} delay={i*.06}><article className="skill-card"><span className="eyebrow">0{i+1} / EXPERTISE</span><h3>{group[0]}</h3><div className="chip-row">{group[1].map(s=><span key={s}>{s}</span>)}</div></article></Reveal>)}</div></div></section>
    <section className="tech-rail"><div className="container"><span className="eyebrow">TECHNOLOGIES IN MY TOOLKIT</span><div className="tech-window"><div className="tech-track">{[...techs,...techs].map(([name,icon],i)=><div className="tech-item" key={`${name}-${i}`}><img src={icon.startsWith("https://") ? icon : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}`} alt={`${name} logo`} loading="lazy" onError={e=>{if(name==="AWS"&&!e.currentTarget.dataset.fallback){e.currentTarget.dataset.fallback="1";e.currentTarget.src="https://cdn.simpleicons.org/amazonaws/FF9900";}}}/><span>{name}</span></div>)}</div></div></div></section>
    <section className="section container"><div className="section-topline"><Heading tag="SELECTED WORK" title="A few things" accent="I've built." sub="A small preview. Explore the project space for the full case-study collection."/></div><div className="project-grid home-projects">{projects.slice(0,2).map((p,i)=><ProjectCard project={p} index={i}/>)}</div><div className="center-action"><Link className="btn btn-outline" to="/projects">Explore all projects <IconArrow/></Link></div></section>
    <section className="section section-muted"><div className="container"><div className="section-topline"><Heading tag="MILESTONES" title="Progress through" accent="practice." sub="A few milestones that reflect consistency, curiosity and continuous learning."/></div><div className="stat-grid">{achievements.slice(0,3).map((a,i)=><Reveal key={a.title} delay={i*.06}><div className="stat-card"><strong>{a.value}</strong><h3>{a.title}</h3><p>{a.detail}</p></div></Reveal>)}</div><div className="center-action"><Link className="text-link" to="/achievements">See all achievements ↗</Link></div></div></section>
    <section className="section container"><div className="section-topline"><Heading tag="CONTINUOUS LEARNING" title="Credentials &" accent="growth." sub="Selected professional credentials and internship experience."/></div><div className="mini-credentials">{certificates.slice(0,2).map(c=><div className="mini-credential" key={c.title}><span>✳</span><div><b>{c.title}</b><small>{c.issuer}</small></div></div>)}</div><div className="center-action"><Link className="text-link" to="/certifications">Explore certificates ↗</Link></div></section>
    <section className="section section-muted"><div className="container contact-cta"><div><span className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</span><h2>Let's build<br/><em>something meaningful.</em></h2><p>Open to software engineering opportunities, collaborations and conversations about useful products.</p></div><div className="contact-links"><a href="mailto:utkarshrajcsestudent@gmail.com">utkarshrajcsestudent@gmail.com <IconArrow/></a><a href={LINKEDIN} target="_blank" rel="noreferrer">Connect on LinkedIn <IconArrow/></a><a href={RESUME} target="_blank" rel="noreferrer">Download resume <IconArrow/></a></div></div></section>
  </>;
}

function PageIntro({tag,title,accent,sub}){return <section className="page-intro container"><Reveal><span className="eyebrow">{tag}</span><h1>{title}<br/><em>{accent}</em></h1><p>{sub}</p></Reveal><div className="page-orb" aria-hidden="true"/></section>;}

function ProjectsPage(){return <><PageIntro tag="SELECTED WORK / 2023—2026" title="Projects built" accent="with purpose." sub="Explore full-stack products, AI experiments and practical engineering work. Each project includes its technology stack and direct links."/><section className="section container page-section"><div className="project-grid">{projects.map((p,i)=><ProjectCard key={p.name} project={p} index={i}/>)}</div></section><section className="section section-muted"><div className="container contact-cta"><div><span className="eyebrow">MORE ON GITHUB</span><h2>Explore the<br/><em>source code.</em></h2></div><div className="contact-links"><a href={`${GITHUB}?tab=repositories`} target="_blank" rel="noreferrer">Browse all repositories <IconArrow/></a></div></div></section></>;}

function CertificatesPage(){
  const [provider,setProvider]=useState("All providers");
  const [kind,setKind]=useState("All types");
  const providers=["All providers","Microsoft","Udemy","LinkedIn","Infosys Springboard","Cisco Networking Academy","Skillible & AICTE","Oracle Cloud Infrastructure","PERSONIFWY / Coincent","Google · Coursera","Lund University · Coursera","Apna College","Amazon Web Services (AWS)"];
  const kinds=["All types","Professional","Certification","Certificate","Assessment","Badge","Badge / Certificate","Internship"];
  const filtered=certificates.filter(c=>(provider==="All providers"||c.issuer===provider||c.issuer.includes(provider))&&(kind==="All types"||c.kind===kind));
  const initials=(issuer)=>issuer==="Microsoft"?"MS":issuer==="Udemy"?"U":issuer.includes("Cisco")?"C":issuer.includes("Infosys")?"IS":issuer.includes("LinkedIn")?"in":issuer.includes("Oracle")?"O":issuer.includes("Skillible")?"AI":issuer.includes("PERSONIFWY")?"P":issuer.slice(0,2).toUpperCase();
  return <>
    <PageIntro tag="LEARNING NEVER STOPS" title="Certificates &" accent="credentials." sub="A growing record of professional certifications, course completions, assessments and badges from the learning platforms I use."/>
    <section className="section container page-section">
      <div className="credential-summary">
        <div><strong>{certificates.length}</strong><span>listed credentials & learning records</span></div>
        <div><strong>{new Set(certificates.map(c=>c.issuer)).size}</strong><span>issuing organizations</span></div>
        <div><strong>2023—2026</strong><span>learning timeline shown</span></div>
      </div>
      <div className="provider-strip">
        {["Infosys Springboard","Cisco Networking Academy","Microsoft","Udemy","Coursera","LinkedIn","Apna College","Oracle Cloud Infrastructure","Amazon Web Services (AWS)"].map((p,i)=>
          <button key={p} className={`provider-pill ${provider===p?"selected":""}`} onClick={()=>setProvider(provider===p?"All providers":p)}>
            <span className="provider-monogram">{p==="Cisco Networking Academy"?"C":p==="Infosys Springboard"?"IS":p==="Microsoft"?"MS":p==="Udemy"?"U":p==="LinkedIn"?"in":p==="Apna College"?"A":p==="Coursera"?"Co":p==="Amazon Web Services (AWS)"?"AWS":"O"}</span>{p}
          </button>
        )}
      </div>
      <div className="credly-wallet-row"><a className="btn btn-outline" href="https://www.credly.com/users/utkarsh-raj.f5c6a603" target="_blank" rel="noreferrer">View all verified badges on Credly ↗</a></div>
      <div className="credential-toolbar">
        <div><span className="eyebrow">CREDENTIAL LIBRARY</span><h2>{provider==="All providers"?"All learning records":provider}</h2></div>
        <div className="credential-filters">
          <select aria-label="Filter by provider" value={provider} onChange={e=>setProvider(e.target.value)}>{providers.map(p=><option key={p}>{p}</option>)}</select>
          <select aria-label="Filter by credential type" value={kind} onChange={e=>setKind(e.target.value)}>{kinds.map(k=><option key={k}>{k}</option>)}</select>
        </div>
      </div>
      <p className="credential-note">The cards below are based on the certificates, badges and assessment records visible in the supplied profile screenshots and the links already provided. Some records do not yet have public credential URLs.</p>
      {filtered.length>0?<div className="certificate-grid">{filtered.map((c,i)=><Reveal key={`${c.issuer}-${c.title}`} delay={i*.025}><article className="certificate-card credential-card">
        <div className="credential-card-top"><span className={`issuer-logo issuer-${initials(c.issuer).replace(/[^a-z]/gi,"").toLowerCase()}`}>{initials(c.issuer)}</span><span className="credential-kind">{c.kind}</span></div>
        <span className="eyebrow">{c.issuer}</span><h3>{c.title}</h3><p>{c.detail}</p>
        <div className="credential-bottom"><small>{c.period}</small>{c.url?<a className="text-link" href={c.url} target="_blank" rel="noreferrer">View credential <IconArrow/></a>:<span className="muted-copy small-note">Link not added yet</span>}</div>
      </article></Reveal>)}</div>:<div className="credential-empty"><h3>No records listed for this provider yet</h3><p>Share the certificate names or public credential links and this section can be filled in accurately.</p><button className="btn btn-outline" onClick={()=>{setProvider("All providers");setKind("All types");}}>Show all records</button></div>}
    </section>
  </>;
}

function AchievementsPage(){return <><PageIntro tag="MILESTONES & RECOGNITION" title="Consistency creates" accent="momentum." sub="A record of problem-solving practice, learning milestones and experiences beyond the code editor."/><section className="section container page-section"><div className="stat-grid">{achievements.map((a,i)=><Reveal key={a.title} delay={i*.06}><article className="stat-card large-stat"><strong>{a.value}</strong><h3>{a.title}</h3><p>{a.detail}</p></article></Reveal>)}</div><div className="achievement-timeline">{[["ACADEMIC","Qualified JEE Main · 2019"],["COMPETITION","Smart India Hackathon finalist"],["RECOGNITION","1st prize · Inter-college LAN gaming"],["CERTIFICATION","Oracle Cloud Infrastructure 2025 · Generative AI Professional"]].map((x,i)=><Reveal key={x[1]} delay={i*.06}><div className="timeline-line"><span>0{i+1}</span><div><small>{x[0]}</small><h3>{x[1]}</h3></div></div></Reveal>)}</div></section></>;}

function ActivityPage(){const [repos,setRepos]=useState([]);const [status,setStatus]=useState("loading");useEffect(()=>{let live=true;fetch("https://api.github.com/users/Utkarsh-Raj-Profile/repos?sort=updated&per_page=100").then(r=>{if(!r.ok)throw new Error("GitHub API unavailable");return r.json();}).then(data=>{if(live){const excludedRepos = new Set([
          "tds-photo-website",
          "utkarsh-raj-profile",
          "zerodha_apna_college",
          "javaprogramming"
        ]);
        setRepos(
          data
            .filter(r => !r.fork && !excludedRepos.has(r.name.toLowerCase()))
            .sort((a,b) => (b.stargazers_count*3+b.forks_count) - (a.stargazers_count*3+a.forks_count))
            .slice(0,6)
        );setStatus("ready");}}).catch(()=>live&&setStatus("error"));return()=>{live=false;};},[]);return <><PageIntro tag="CONSISTENCY IN PRACTICE" title="Coding activity &" accent="open source." sub="A live snapshot of public GitHub repositories, contribution history and LeetCode practice."/><section className="section container page-section"><div className="activity-panels"><Reveal><article className="activity-panel"><div className="panel-heading"><div><span className="eyebrow">OPEN SOURCE & BUILDING</span><h3>GitHub contributions</h3></div><a href={GITHUB} target="_blank" rel="noreferrer">↗</a></div><a href={GITHUB} target="_blank" rel="noreferrer"><img src="https://ghchart.rshah.org/397a68/Utkarsh-Raj-Profile" alt="GitHub contribution calendar"/></a><p>Contribution calendar from a public GitHub chart service.</p></article></Reveal><Reveal delay={.1}><article className="activity-panel"><div className="panel-heading"><div><span className="eyebrow">DATA STRUCTURES & ALGORITHMS</span><h3>LeetCode practice</h3></div><a href={LEETCODE} target="_blank" rel="noreferrer">↗</a></div><a href={LEETCODE} target="_blank" rel="noreferrer"><img className="leetcode-image" src="https://leetcard.jacoblin.cool/Utkarsh__Raj_?ext=heatmap&theme=light&font=DM%20Sans&border=0" alt="LeetCode profile and activity heatmap"/></a><p>Submission history from the public LeetCode profile card.</p></article></Reveal></div><div className="repo-heading"><Heading tag="BUILT IN PUBLIC" title="Recent public" accent="repositories." sub="Loaded live from the GitHub public API. Anonymous API requests may occasionally be rate-limited."/></div>{status==="loading"&&<p className="muted-copy">Loading repositories…</p>}{status==="error"&&<p className="muted-copy">GitHub's API is temporarily unavailable. <a href={`${GITHUB}?tab=repositories`}>Browse repositories directly.</a></p>}{status==="ready"&&<div className="repo-grid">{repos.map((r,i)=><Reveal key={r.id} delay={i*.05}><a className="repo-card" href={r.html_url} target="_blank" rel="noreferrer"><div><b>⌘</b><span>↗</span></div><h3>{r.name}</h3><p>{r.description||"Public repository — open on GitHub to explore the source."}</p><small>{r.language||"Repository"}　★ {r.stargazers_count}　⑂ {r.forks_count}</small></a></Reveal>)}</div>}<div className="center-action"><a className="btn btn-outline" href={GITHUB} target="_blank" rel="noreferrer">Open GitHub profile <IconArrow/></a><a className="btn btn-outline" href={LEETCODE} target="_blank" rel="noreferrer">Open LeetCode profile <IconArrow/></a></div></section></>;}


function EducationPage(){
  return <>
    <PageIntro
      tag="MY ACADEMIC BACKGROUND"
      title="Learning builds"
      accent="the foundation."
      sub="My academic journey in Computer Science and Engineering, from diploma studies to postgraduate education."
    />
    <section className="section container page-section education-page">
      <div className="education-grid">
        {education.map((item,index)=>(
          <Reveal key={item.degree} delay={index*.08}>
            <article className="education-card">
              <div className="education-card-top">
                <span className="education-status">{item.status}</span>
                <span className="education-number">0{index+1}</span>
              </div>
              <h3>{item.degree}</h3>
              <p className="education-institute">{item.institute}</p>
              <div className="education-meta">
                <span>{item.period}</span>
                <strong>{item.score}</strong>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  </>;
}

function ContactPage(){const [state,setState]=useState("idle");async function submit(e){e.preventDefault();const key=import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;if(!key){setState("missing");return;}setState("sending");const form=e.currentTarget;const data=new FormData(form);data.set("access_key",key);data.set("subject","New portfolio message");try{const response=await fetch("https://api.web3forms.com/submit",{method:"POST",body:data});const result=await response.json();if(!response.ok||!result.success)throw new Error(result.message);form.reset();setState("success");}catch{setState("error");}}return <><PageIntro tag="LET'S CONNECT" title="Let's make" accent="something meaningful." sub="Open to software engineering opportunities, collaborations and conversations about building useful products."/><section className="section container page-section contact-layout"><div className="contact-links"><a href="mailto:utkarshrajcsestudent@gmail.com">utkarshrajcsestudent@gmail.com <IconArrow/></a><a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn <IconArrow/></a><a href={GITHUB} target="_blank" rel="noreferrer">GitHub <IconArrow/></a></div><form className="contact-form" onSubmit={submit}><label>Name<input name="name" required placeholder="Your name"/></label><label>Email<input name="email" type="email" required placeholder="you@example.com"/></label><label>Message<textarea name="message" rows="5" required placeholder="Tell me a little about your opportunity…"/></label><button className="btn btn-primary" disabled={state==="sending"}>{state==="sending"?"Sending…":"Send message"} <IconArrow/></button>{state==="success"&&<p>Thanks! Your message has been sent.</p>}{state==="error"&&<p>Could not send. Please email me directly.</p>}{state==="missing"&&<p>Add VITE_WEB3FORMS_ACCESS_KEY to your .env file to enable the form.</p>}</form></section></>;}

function RouteMotion(){const location=useLocation();return <AnimatePresence mode="wait"><motion.div key={location.pathname} className="route-page" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.28}}>{location.pathname==="/"?<Home/>:location.pathname==="/projects"?<ProjectsPage/>:location.pathname==="/certifications"?<CertificatesPage/>:location.pathname==="/achievements"?<AchievementsPage/>:location.pathname==="/education"?<EducationPage/>:location.pathname==="/activity"?<ActivityPage/>:location.pathname==="/contact"?<ContactPage/>:<Home/>}</motion.div></AnimatePresence>;}

export default function App(){return <BrowserRouter><ScrollManager/><Shell><RouteMotion/></Shell></BrowserRouter>;}