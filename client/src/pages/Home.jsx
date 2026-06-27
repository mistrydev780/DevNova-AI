import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import AssistantPreview from "../Components/AssistantPreview";


function Home({ user }) {
  return (
    <main className="relative overflow-hidden bg-[#FBFBFD]">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 -z-20">

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Glow Left */}

        <div className="absolute -left-52 top-20 h-[700px] w-[700px] rounded-full bg-fuchsia-300/20 blur-[170px]" />

        {/* Glow Right */}

        <div className="absolute right-0 top-32 h-[650px] w-[650px] rounded-full bg-cyan-300/20 blur-[170px]" />

        {/* Bottom */}

        <div className="absolute bottom-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-300/10 blur-[180px]" />

      </div>

      {/* ================= HERO ================= */}

      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-6 py-3 shadow-xl backdrop-blur-xl"
        >

          <Sparkles
            size={15}
            className="text-green-500"
          />

          <span className="text-sm font-semibold text-slate-700">

            Voice AI for modern websites

          </span>

        </motion.div>
                {/* ================= HEADING ================= */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .2,
            duration: .7,
          }}
          className="mt-14 max-w-5xl text-center text-5xl font-black leading-[1.05] tracking-tight text-[#0F172A] sm:text-6xl lg:text-7xl xl:text-[88px]"
        >

          Add a{" "}

          <span className="bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">

            Virtual Assistant

          </span>

          <br />

          to your website

        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: .35,
          }}
          className="mt-10 max-w-3xl text-center text-xl leading-10 text-slate-500"
        >

          Create a smart voice-enabled assistant that talks to visitors,
          answers questions and helps users navigate your website instantly.

        </motion.p>

        {/* Button */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .5,
          }}
          className="mt-12"
        >

          <button
            className="rounded-2xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-emerald-400 px-10 py-5 text-lg font-semibold text-white shadow-[0_25px_60px_rgba(168,85,247,.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_30px_70px_rgba(168,85,247,.45)]"
          >

            Build Your Assistant

          </button>

        </motion.div>

        <p className="mt-6 text-sm font-medium text-slate-400">

          Free plan includes 200 AI responses

        </p>

        {/* Spacer before preview */}

        <div className="h-28" />

                {/* ================= Assistant Preview ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative flex w-full justify-center"
        >

          {/* Background Glow */}

          <div className="absolute top-24 h-[520px] w-[520px] rounded-full bg-gradient-to-r from-fuchsia-300/20 via-cyan-300/20 to-emerald-300/20 blur-[170px]" />

          {/* Assistant Card */}

          <AssistantPreview />

        </motion.div>

      </section>

      {/* Bottom Blur */}
      
{/* ====================================================== */
/*                GET STARTED SECTION                      */
/* ====================================================== */}

<section className="relative bg-white py-28 overflow-hidden">

  {/* Background */}

  <div className="absolute inset-0">

    <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-fuchsia-200/20 blur-[120px]" />

    <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-200/20 blur-[120px]" />

  </div>

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Heading */}

    <motion.div

      initial={{
        opacity:0,
        y:40,
      }}

      whileInView={{
        opacity:1,
        y:0,
      }}

      viewport={{
        once:true,
      }}

      transition={{
        duration:.7,
      }}

      className="text-center"

    >

      <h2 className="text-5xl font-black text-slate-900">

        Get started in minutes

      </h2>

      <p className="mt-5 text-lg text-slate-500">

        Simple setup. No complicated integration.

      </p>

    </motion.div>

    {/* Cards */}

    <div

      className="
      mt-20
      grid
      gap-7
      sm:grid-cols-2
      lg:grid-cols-4
      "

    >
      {[
  {
    no: "01",
    title: "Sign up free",
    desc: "Continue with Google and create your assistant instantly.",
  },
  {
    no: "02",
    title: "Customize assistant",
    desc: "Set your business name, tone, voice and theme.",
  },
  {
    no: "03",
    title: "Train your assistant",
    desc: "Add business details and personalize responses.",
  },
  {
    no: "04",
    title: "Embed anywhere",
    desc: "Copy one script tag and add it to your website.",
  },
].map((item, index) => (

  <motion.div

    key={item.no}

    initial={{
      opacity: 0,
      y: 40,
    }}

    whileInView={{
      opacity: 1,
      y: 0,
    }}

    viewport={{
      once: true,
    }}

    transition={{
      delay: index * 0.12,
      duration: .6,
    }}

    whileHover={{
      y: -10,
      scale: 1.03,
    }}

    className="
      group
      rounded-[30px]
      bg-white
      p-8
      shadow-[0_20px_45px_rgba(15,23,42,.08)]
      border
      border-slate-100
      transition-all
      duration-300
      hover:shadow-[0_25px_60px_rgba(168,85,247,.18)]
    "

  >

    {/* Number */}

    <h3 className="text-5xl font-black bg-gradient-to-r from-fuchsia-500 via-violet-500 to-emerald-400 bg-clip-text text-transparent">

      {item.no}

    </h3>

    {/* Title */}

    <h4 className="mt-8 text-2xl font-bold text-slate-900">

      {item.title}

    </h4>

    {/* Description */}

    <p className="mt-5 leading-8 text-slate-500">

      {item.desc}

    </p>

  </motion.div>

))}
    </div>

    {/* Floating Decoration */}

    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: .5,
      }}
      className="pointer-events-none absolute left-20 top-44 hidden xl:block"
    >

      <div className="h-28 w-28 rounded-[30px] bg-gradient-to-br from-fuchsia-100 to-cyan-100 shadow-2xl blur-sm opacity-40" />

    </motion.div>

    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: .8,
      }}
      className="pointer-events-none absolute right-20 bottom-20 hidden xl:block"
    >

      <div className="h-36 w-36 rounded-full bg-gradient-to-r from-fuchsia-300/20 via-violet-300/20 to-cyan-300/20 blur-[90px]" />

    </motion.div>

  </div>

</section>
      {/* ====================================================== */
/*                     FOOTER                              */
/* ====================================================== */}

<footer className="relative overflow-hidden bg-[#081225]">

  {/* Glow */}

  <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-[120px]" />

  <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />

  <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row">

    {/* Left */}

    <div className="flex items-center gap-4">

      <img

        src="/logo.png"

        alt="DevNova"

        className="h-14 w-14 rounded-2xl object-cover shadow-lg"

      />

      <div>

        <h3 className="text-2xl font-bold text-white">

          DevNova AI

        </h3>

        <p className="mt-1 text-sm text-slate-400">

          Voice Assistant for websites

        </p>

      </div>

    </div>

    {/* Center */}

    <div className="flex flex-wrap items-center justify-center gap-8">

      <a

        href="#"

        className="text-slate-400 transition hover:text-white"

      >

        Features

      </a>

      <a

        href="#"

        className="text-slate-400 transition hover:text-white"

      >

        Pricing

      </a>

      <a

        href="#"

        className="text-slate-400 transition hover:text-white"

      >

        Documentation

      </a>

      <a

        href="#"

        className="text-slate-400 transition hover:text-white"

      >

        Contact

      </a>

    </div>

    {/* Right */}

    <div className="text-center md:text-right">

      <p className="text-sm text-slate-500">

        © {new Date().getFullYear()} DevNova AI

      </p>

      <p className="mt-1 text-xs text-slate-600">

        All Rights Reserved.

      </p>

    </div>

  </div>

</footer>
    </main>
  );
}

export default Home;