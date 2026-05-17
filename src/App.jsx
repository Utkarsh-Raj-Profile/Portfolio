import { motion } from "framer-motion";
import { useState } from "react";

import profileImg from "./assets/profile.jpg";
import wanderlustImg from "./assets/wanderlust.png";
import sigmaImg from "./assets/sigmagpt.png";
import zerodhaImg from "./assets/zerodhaclone.png";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const projects = [
    {
      title: "Wanderlust",
      desc: "Full stack Airbnb-inspired travel platform with authentication and cloud deployment.",
      image: wanderlustImg,
      link: "https://wanderlust-f7qe.onrender.com/listings",
    },
    {
      title: "SigmaGPT",
      desc: "AI conversational platform powered by GPT APIs and AWS deployment.",
      image: sigmaImg,
      link: "http://ec2-16-171-237-242.eu-north-1.compute.amazonaws.com/",
    },
    {
      title: "Zerodha Clone",
      desc: "Modern fintech dashboard inspired by Zerodha with responsive UI.",
      image: zerodhaImg,
      link: "https://zerodha-clone-frontend.vercel.app/",
    },
  ];

  return (
    <main
      className={`min-h-screen overflow-hidden transition-all duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Background Blur */}
      <div className="fixed inset-0 -z-10">
        <div
          className={`absolute top-0 left-0 h-[500px] w-[500px] rounded-full blur-[120px] ${
            darkMode ? "bg-cyan-500/20" : "bg-cyan-300/40"
          }`}
        />

        <div
          className={`absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full blur-[120px] ${
            darkMode ? "bg-purple-500/20" : "bg-purple-300/40"
          }`}
        />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 border-b backdrop-blur-xl transition ${
          darkMode
            ? "border-white/10 bg-black/30"
            : "border-black/10 bg-white/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-3xl font-black">
            Utkarsh<span className="text-cyan-400">Raj</span>
          </h1>

          <div className="hidden md:flex items-center gap-8">
            <div
              className={`flex gap-8 ${
                darkMode ? "text-zinc-300" : "text-zinc-700"
              }`}
            >
              <a href="#profiles">Profiles</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                darkMode
                  ? "bg-white text-black"
                  : "bg-black text-white"
              }`}
            >
              {darkMode ? "☀ Light" : "🌙 Dark"}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full pt-32">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className={`inline-flex items-center gap-3 border rounded-full px-5 py-3 mb-8 ${
                darkMode
                  ? "border-white/10 bg-white/5"
                  : "border-black/10 bg-black/5"
              }`}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span
                className={`text-sm ${
                  darkMode ? "text-zinc-300" : "text-zinc-700"
                }`}
              >
                Open To Software Engineering Roles
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none">
              Building
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 py-3">
                Premium
              </span>
              Digital Products.
            </h1>

            <p
              className={`mt-8 text-xl leading-relaxed max-w-2xl ${
                darkMode ? "text-zinc-400" : "text-zinc-700"
              }`}
            >
              Full Stack Developer focused on scalable applications,
              cloud deployment, and premium user experiences.
            </p>

            <div className="flex gap-5 mt-10 flex-wrap">
              <a
                href="#projects"
                className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="https://github.com/Utkarsh-Raj-Profile"
                target="_blank"
                rel="noreferrer"
                className={`px-8 py-4 rounded-2xl border transition ${
                  darkMode
                    ? "border-white/10 bg-white/5 hover:bg-white/10"
                    : "border-black/10 bg-black/5 hover:bg-black/10"
                }`}
              >
                GitHub
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-16">
              {[
                ["1000+", "DSA Problems"],
                ["1600+", "LeetCode"],
                ["AWS", "Deployment"],
                ["SIH", "Finalist"],
              ].map(([num, label]) => (
                <div
                  key={label}
                  className={`p-6 rounded-3xl border transition ${
                    darkMode
                      ? "border-white/10 bg-white/[0.03]"
                      : "border-black/10 bg-black/[0.03]"
                  }`}
                >
                  <h2 className="text-3xl font-black text-cyan-400">
                    {num}
                  </h2>

                  <p
                    className={`mt-2 ${
                      darkMode ? "text-zinc-500" : "text-zinc-700"
                    }`}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-[120px]" />

            <div
              className={`relative border rounded-[40px] overflow-hidden p-4 ${
                darkMode
                  ? "border-white/10 bg-white/[0.03]"
                  : "border-black/10 bg-black/[0.03]"
              }`}
            >
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
      <section id="about" className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl font-black mb-10">
              About <span className="text-cyan-400">Me</span>
            </h2>

            <p
              className={`text-lg leading-relaxed ${
                darkMode ? "text-zinc-400" : "text-zinc-700"
              }`}
            >
              I build scalable web applications with modern frontend
              experiences and production-ready backend architecture.
            </p>

            <p
              className={`text-lg leading-relaxed mt-6 ${
                darkMode ? "text-zinc-400" : "text-zinc-700"
              }`}
            >
              Passionate about MERN stack development, cloud deployment,
              DSA, and building impactful digital products.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-5">
            {[
              "MongoDB",
              "Express.js",
              "React.js",
              "Node.js",
              "AWS",
              "Java",
              "Docker",
              "Bootstrap",
              "Tailwind CSS",
              "SQL",
              "PostgreSQL",
              "CLI",
            ].map((tech) => (
              <div
                key={tech}
                className={`p-8 rounded-3xl border transition hover:-translate-y-2 ${
                  darkMode
                    ? "border-white/10 bg-white/[0.03]"
                    : "border-black/10 bg-black/[0.03]"
                }`}
              >
                <h3 className="text-2xl font-bold">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-32">
        <h2 className="text-6xl font-black mb-20">
          Featured <span className="text-purple-400">Projects</span>
        </h2>

        <div className="space-y-16">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 border rounded-[40px] overflow-hidden ${
                darkMode
                  ? "border-white/10 bg-white/[0.03]"
                  : "border-black/10 bg-black/[0.03]"
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <h3 className="text-5xl font-black mb-6">
                  {project.title}
                </h3>

                <p
                  className={`text-lg leading-relaxed ${
                    darkMode ? "text-zinc-400" : "text-zinc-700"
                  }`}
                >
                  {project.desc}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 inline-block w-fit px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold hover:scale-105 transition"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Profiles */}
      <section id="profiles" className="max-w-7xl mx-auto px-6 py-32">
        <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-16 text-center">
          <h2 className="text-6xl md:text-7xl font-black leading-tight">
            Let’s Build
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 py-3">
              Something Great.
            </span>
          </h2>

          <p
            className={`text-xl mt-8 max-w-3xl mx-auto ${
              darkMode ? "text-zinc-400" : "text-zinc-700"
            }`}
          >
            Passionate about scalable applications, premium UI, and
            impactful engineering.
          </p>

          <div className="flex justify-center gap-6 mt-12 flex-wrap">
            <a
              href="https://github.com/Utkarsh-Raj-Profile"
              target="_blank"
              rel="noreferrer"
              className={`px-7 py-4 rounded-2xl border transition ${
                darkMode
                  ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.08]"
                  : "border-black/10 bg-black/[0.03] hover:bg-black/[0.08]"
              }`}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/utkarsh-raj-software-engineer/"
              target="_blank"
              rel="noreferrer"
              className={`px-7 py-4 rounded-2xl border transition ${
                darkMode
                  ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.08]"
                  : "border-black/10 bg-black/[0.03] hover:bg-black/[0.08]"
              }`}
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/Utkarsh__Raj_/"
              target="_blank"
              rel="noreferrer"
              className={`px-7 py-4 rounded-2xl border transition ${
                darkMode
                  ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.08]"
                  : "border-black/10 bg-black/[0.03] hover:bg-black/[0.08]"
              }`}
            >
              LeetCode
            </a>
          </div>
        </div>
      </section>
      <section
  id="contact"
  className="max-w-7xl mx-auto px-6 py-32"
>
  <div className="grid lg:grid-cols-2 gap-16 items-center">

    <div>
      <p className="text-cyan-400 font-semibold mb-4">
        CONTACT ME
      </p>

      <h2 className="text-6xl font-black leading-tight">
        Let’s Build
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 py-3">
          Something Amazing.
        </span>
      </h2>

      <p
        className={`text-xl mt-8 leading-relaxed ${
          darkMode ? "text-zinc-400" : "text-zinc-700"
        }`}
      >
        Open to software engineering roles, collaborations,
        freelance opportunities, and impactful projects.
      </p>
    </div>

    <div
      className={`border rounded-[40px] p-10 backdrop-blur-xl ${
        darkMode
          ? "border-white/10 bg-white/[0.03]"
          : "border-black/10 bg-black/[0.03]"
      }`}
    >
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
          className={`w-full border rounded-2xl px-6 py-5 outline-none transition ${
            darkMode
              ? "bg-black/40 border-white/10 text-white focus:border-cyan-400"
              : "bg-white border-black/10 text-black focus:border-cyan-500"
          }`}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className={`w-full border rounded-2xl px-6 py-5 outline-none transition ${
            darkMode
              ? "bg-black/40 border-white/10 text-white focus:border-cyan-400"
              : "bg-white border-black/10 text-black focus:border-cyan-500"
          }`}
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
          className={`w-full border rounded-2xl px-6 py-5 outline-none transition resize-none ${
            darkMode
              ? "bg-black/40 border-white/10 text-white focus:border-cyan-400"
              : "bg-white border-black/10 text-black focus:border-cyan-500"
          }`}
        />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 font-bold text-lg"
        >
          Send Message
        </motion.button>
      </form>
    </div>

  </div>
</section>
    </main>
  );
}