import React from "react";
import { motion } from "framer-motion";
import {
  Mic,
  Circle,
} from "lucide-react";

function AssistantPreview() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: .95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: .8,
      }}
      className="relative w-full flex justify-center"
    >

      {/* Glow */}

      <div className="absolute top-10 h-[420px] w-[420px] rounded-full bg-gradient-to-r from-fuchsia-400/20 via-violet-400/20 to-cyan-300/20 blur-[120px]" />

      {/* Card */}

      <div className="relative w-[340px] sm:w-[360px] rounded-[36px] overflow-hidden shadow-[0_35px_90px_rgba(0,0,0,.28)]">

        {/* Background */}

        <div className="absolute inset-0 bg-gradient-to-b from-[#251C46] via-[#141428] to-[#090913]" />

        {/* Glow */}

        <div className="absolute left-1/2 top-16 h-56 w-56 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[90px]" />

        <div className="relative p-7">

          {/* Window Buttons */}

          <div className="flex justify-end gap-2">

            <Circle
              size={11}
              fill="#111827"
              stroke="#111827"
            />

            <Circle
              size={11}
              fill="#ffffff"
              stroke="#ffffff"
            />

            <Circle
              size={11}
              fill="#E5E7EB"
              stroke="#E5E7EB"
            />

            <Circle
              size={11}
              fill="#10B981"
              stroke="#10B981"
            />

          </div>

          {/* AI Orb */}

          <div className="mt-8 flex justify-center">

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400"
            >

              {/* Glow */}

              <div className="absolute inset-0 rounded-full blur-2xl bg-fuchsia-400/50" />

              <div className="relative h-32 w-32 rounded-full bg-gradient-to-br from-cyan-300 via-violet-400 to-fuchsia-500" />

            </motion.div>

          </div>

          {/* Heading */}

          <h2 className="mt-10 text-center text-4xl font-bold text-white">

            Hello! I'm

            <br />

            DevNova AI

          </h2>

          <p className="mt-5 text-center text-[15px] leading-7 text-slate-400">

            Your smart voice assistant.

            <br />

            Ask anything about your website.

          </p>
          