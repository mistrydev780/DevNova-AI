import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  FiPlus,
  FiTrash2,
  FiLoader,
  FiExternalLink,
} from "react-icons/fi";

import { ServerUrl } from "../App";

function Builder({ user, setUser }) {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [assistantName, setAssistantName] = useState(
    user?.assistantName || ""
  );

  const [businessName, setBusinessName] = useState(
    user?.businessName || ""
  );

  const [businessType, setBusinessType] = useState(
    user?.businessType || ""
  );

  const [businessDescription, setBusinessDescription] = useState(
    user?.businessDescription || ""
  );

  const [theme, setTheme] = useState(
    user?.theme || "dark"
  );

  const [tone, setTone] = useState(
    user?.tone || "friendly"
  );

  const [geminiApiKey, setGeminiApiKey] = useState(
    user?.geminiApiKey || ""
  );

  const [pages, setPages] = useState(
    user?.pages || []
  );

  const [pageName, setPageName] = useState("");

  const [pagePath, setPagePath] = useState("");

  const [pageKeywords, setPageKeywords] = useState("");

  const remainingMessages = Math.max(
    0,
    (user?.requestLimit || 0) -
    (user?.totalMessages || 0)
  );

  const remainingDays =
    user?.proExpiresAt
      ? Math.max(
        0,
        Math.ceil(
          (
            new Date(user.proExpiresAt) -
            new Date()
          ) /
          (1000 * 60 * 60 * 24)
        )
      )
      : 0;

  const themes = [
    "light",
    "dark",
    "glass",
    "neon",
  ];

  const tones = [
    "friendly",
    "professional",
    "sales",
  ];

  const addPage = () => {

    if (!pageName.trim() || !pagePath.trim()) {

      return toast.error("Enter page name and path");

    }

    const newPage = {

      name: pageName,

      path: pagePath,

      keywords: pageKeywords
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),

    };

    setPages((prev) => [...prev, newPage]);

    setPageName("");

    setPagePath("");

    setPageKeywords("");

  };

  const removePage = (index) => {

    setPages((prev) =>
      prev.filter((_, i) => i !== index)
    );

  };

  const saveAssistant = async () => {

    try {

      setLoading(true);

      const data = {

        assistantName,

        businessName,

        businessType,

        businessDescription,

        tone,

        theme,

        geminiApiKey,

        pages,

      };

      const res = await axios.post(

        `${ServerUrl}/api/user/save-assistant`,

        data,

        {

          withCredentials: true,

        }

      );

      toast.success(res.data.message);

      setUser((prev) => ({
        ...prev,
        ...data,
        isSetupComplete: true,
      }));

      // navigate("/builder");
    } catch (error) {

      toast.error(

        error.response?.data?.message ||

        "Failed to save assistant"

      );

    } finally {

      setLoading(false);

    }

  };
  const showDashboard = user?.isSetupComplete;
  const embedCode =
    `<script
src="${ServerUrl}/widget.js"
data-assistant="${user._id}">
</script>`;
  return (

    <div className="min-h-screen bg-[#f7f8fc] px-4 py-8">
      {

        !showDashboard ? (

          <>
            <div className="mx-auto max-w-4xl">

              {/* ================= HEADER ================= */}

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
                  duration: .5,
                }}

                className="mb-8"

              >

                <h1 className="text-4xl font-black text-[#081028]">

                  Assistant Builder

                </h1>

                <p className="mt-2 text-gray-500">

                  Customize your virtual assistant

                </p>

              </motion.div>
              {/* ================= BASIC INFO ================= */}

              <motion.div

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  delay: .1,
                }}

                className="rounded-3xl border border-[#ececec] bg-white p-8 shadow-sm"

              >

                <h2 className="text-xl font-bold text-[#111827]">

                  Basic Information

                </h2>

                <div className="mt-6 space-y-5">
                  <input

                    type="text"

                    value={assistantName}

                    onChange={(e) => setAssistantName(e.target.value)}

                    placeholder="Assistant Name"

                    className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    px-5
                    py-4
                    outline-none
                    transition-all
                    focus:border-violet-500
                    focus:ring-4
                    focus:ring-violet-100
                    "

                  />
                  <input

                    type="text"

                    value={businessName}

                    onChange={(e) => setBusinessName(e.target.value)}

                    placeholder="Business Name"

                    className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    px-5
                    py-4
                    outline-none
                    transition-all
                    focus:border-violet-500
                    focus:ring-4
                    focus:ring-violet-100
                    "

                  />
                  <input

                    type="text"

                    value={businessType}

                    onChange={(e) => setBusinessType(e.target.value)}

                    placeholder="Business Type"

                    className="
                    w-full
                    rounded-2xl
                    border
                    border-gray-200
                    px-5
                    py-4
                    outline-none
                    transition-all
                    focus:border-violet-500
                    focus:ring-4
                    focus:ring-violet-100
                    "

                  />
                  <textarea

                    rows={5}

                    value={businessDescription}

                    onChange={(e) => setBusinessDescription(e.target.value)}

                    placeholder="Business Description"

                    className="
                    w-full
                    resize-none
                    rounded-2xl
                    border
                    border-gray-200
                    px-5
                    py-4
                    outline-none
                    transition-all
                    focus:border-violet-500
                    focus:ring-4
                    focus:ring-violet-100
                    "

                  />
                </div>

              </motion.div>
              {/* ================= APPEARANCE ================= */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: .2 }}
                className="mt-8 rounded-3xl border border-[#ececec] bg-white p-8 shadow-sm"
              >

                <h2 className="text-xl font-bold text-[#111827]">

                  Appearance

                </h2>
                {/* Theme */}

                <div className="mt-7">

                  <p className="mb-3 text-sm font-medium text-gray-500">

                    Theme

                  </p>

                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {
                      themes.map((item) => (

                        <button

                          key={item}

                          type="button"

                          onClick={() => setTheme(item)}

                          className={`

rounded-2xl

border

py-4

font-semibold

capitalize

transition-all

duration-300

${theme === item

                              ?

                              "border-violet-500 bg-violet-50 text-violet-700 shadow"

                              :

                              "border-gray-200 bg-white hover:border-violet-300"

                            }

`}

                        >

                          {item}

                        </button>

                      ))
                    }
                  </div>

                </div>

                {/* Tone */}

                <div className="mt-8">

                  <p className="mb-3 text-sm font-medium text-gray-500">

                    Assistant Tone

                  </p>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {
                      tones.map((item) => (

                        <button

                          key={item}

                          type="button"

                          onClick={() => setTone(item)}

                          className={`

rounded-2xl

border

py-4

font-semibold

capitalize

transition-all

duration-300

${tone === item

                              ?

                              "border-violet-500 bg-violet-50 text-violet-700 shadow"

                              :

                              "border-gray-200 bg-white hover:border-violet-300"

                            }

`}

                        >

                          {item}

                        </button>

                      ))
                    }
                  </div>

                </div>

              </motion.div>
              {/* ================= GEMINI API ================= */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: .3 }}
                className="mt-8 rounded-3xl border border-[#ececec] bg-white p-8 shadow-sm"
              >

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                  <div>

                    <h2 className="text-xl font-bold text-[#111827]">

                      Gemini API Key

                    </h2>

                    <p className="mt-1 text-sm text-gray-500">

                      Add your Gemini API key to power your assistant.

                    </p>

                  </div>
                  <a

                    href="https://aistudio.google.com/app/apikey"

                    target="_blank"

                    rel="noreferrer"

                    className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-gradient-to-r
            from-fuchsia-500
            via-violet-500
            to-emerald-400
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
            "

                  >

                    Get API Key

                    <FiExternalLink size={16} />

                  </a>

                </div>
                <div className="mt-6">

                  <input

                    type="password"

                    value={geminiApiKey}

                    onChange={(e) => setGeminiApiKey(e.target.value)}

                    placeholder="AIza..."

                    className="
            w-full
            rounded-2xl
            border
            border-gray-200
            px-5
            py-4
            outline-none
            transition-all
            focus:border-violet-500
            focus:ring-4
            focus:ring-violet-100
            "

                  />

                  <p className="mt-3 text-sm text-gray-400">

                    Your API key is stored securely and used only for generating AI responses.

                  </p>

                </div>
              </motion.div>
              {/* ================= WEBSITE PAGES ================= */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: .4 }}
                className="mt-8 rounded-3xl border border-[#ececec] bg-white p-8 shadow-sm"
              >

                <h2 className="text-xl font-bold text-[#111827]">

                  Website Pages

                </h2>

                <p className="mt-2 text-gray-500">

                  Add important pages so your assistant can guide visitors correctly.

                </p>

                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  <input

                    type="text"

                    value={pageName}

                    onChange={(e) => setPageName(e.target.value)}

                    placeholder="Page Name"

                    className="
w-full
rounded-2xl
border
border-gray-200
px-5
py-4
outline-none
transition-all
focus:border-violet-500
focus:ring-4
focus:ring-violet-100
"

                  />
                  <input

                    type="text"

                    value={pagePath}

                    onChange={(e) => setPagePath(e.target.value)}

                    placeholder="/pricing"

                    className="
w-full
rounded-2xl
border
border-gray-200
px-5
py-4
outline-none
transition-all
focus:border-violet-500
focus:ring-4
focus:ring-violet-100
"

                  />
                  <textarea

                    rows={3}

                    value={pageKeywords}

                    onChange={(e) => setPageKeywords(e.target.value)}

                    placeholder="pricing, plans, premium"

                    className="
md:col-span-2
resize-none
rounded-2xl
border
border-gray-200
px-5
py-4
outline-none
transition-all
focus:border-violet-500
focus:ring-4
focus:ring-violet-100
"

                  />
                  <div className="mt-6">

                    <button

                      type="button"

                      onClick={addPage}

                      className="
inline-flex
items-center
gap-2
rounded-2xl
bg-gradient-to-r
from-fuchsia-500
via-violet-500
to-indigo-500
px-6
py-4
font-semibold
text-white
transition-all
duration-300
hover:scale-105
"

                    >

                      <FiPlus size={18} />

                      Add Page

                    </button>

                  </div>
                </div>
                <div className="mt-8 space-y-4">

                  {

                    pages.map((page, index) => (

                      <div

                        key={index}

                        className="
flex
flex-col
gap-4
rounded-2xl
border
border-gray-200
bg-gray-50
p-5
md:flex-row
md:items-center
md:justify-between
"

                      >

                        <div>

                          <h3 className="font-bold text-gray-800">

                            {page.name}

                          </h3>

                          <p className="mt-1 text-sm text-gray-500">

                            {page.path}

                          </p>

                          <p className="mt-2 text-xs text-violet-600">

                            {page.keywords.join(", ")}

                          </p>

                        </div>

                        <button

                          type="button"

                          onClick={() => removePage(index)}

                          className="
flex
h-11
w-11
items-center
justify-center
rounded-xl
bg-red-50
text-red-500
transition-all
hover:bg-red-100
"

                        >

                          <FiTrash2 size={18} />

                        </button>

                      </div>

                    ))

                  }

                </div>
              </motion.div>
              {/* ================= ACTIONS ================= */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: .5 }}
                className="mt-8 flex flex-col-reverse gap-4 md:flex-row md:justify-end"
              >

                {/* Cancel */}

                <button

                  type="button"

                  onClick={() => navigate("/")}

                  className="
        rounded-2xl
        border
        border-gray-300
        bg-white
        px-8
        py-4
        font-semibold
        text-gray-700
        transition-all
        duration-300
        hover:bg-gray-100
        "

                >

                  Cancel

                </button>

                {/* Save */}

                <button

                  type="button"

                  disabled={loading}

                  onClick={saveAssistant}

                  className="
        inline-flex
        items-center
        justify-center
        gap-3
        rounded-2xl
        bg-gradient-to-r
        from-fuchsia-500
        via-violet-500
        to-indigo-500
        px-10
        py-4
        font-semibold
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-105
        disabled:cursor-not-allowed
        disabled:opacity-60
        "

                >

                  {

                    loading

                      ?

                      <>

                        <FiLoader

                          className="animate-spin"

                          size={18}

                        />

                        Saving...

                      </>

                      :

                      "Save Assistant"

                  }

                </button>

              </motion.div>

            </div>   {/* Close mx-auto max-w-4xl */}

          </>

        ) : (
          <>

            <div className="mx-auto max-w-4xl">

              <motion.div

                initial={{ opacity: 0, y: 20 }}

                animate={{ opacity: 1, y: 0 }}

                className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8"

              >

                <h1 className="text-4xl font-black text-[#081028]">

                  Assistant Ready 🚀

                </h1>

                <p className="mt-2 text-gray-500">

                  Your assistant has been configured successfully.

                </p>
                {
                  user?.plan === "pro" && (

                    <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">

                      <p className="text-sm text-gray-500">

                        Subscription

                      </p>

                      <h2 className="mt-2 text-3xl font-black text-indigo-700">

                        {remainingDays} Days Left

                      </h2>

                    </div>

                  )
                }
                <div className="mt-8 grid gap-5 md:grid-cols-3">

                  {/* Current Plan */}

                  <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-violet-50 to-white p-6">

                    <p className="text-sm text-gray-500">

                      Current Plan

                    </p>

                    <h2 className="mt-3 text-3xl font-black text-[#081028]">

                      {user?.plan?.toUpperCase()}

                    </h2>

                  </div>

                  {/* Gemini */}

                  <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-emerald-50 to-white p-6">

                    <p className="text-sm text-gray-500">

                      Gemini Status

                    </p>

                    <h2 className="mt-3 text-3xl font-black text-emerald-600">

                      {user?.geminiStatus}

                    </h2>

                  </div>

                  {/* Messages */}

                  <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-cyan-50 to-white p-6">

                    <p className="text-sm text-gray-500">

                      Messages Left

                    </p>

                    <h2 className="mt-3 text-3xl font-black text-[#081028]">

                      {remainingMessages}

                    </h2>

                  </div>

                </div>
                {/* ================= INSTALL GUIDE ================= */}

                <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6">

                  <h3 className="text-lg font-bold text-[#081028]">
                    Where to paste this script?
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Paste this script before the closing
                    <span className="font-semibold"> {"</body>"} </span>
                    tag of your website.
                  </p>

                  <p className="mt-6 text-sm font-semibold text-gray-700">
                    Example:
                  </p>

                  <div className="mt-4 rounded-2xl bg-[#0b1020] p-5 overflow-x-auto">

                    <pre className="text-sm leading-8 text-emerald-400 whitespace-pre-wrap">
                      {`<body>

    Your Website Content

    ${embedCode}

</body>`}
                    </pre>

                  </div>

                </div>
              </motion.div>
              {/* ================= EMBED CODE ================= */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: .5 }}
                className="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h2 className="text-xl font-bold text-[#081028]">

                      Embed Script

                    </h2>

                    <p className="mt-2 text-gray-500">

                      Copy this script and paste it into your website.

                    </p>

                  </div>

                  <button

                    onClick={() => {

                      navigator.clipboard.writeText(embedCode);

                      toast.success("Script copied successfully");

                    }}

                    className="
            rounded-xl
            bg-gradient-to-r
            from-fuchsia-500
            via-violet-500
            to-indigo-500
            px-5
            py-3
            text-white
            font-semibold
            transition
            hover:scale-105
            "

                  >

                    Copy Code

                  </button>

                </div>

                <div className="mt-6 overflow-x-auto rounded-2xl bg-[#0B1020] p-6">

                  <pre className="text-sm leading-7 text-emerald-400 whitespace-pre-wrap">

                    {embedCode}

                  </pre>

                </div>

              </motion.div>
              {/* ================= DASHBOARD ACTIONS ================= */}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: .6 }}
                className="mt-8 flex flex-col gap-4 md:flex-row md:justify-end"
              >

                {/* Edit */}

                <button

                  type="button"

                  onClick={() => setUser((prev) => ({
                    ...prev,
                    isSetupComplete: false,
                  }))}

                  className="
        rounded-2xl
        border
        border-gray-300
        bg-white
        px-8
        py-4
        font-semibold
        text-gray-700
        transition-all
        hover:bg-gray-100
        "

                >

                  Edit Assistant

                </button>

                {/* Home */}

                <button

                  type="button"

                  onClick={() => navigate("/")}

                  className="
        rounded-2xl
        bg-gradient-to-r
        from-fuchsia-500
        via-violet-500
        to-indigo-500
        px-8
        py-4
        font-semibold
        text-white
        shadow-lg
        transition-all
        hover:scale-105
        "

                >

                  Go To Dashboard

                </button>
              </motion.div>

            </div>     

          </>         

      )

}

    </div>     

);

}

export default Builder;