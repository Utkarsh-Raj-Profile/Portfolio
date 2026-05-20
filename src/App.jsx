import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import profileImg from "./assets/profile.jpg";
import studynotionImg from "./assets/studynotion.png";
import wanderlustImg from "./assets/wanderlust.png";
import sigmaImg from "./assets/sigmagpt.png";
import zerodhaImg from "./assets/zerodhaclone.png";

export default function App() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const projects = [
    {
      title: "StudyNotion",
      desc: "Production-ready MERN EdTech platform featuring secure authentication, OTP verification, payments integration, course management, cloud media storage, and responsive modern UI.",
      image: studynotionImg,
      link: "https://studynotiontech.vercel.app/",
      tech: ["React", "Node.js", "MongoDB", "Express", "Cloudinary", "Razorpay"],
    },
    {
      title: "SigmaGPT",
      desc: "AI conversational platform powered by GPT APIs with scalable backend architecture and cloud deployment.",
      image: sigmaImg,
      link: "http://ec2-16-171-237-242.eu-north-1.compute.amazonaws.com/",
      tech: ["OpenAI", "AWS", "React", "Node.js"],
    },
    {
      title: "Wanderlust",
      desc: "Full stack Airbnb-inspired travel platform with authentication and cloud deployment.",
      image: wanderlustImg,
      link: "https://wanderlust-f7qe.onrender.com/listings",
      tech: ["EJS", "MongoDB", "Express", "Node.js", "Bootstrap"],
    },
    {
      title: "Zerodha Clone",
      desc: "Modern fintech dashboard inspired by Zerodha with responsive UI and reusable components.",
      image: zerodhaImg,
      link: "https://zerodha-clone-frontend.vercel.app/",
      tech: ["React", "Tailwind", "Charts"],
    },
  ];

  return (
    <main className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-500 overflow-hidden">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-black/10 dark:border-white/10 backdrop-blur-xl bg-white/70 dark:bg-black/40">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-3xl font-black">
            Utkarsh
            <span className="text-cyan-500">Raj</span>
          </h1>

          <div className="hidden md:flex items-center gap-8 font-medium">

            {["About", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-500 transition"
              >
                {item}
              </a>
            ))}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded-xl border border-black/10 dark:border-white/10 bg-black text-white dark:bg-white dark:text-black transition"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>

          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center px-6 pt-32">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-flex items-center gap-3 border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] rounded-full px-5 py-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-zinc-600 dark:text-zinc-300 text-sm">
                Open To Software Engineering Roles
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none">

              Building

              <span className="block bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent py-3">
                Premium Digital Products.
              </span>

            </h1>

            <p className="mt-8 text-zinc-600 dark:text-zinc-400 text-xl leading-relaxed max-w-2xl">
              Full Stack MERN Developer specializing in scalable applications,
              cloud deployment, AI integrations, and premium frontend experiences.
            </p>

            <div className="flex gap-5 mt-10 flex-wrap">

  <a
    href="#projects"
    className="px-8 py-4 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-semibold hover:scale-105 transition"
  >
    View Projects
  </a>

  <a
    href="https://github.com/Utkarsh-Raj-Profile"
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-4 rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] transition"
  >
    GitHub
  </a>

  <a
    href="https://leetcode.com/u/Utkarsh__Raj_/"
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold hover:scale-105 transition"
  >
    LeetCode
  </a>

  {/* <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    download
    className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition"
  >
    Download Resume
  </a> */}

</div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">

              {[
                ["1000+", "DSA Problems"],
                ["MERN", "Full Stack"],
                ["AWS", "Deployment"],
                ["SIH", "Finalist"],
              ].map(([num, label]) => (

                <div
                  key={label}
                  className="p-6 rounded-3xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03]"
                >

                  <h2 className="text-3xl font-black text-cyan-500">
                    {num}
                  </h2>

                  <p className="text-zinc-600 dark:text-zinc-500 mt-2">
                    {label}
                  </p>

                </div>
              ))}

            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-[120px]" />

            <div className="relative border border-black/10 dark:border-white/10 rounded-[40px] overflow-hidden bg-black/[0.03] dark:bg-white/[0.03] p-4">

              <img
                src={profileImg}
                alt="profile"
                className="w-[420px] h-[560px] object-cover rounded-[30px]"
              />

            </div>

          </motion.div>

        </div>
      </section>

      {/* About */}
<section
  id="about"
  className="max-w-7xl mx-auto px-6 py-32"
>

  <div className="grid lg:grid-cols-2 gap-20 items-center">

    <div>

      <h2 className="text-6xl font-black mb-10">

        About

        <span className="text-cyan-500">
          {" "}Me
        </span>

      </h2>

      <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">

        I build scalable full stack web applications focused on
        performance, backend architecture, cloud deployment,
        and premium frontend experiences.

      </p>

      <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mt-6">

        Passionate about MERN stack development, AI integrations,
        problem solving, and building impactful digital products.

      </p>

    </div>

    <div className="grid grid-cols-2 gap-5">

      {[
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "AWS",
        "Docker",
        "Java",
        "SQL",
        "Tailwind CSS",
        "PostgreSQL",
        "REST APIs",
        "Git & GitHub",
      ].map((tech) => (

        <div
          key={tech}
          className="p-8 rounded-3xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] hover:-translate-y-2 transition"
        >

          <h3 className="text-2xl font-bold">
            {tech}
          </h3>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-32"
      >

        <h2 className="text-6xl font-black mb-20">

          Featured

          <span className="text-purple-500">
            {" "}Projects
          </span>

        </h2>

        <div className="space-y-16">

          {projects.map((project) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 rounded-[40px] overflow-hidden border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03]"
            >

              <div className="overflow-hidden flex items-center justify-center bg-black p-4">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain hover:scale-105 transition duration-700"
                />

              </div>

              <div className="p-10 lg:p-16 flex flex-col justify-center">

                <h3 className="text-5xl font-black mb-6">
                  {project.title}
                </h3>

                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-500 text-sm"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 w-fit px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition"
                >
                  View Project
                </a>

              </div>

            </motion.div>

          ))}

        </div>
      </section>

      {/* Experience & Achievements */}
<section
  id="experience"
  className="max-w-7xl mx-auto px-6 py-32"
>

  <h2 className="text-6xl font-black mb-20">

    Experience &

    <span className="text-cyan-500">
      {" "}Achievements
    </span>

  </h2>

  <div className="grid gap-8">

    {/* DSA */}
    <div className="p-10 rounded-[40px] border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03]">

      <h3 className="text-3xl font-black">
        1000+ DSA Problems Solved
      </h3>

      <p className="text-zinc-600 dark:text-zinc-400 mt-5 text-lg leading-relaxed">

        Solved 1000+ data structures and algorithms problems across
        platforms like LeetCode and coding platforms, strengthening
        problem-solving and optimization skills.

      </p>

    </div>

    {/* JEE */}
    <div className="p-10 rounded-[40px] border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03]">

      <h3 className="text-3xl font-black">
        Qualified JEE Mains 2019
      </h3>

      <p className="text-zinc-600 dark:text-zinc-400 mt-5 text-lg leading-relaxed">

        Successfully qualified one of India’s most competitive
        engineering entrance examinations, demonstrating strong
        analytical and mathematical aptitude.

      </p>

    </div>

    {/* SIH */}
    <div className="p-10 rounded-[40px] border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03]">

      <h3 className="text-3xl font-black">
        Smart India Hackathon Finalist
      </h3>

      <p className="text-zinc-600 dark:text-zinc-400 mt-5 text-lg leading-relaxed">

        Collaborated in a high-performance team environment to build
        scalable software solutions under strict deadlines.

      </p>

    </div>

    {/* Gaming */}
    <div className="p-10 rounded-[40px] border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03]">

      <h3 className="text-3xl font-black">
        1st Prize — Inter College LAN Gaming Tournament
      </h3>

      <p className="text-zinc-600 dark:text-zinc-400 mt-5 text-lg leading-relaxed">

        Secured 1st place in a competitive inter-college gaming
        tournament, showcasing teamwork, strategic thinking,
        and high-pressure decision making.

      </p>

    </div>

  </div>

</section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 py-32"
      >

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-cyan-500 font-semibold mb-4">
              CONTACT ME
            </p>

            <h2 className="text-6xl font-black leading-tight">

              Let’s Build

              <span className="block bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent py-3">
                Something Exceptional.
              </span>

            </h2>

            <p className="text-zinc-600 dark:text-zinc-400 text-xl mt-8 leading-relaxed">
              Open to software engineering opportunities,
              collaborations, freelance work, and impactful projects.
            </p>

          </div>

          {/* Contact Form */}
          <div className="rounded-[40px] border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-xl p-10">

            <h3 className="text-4xl font-black mb-10">
              Send Message
            </h3>

            <form
              onSubmit={async (e) => {

                e.preventDefault();

                const formData = new FormData(e.target);

                const response = await fetch(
                  "https://api.web3forms.com/submit",
                  {
                    method: "POST",
                    body: formData,
                  }
                );

                const result = await response.json();

                if (result.success) {
                  alert("Message sent successfully!");
                  e.target.reset();
                } else {
                  alert("Something went wrong!");
                }

              }}
              className="space-y-6"
            >

              <input
                type="hidden"
                name="access_key"
                value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-cyan-500 transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-cyan-500 transition"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
                className="w-full bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-cyan-500 transition resize-none"
              />

              <button
                type="submit"
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg hover:scale-[1.02] transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}