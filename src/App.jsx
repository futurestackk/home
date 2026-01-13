import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Users, Sparkles, Mail, ChevronRight } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

function Feature({ icon, title }) {
  return (
    <motion.div
      {...fadeUp}
      className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-xl"
    >
      {icon}
      <p>{title}</p>
    </motion.div>
  );
}

function App() {
  const events = [
    { title: "Hackathon 2026", date: "Feb 12" },
    { title: "React Workshop", date: "Mar 3" },
    { title: "Open Source Sprint", date: "Apr 8" },
  ];
  const notify = (msg) => toast(msg);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_zcmex0a",
      "template_ttk611p",
      form,
      "fE9E8PNEUOYwdsJ5T"
    ) .then(() => notify("email send success to admin"))
  .catch(err => notify(err));

   
    setOpen(false);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <ToastContainer position="top-right" theme="dark" autoClose={3000} />
      {/* HEADER */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center p-6"
      >
        <h1 className="text-3xl font-bold">
          <span className="text-cyan-400">FutureStackk</span> Community
        </h1>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-x-6 hidden md:block"
        >
          <a href="#home" className="hover:text-cyan-400">
            Home
          </a>
          <a href="#about" className="hover:text-cyan-400">
            About
          </a>
          <a href="#community" className="hover:text-cyan-400">
            Community
          </a>
          <a href="#events" className="hover:text-cyan-400">
            Events
          </a>
          
        </motion.nav>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(true)}
          className="px-5 py-2 bg-cyan-500 rounded-xl hover:bg-cyan-400"
        >
          Join Now
        </motion.button>
      </motion.header>

      {/* HERO */}
      <section
        id="home"
        className="max-w-full mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12"
      >
        <div>
          <motion.h1 {...fadeUp} className="text-5xl font-extrabold">
            Build. Learn. Grow Together
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="mt-4 text-gray-300 max-w-xl"
          >
            A powerful developer community for collaboration, hackathons,
            open-source and mentorship.
          </motion.p>

          <motion.button
            {...fadeUp}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setOpen(true)}
            className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-3 rounded-2xl"
          >
            Join Now
            <ChevronRight />
          </motion.button>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <Feature icon={<Users />} title="Community" />
            <Feature icon={<Sparkles />} title="Events" />
          
          </div>
        </div>

        {/* code card */}
       <motion.div {...fadeUp} className="relative px-3 sm:px-0">
  <pre className="w-full max-w-3xl mx-auto
                  p-3 sm:p-6 lg:p-8
                  bg-black/40 border border-white/10 rounded-3xl
                  overflow-x-auto
                  whitespace-pre-wrap break-words
                  text-xs sm:text-sm lg:text-base">
{`// sample code
function joinCommunity(name) {
  return name + " grows with FutureStackk 🚀";
}`}
  </pre>
</motion.div>

      </section>

      {/* TEAM */}
      <Members />

      {/* ABOUT */}
      <section id="about" className="px-6 py-16 max-w-5xl mx-auto text-center">
        <motion.h2 {...fadeUp} className="text-4xl font-bold mb-6">
          About FutureStackk Community 🚀
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ delay: 0.15 }}
          className="text-gray-300 leading-relaxed text-lg"
        >
          FutureStackk is a global developer community…
        </motion.p>

        {/* cards */}
        {/* cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
          {[
            {
              title: "Our Vision",
              description:
                "To become the most trusted and inclusive developer community empowering people to innovate and solve real-world problems.",
            },
            {
              title: "What We Do",
              description:
                "We organize events, workshops, hackathons and provide resources to help developers grow and collaborate.",
            },
            {
              title: "Community Values",
              description:
                "We believe in collaboration, inclusivity, continuous learning and supporting each other to achieve more together.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              {...fadeUp}
              transition={{ delay: 0.1 * i }}
              className="p-6 rounded-2xl bg-gray-800/60 border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>

              <p className="text-gray-400">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2 {...fadeUp} className="text-3xl font-bold mb-6">
          Upcoming Events
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              {...fadeUp}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800 p-6 rounded-2xl"
            >
              <p className="text-xl font-semibold">{e.title}</p>
              <p className="text-gray-400">{e.date}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <motion.footer
        {...fadeUp}
        className="border-t border-white/10 py-10 text-center text-sm text-gray-400 space-y-4"
      >
        <div className="flex flex-wrap gap-6 justify-center">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#community">Community</a>
        </div>
        <p>© 2026 FutureStackk Community. All rights reserved.</p>
      </motion.footer>

      {/* MODAL */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-800 p-8 rounded-2xl w-96 space-y-4"
          >
            <h3 className="text-2xl font-bold">Join FutureStackk 🚀</h3>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                name="name"
                onChange={handleChange}
                className="w-full bg-gray-700 px-3 py-2 rounded"
                placeholder="Your name"
                required
              />
              <input
                name="email"
                onChange={handleChange}
                className="w-full bg-gray-700 px-3 py-2 rounded"
                placeholder="Your email"
                required
              />
                 <input
                name="role"
                onChange={handleChange}
                className="w-full bg-gray-700 px-3 py-2 rounded"
                placeholder="Role . eg: backend"
                required
              />
              <textarea
                name="message"
                onChange={handleChange}
                className="w-full bg-gray-700 px-3 py-2 rounded"
                placeholder="Your message"
              />
               
            
              <button className="w-full bg-cyan-500 py-2 rounded-lg">
                Submit
              </button>
            </form>

            <button onClick={() => setOpen(false)} className="text-red-400">
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default App;

/* ================= MEMBERS SECTION ================= */

function Members() {
  const people = [
    {
      name: "Khagendra Rajbanshi",
      role: "Frontend Developer",
      img: "https://cdn-icons-png.flaticon.com/512/11789/11789135.png",
    },
    {
      name: "sudeep luitel",
      role: "UI / UX Designer",
      img: "https://cdn-icons-png.flaticon.com/512/11789/11789135.png",
    },
    {
      name: "sabin subedi",
      role: "Backend Developer",
      img: "https://cdn-icons-png.flaticon.com/512/11789/11789135.png",
    },
    {
      name: "Diwakar khanal",
      role: "Mobile App Developer",
      img: "https://cdn-icons-png.flaticon.com/512/11789/11789135.png",
    },
    {
      name: "Rudhra",
      role: "AI / ML Engineer",
      img: "https://cdn-icons-png.flaticon.com/512/11789/11789135.png",
    },
    {
      name: "Jiban Tajpuriya",
      role: "Community Lead",
      img: "https://cdn-icons-png.flaticon.com/512/11789/11789135.png",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="members">
      <motion.h2 {...fadeUp} className="text-4xl font-bold mb-10 text-center">
        ⭐ Core Team Members
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {people.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            whileHover={{ scale: 1.06 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-white/10 shadow-xl p-6 rounded-3xl text-center"
          >
            <motion.img
              src={p.img}
              alt={p.name}
              className="w-28 h-28 rounded-full mx-auto border-4 border-cyan-400"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <h3 className="text-xl font-semibold mt-4">{p.name}</h3>
            <p className="text-gray-400">{p.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
