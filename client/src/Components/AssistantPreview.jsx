import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mic } from "lucide-react";

function AssistantPreview({ assistant }) {

    const [theme, setTheme] = useState(assistant?.theme || "dark");

    useEffect(() => {
        setTheme(assistant?.theme || "dark");
    }, [assistant]);

    //   const theme = assistant?.theme || "light";

    const themes = {

        dark: {
            card:
                "bg-[radial-gradient(circle_at_top,#2a1f56_0%,#17162d_45%,#090911_100%)]",
            text: "text-white",
            sub: "text-gray-400",
            border: "border-white/5",
            glow: "bg-fuchsia-500/25",
            button:
                "from-fuchsia-500 via-violet-500 to-indigo-500",
            wave:
                "from-fuchsia-500 via-violet-400 to-cyan-300",
            badge:
                "bg-fuchsia-500/10 border-fuchsia-500/30 text-fuchsia-300",
            bubble:
                "bg-white/5 border-white/10",
            dots: [
                "bg-[#29263d]",
                "bg-white",
                "bg-[#d8d8d8]",
                "bg-green-400",
            ],
        },

        light: {
            card: "bg-white",
            text: "text-slate-900",
            sub: "text-slate-500",
            border: "border-slate-200",
            glow: "bg-indigo-300/30",
            button:
                "from-fuchsia-500 to-indigo-500",
            wave:
                "from-fuchsia-500 via-violet-500 to-cyan-500",
            badge:
                "bg-fuchsia-50 border-fuchsia-200 text-fuchsia-600",
            bubble:
                "bg-slate-50 border-slate-200",
            dots: [
                "bg-gray-300",
                "bg-gray-500",
                "bg-gray-700",
                "bg-green-500",
            ],
        },

       glass: {
    card:
        "bg-white/10 backdrop-blur-3xl",
    text: "text-white",
    sub: "text-slate-200",
    border: "border-white/20",
    glow: "bg-cyan-300/20",
    button:
        "from-cyan-400 via-violet-400 to-fuchsia-400",
    wave:
        "from-cyan-300 via-violet-300 to-fuchsia-300",
    badge:
        "bg-white/10 border-white/20 text-white",
    bubble:
        "bg-white/10 border-white/20",
    dots: [
        "bg-white/30",     // Dark Theme
        "bg-gray-300",     // Light Theme
        "bg-slate-700",    // Glass Theme (Selected Dot)
        "bg-green-400",    // Neon Theme
    ],
},

        neon: {
            card: "bg-[#04070d]",
            text: "text-white",
            sub: "text-cyan-200",
            border: "border-cyan-500/30",
            glow: "bg-cyan-400/25",
            button:
                "from-cyan-400 via-fuchsia-500 to-green-400",
            wave:
                "from-cyan-400 via-fuchsia-500 to-green-400",
            badge:
                "bg-cyan-500/10 border-cyan-500/40 text-cyan-300",
            bubble:
                "bg-cyan-500/5 border-cyan-400/20",
            dots: [
                "bg-cyan-500",
                "bg-fuchsia-500",
                "bg-violet-400",
                "bg-green-400",
            ],
        },

    };

    const ui = themes[theme];

    const themeNames = [
  "dark",
  "light",
  "glass",
  "neon",
];

    return (

        <motion.div

            initial={{
                opacity: 0,
                y: 40,
            }}

            animate={{
                opacity: 1,
                y: 0,
            }}

            transition={{
                duration: .7,
            }}

            className="relative flex justify-center"

        >

            {/* Glow */}

            <div
                className={`absolute top-10 h-[420px] w-[420px] rounded-full blur-[120px] ${ui.glow}`}
            />

            {/* Phone */}

            <div

                className={`
        relative
       w-[370px]
sm:w-[400px]
lg:w-[430px]
        rounded-[45px]
        overflow-hidden
        border
        ${ui.border}
        ${ui.card}
        shadow-[0_35px_80px_rgba(0,0,0,.35)]
        `}

            >

                <div className="px-7 pt-7 pb-8">
                    {/* Top Window Buttons */}

                    <div className="flex justify-end gap-2">

    {themeNames.map((item, index) => (

        <button

            key={item}

            onClick={() => setTheme(item)}

            className={`
                h-3
                w-3
                rounded-full
                transition-all
                duration-300
                ${ui.dots[index]}
                ${
                  theme===item
                  ? "scale-125 ring-2 ring-white shadow-lg"
                  : "opacity-80 hover:scale-110"
                }
            `}
        />

    ))}

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

                            className="relative"

                        >

                            {/* Outer Glow */}

                            <div

                                className={`
                absolute
                inset-0
                h-36
                w-36
                rounded-full
                blur-[40px]
                ${ui.glow}
                `}

                            />

                            {/* Main Circle */}

                            <div

                                className={`
                relative
                h-36
                w-36
                rounded-full
                bg-gradient-to-br
                ${ui.button}
                flex
                items-center
                justify-center
                `}

                            >

                                {/* Inner Orb */}

                                <div

                                    className="
                  h-28
                  w-28
                  rounded-full
                  bg-gradient-to-br
                  from-cyan-200
                  via-violet-300
                  to-fuchsia-400
                  opacity-90
                  "

                                />

                            </div>

                        </motion.div>

                    </div>

                    {/* Heading */}

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
                            delay: .2,
                        }}

                        className="mt-10 text-center"

                    >

                        <h2

                            className={`text-[42px] leading-[50px] font-black ${ui.text}`}

                        >

                            Hello! I'm

                            <br />

                            DevNova AI

                        </h2>

                        <p

                            className={`mt-5 text-[15px] leading-7 ${ui.sub}`}

                        >

                            Your smart voice assistant.

                            <br />

                            Ask anything about your website.

                        </p>

                    </motion.div>
                    {/* Listening Badge */}

                    <div className="mt-8 flex justify-center">

                        <motion.div

                            animate={{
                                scale: [1, 1.03, 1],
                            }}

                            transition={{
                                repeat: Infinity,
                                duration: 2,
                            }}

                            className={`
                rounded-full
                border
                px-5
                py-2
                ${ui.badge}
              `}

                        >

                            <span className="text-sm font-semibold">

                                🎤 Listening...

                            </span>

                        </motion.div>

                    </div>

                    {/* Voice Equalizer */}

                    <div className="mt-8 flex justify-center">

                        <div className="flex items-end gap-[5px] h-[55px]">

                            {[18, 28, 22, 40, 30, 46, 26, 36].map((height, index) => (

                                <motion.div

                                    key={index}

                                    animate={{
                                        height: [height, height + 18, height],
                                    }}

                                    transition={{
                                        repeat: Infinity,
                                        duration: 0.9,
                                        delay: index * 0.08,
                                        ease: "easeInOut",
                                    }}

                                    style={{
                                        height,
                                    }}

                                    className={`
                    w-[5px]
                    rounded-full
                    bg-gradient-to-t
                    ${ui.wave}
                  `}

                                />

                            ))}

                        </div>

                    </div>

                    {/* Welcome Bubble */}

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

                        className={`
              mt-10
              rounded-3xl
              border
              p-5
              text-center
              ${ui.bubble}
            `}

                    >

                        <h3 className={`${ui.text} text-sm font-semibold`}>

                            Welcome 👋

                        </h3>

                        <p

                            className={`mt-4 text-[13px] leading-7 ${ui.sub}`}

                        >

                            I can answer customer questions,

                            <br />

                            navigate your website,

                            <br />

                            explain products,

                            pricing,

                            and much more.

                        </p>

                    </motion.div>

                    {/* Mic Button */}

                    <div className="mt-10 flex justify-center">

                        <motion.button

                            whileHover={{
                                scale: 1.08,
                            }}

                            whileTap={{
                                scale: .95,
                            }}

                            className={`
                relative
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                ${ui.button}
                shadow-[0_0_45px_rgba(168,85,247,.45)]
              `}

                        >

                            <Mic

                                size={32}

                                className="text-white"

                            />

                            {/* Pulse */}

                            <motion.div

                                animate={{
                                    scale: [1, 1.8],
                                    opacity: [.5, 0],
                                }}

                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                }}

                                className="absolute inset-0 rounded-full border-4 border-fuchsia-400"

                            />

                        </motion.button>

                    </div>
                </div>

            </div>

            {/* Bottom Glow */}

            <div

                className={`
          absolute
          -bottom-20
          left-1/2
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          blur-[120px]
          ${ui.glow}
        `}

            />

        </motion.div>

    );

}

export default AssistantPreview;