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

      <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[180px]" />

    </main>
  );
}

export default Home;