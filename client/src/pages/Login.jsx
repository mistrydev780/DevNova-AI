import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import axios from "axios"
import {
  Sparkles,
  ArrowRight,
  Mic,
  Brain,
  Globe,
  Headphones,
  Code2,
  CheckCircle2,
} from "lucide-react";

import logo from "../assets/logo.png";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import { ServerUrl } from "../App";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    title: "Sign up free",
    desc: "Continue with Google and create your assistant instantly.",
    icon: CheckCircle2,
  },
  {
    title: "Customize assistant",
    desc: "Business name, voice, colors and personality.",
    icon: Brain,
  },
  {
    title: "Train your assistant",
    desc: "Upload FAQs and business knowledge.",
    icon: Mic,
  },
  {
    title: "Embed anywhere",
    desc: "Copy one script and add it to any website.",
    icon: Code2,
  },
];

export default function Login({setUser}) {

const navigate = useNavigate()

  const handleLogin = async () => {
    try {
        const result = await signInWithPopup(auth,provider)
        const {displayName , email} = result.user
        const res = await axios.post(ServerUrl + "/api/auth/google",
          {name : displayName , email},
        {withCredentials:true})
       setUser(res.data)
        navigate("/")
        
    } catch (error) {
        console.log(error);
        
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#faf8ff]">

      {/* Aurora Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-32 top-10 h-[500px] w-[500px] rounded-full bg-cyan-300/30 blur-[120px]" />

        <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-purple-300/30 blur-[120px]" />

        <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-green-300/20 blur-[140px]" />

      </div>

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.04) 1px, transparent 1px),linear-gradient(90deg,rgba(0,0,0,.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-between gap-20 px-8">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          className="flex-1"
        >

          <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-5 py-2">

            <Sparkles className="h-4 w-4 text-purple-600"/>

            <span className="text-sm font-semibold text-purple-600">

              AI Voice Assistant Platform

            </span>

          </div>

          <h1 className="mt-10 text-7xl font-black leading-[1.05] text-slate-900">

            Build AI

            <br/>

            Assistants

            <br/>

            <span className="bg-gradient-to-r from-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">

              For Any

            </span>

            <br/>

            <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">

              Website

            </span>

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-slate-500">

            Create customizable AI voice assistants that talk,
            guide users, answer questions and integrate into any
            website instantly.

          </p>

          <button
            onClick={handleLogin}
            className="mt-10 flex h-14 items-center gap-4 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-emerald-400 px-8 text-lg font-semibold text-white shadow-xl transition hover:scale-105"
          >

            <FcGoogle size={28}/>

            Continue with Google

            <ArrowRight size={20}/>

          </button>

          <p className="mt-4 text-sm text-slate-500">

            Free plan includes 200 AI responses

          </p>

          {/* Features */}

          <div className="mt-14 grid grid-cols-3 gap-6">

            <div className="rounded-3xl bg-white/70 p-6 backdrop-blur-xl shadow-lg">

              <Mic className="text-fuchsia-500"/>

              <h3 className="mt-4 font-bold text-slate-900">

                Voice AI

              </h3>

            </div>

            <div className="rounded-3xl bg-white/70 p-6 backdrop-blur-xl shadow-lg">

              <Brain className="text-violet-500"/>

              <h3 className="mt-4 font-bold text-slate-900">

                Smart Chat

              </h3>

            </div>

            <div className="rounded-3xl bg-white/70 p-6 backdrop-blur-xl shadow-lg">

              <Globe className="text-cyan-500"/>

              <h3 className="mt-4 font-bold text-slate-900">

                Navigation

              </h3>

            </div>

          </div>

        </motion.div>
                {/* ================= RIGHT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-lg"
        >
          {/* Floating Badge */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="absolute -top-8 right-10 z-20 rounded-full bg-white px-5 py-3 shadow-2xl"
          >
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-slate-700">
                AI Online
              </span>
            </div>
          </motion.div>

          {/* Glass Card */}

          <div className="rounded-[36px] border border-white/70 bg-white/75 p-8 shadow-[0_25px_80px_rgba(0,0,0,.08)] backdrop-blur-3xl">

            {/* Logo */}

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 shadow-xl">

                <img
                  src={logo}
                  alt="DevNova AI"
                  className="h-10 w-10"
                />

              </div>

              <div>

                <h2 className="text-3xl font-black text-slate-900">
                  DevNova AI
                </h2>

                <p className="text-slate-500">
                  Build AI assistants in minutes
                </p>

              </div>

            </div>

            {/* Divider */}

            <div className="my-8 h-px bg-slate-200" />

            {/* Heading */}

            <h3 className="text-3xl font-black text-slate-900">

              Launch in Minutes

            </h3>

            <p className="mt-3 text-slate-500 leading-7">

              Set up your AI assistant, train it with your business,
              and embed it into your website without writing backend code.

            </p>

            {/* Steps */}

            <div className="mt-8 space-y-5">

              {steps.map((step, index) => {

                const Icon = step.icon;

                return (

                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.15,
                    }}
                    className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white">

                      <Icon size={22} />

                    </div>

                    <div>

                      <h4 className="font-bold text-slate-900">

                        {step.title}

                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-500">

                        {step.desc}

                      </p>

                    </div>

                  </motion.div>

                );

              })}

            </div>

            {/* Stats */}

            <div className="mt-10 grid grid-cols-3 gap-4">

              <div className="rounded-2xl bg-gradient-to-r from-fuchsia-50 to-pink-50 p-5 text-center">

                <h2 className="text-3xl font-black text-fuchsia-600">
                  12K+
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Users
                </p>

              </div>

              <div className="rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 p-5 text-center">

                <h2 className="text-3xl font-black text-cyan-600">
                  99.9%
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Uptime
                </p>

              </div>

              <div className="rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 p-5 text-center">

                <h2 className="text-3xl font-black text-green-600">
                  24/7
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  AI Support
                </p>

              </div>

            </div>

            {/* Bottom CTA */}

            <div className="mt-10 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 p-6 text-white">

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-xl font-bold">

                    Ready to build?

                  </h3>

                  <p className="mt-2 text-sm text-slate-300">

                    Join thousands of businesses using DevNova AI.

                  </p>

                </div>

                <Headphones
                  size={40}
                  className="text-cyan-300"
                />

              </div>

            </div>

          </div>
        </motion.div>
              </div>

      {/* ================= Floating Cards ================= */}

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute left-10 top-28 hidden xl:block"
      >
        <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-2xl backdrop-blur-xl">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500">

              <CheckCircle2 className="text-white" />

            </div>

            <div>

              <p className="text-xs uppercase tracking-widest text-slate-500">

                AI STATUS

              </p>

              <h3 className="font-bold text-slate-900">

                Online

              </h3>

            </div>

          </div>

        </div>

      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
        }}
        className="absolute bottom-24 left-16 hidden xl:block"
      >

        <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-2xl backdrop-blur-xl">

          <p className="text-sm text-slate-500">

            Average Response

          </p>

          <h2 className="mt-2 text-4xl font-black bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">

            0.8s

          </h2>

        </div>

      </motion.div>

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute right-12 top-20 hidden 2xl:block"
      >

        <div className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-2xl backdrop-blur-xl">

          <div className="flex items-center gap-4">

            <div className="h-4 w-4 rounded-full bg-green-500 animate-pulse"/>

            <div>

              <p className="text-xs uppercase tracking-widest text-slate-500">

                ACTIVE USERS

              </p>

              <h2 className="text-3xl font-black text-slate-900">

                12,489

              </h2>

            </div>

          </div>

        </div>

      </motion.div>

      {/* Bottom Blur */}

      <div className="absolute -bottom-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-fuchsia-400/20 blur-[180px]" />

      {/* Footer */}

      <footer className="absolute bottom-6 left-0 right-0">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 text-sm text-slate-500 md:flex-row">

          <p>

            © {new Date().getFullYear()} DevNova AI. All rights reserved.

          </p>

          <div className="flex items-center gap-6">

            <span>

              Powered by Gemini AI

            </span>

            <span>

              React + Node.js

            </span>

            <span>

              Made with ❤️

            </span>

          </div>

        </div>

      </footer>

    </div>

  );

}