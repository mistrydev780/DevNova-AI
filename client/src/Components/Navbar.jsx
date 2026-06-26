import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  LogOut,
  ChevronDown,
  CreditCard,
  Bot,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import axios from "axios";

function Navbar({ user, setUser }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const firstLetter =
    user?.name?.charAt(0)?.toUpperCase() || "D";

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* LEFT */}

          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="DevNova AI"
              className="h-12 w-12 rounded-2xl shadow-lg"
            />

            <div>

              <h2 className="text-2xl font-black text-slate-900">

                DevNova AI

              </h2>

              <p className="-mt-1 text-xs text-slate-500">

                AI Business Assistant

              </p>

            </div>

          </Link>

          {/* DESKTOP MENU */}

          <div className="hidden items-center gap-4 lg:flex">

            <NavLink
              to="/builder"
              className={({ isActive }) =>
                isActive
                  ? "rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 text-white shadow-lg"
                  : "rounded-xl px-6 py-3 font-semibold text-slate-600 transition hover:bg-slate-100"
              }
            >
              Builder
            </NavLink>

            <NavLink
              to="/billing"
              className={({ isActive }) =>
                isActive
                  ? "rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-6 py-3 text-white shadow-lg"
                  : "rounded-xl px-6 py-3 font-semibold text-slate-600 transition hover:bg-slate-100"
              }
            >
              Billing
            </NavLink>

          </div>

          {/* PROFILE */}

          <div className="hidden lg:block">

            <div className="relative">

              <button
                onClick={() =>
                  setProfileOpen(!profileOpen)
                }
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm transition hover:shadow-md"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-lg font-bold text-white">

                  {firstLetter}

                </div>

                <div className="text-left">

                  <h3 className="text-sm font-bold text-slate-800">

                    {user?.name}

                  </h3>

                  <p className="max-w-[180px] truncate text-xs text-slate-500">

                    {user?.email}

                  </p>

                </div>

                <ChevronDown
                  size={18}
                  className={`transition ${
                    profileOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>

              {/* PROFILE DROPDOWN */}

              <AnimatePresence>

                {profileOpen && (

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                    }}
                    className="absolute right-0 mt-3 w-60 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
                  >

                    <div className="border-b p-5">

                      <h2 className="font-bold">

                        {user?.name}

                      </h2>

                      <p className="mt-1 text-sm text-slate-500">

                        {user?.email}

                      </p>

                    </div>

                    <Link
                      to="/builder"
                      className="flex items-center gap-3 px-5 py-4 transition hover:bg-slate-100"
                    >

                      <Bot size={18} />

                      Builder

                    </Link>

                    <Link
                      to="/billing"
                      className="flex items-center gap-3 px-5 py-4 transition hover:bg-slate-100"
                    >

                      <CreditCard size={18} />

                      Billing

                    </Link>

                    <button
                      className="flex w-full items-center gap-3 px-5 py-4 text-red-500 transition hover:bg-red-50"
                    >

                      <LogOut size={18} />

                      Logout

                    </button>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          </div>

          {/* MOBILE BUTTON */}

          <button
            onClick={() =>
              setOpenMenu(true)
            }
            className="rounded-xl p-3 transition hover:bg-slate-100 lg:hidden"
          >

            <Menu size={28} />

          </button>

        </div>

      </header>

            {/* ================= MOBILE DRAWER ================= */}

      <AnimatePresence>
        {openMenu && (
          <>
            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenMenu(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="fixed right-0 top-0 z-50 flex h-screen w-[320px] flex-col bg-white shadow-2xl lg:hidden"
            >
              {/* Header */}

              <div className="flex items-center justify-between border-b p-6">

                <div className="flex items-center gap-3">

                  <img
                    src={logo}
                    alt="logo"
                    className="h-12 w-12 rounded-2xl"
                  />

                  <div>

                    <h2 className="font-black text-slate-900">
                      DevNova AI
                    </h2>

                    <p className="text-xs text-slate-500">
                      AI Assistant
                    </p>

                  </div>

                </div>

                <button
                  onClick={() => setOpenMenu(false)}
                  className="rounded-xl p-2 hover:bg-slate-100"
                >
                  <X size={24} />
                </button>

              </div>

              {/* User */}

              <div className="border-b p-6">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-xl font-bold text-white">

                    {firstLetter}

                  </div>

                  <div>

                    <h3 className="font-bold text-slate-900">
                      {user?.name}
                    </h3>

                    <p className="max-w-[180px] truncate text-sm text-slate-500">
                      {user?.email}
                    </p>

                  </div>

                </div>

              </div>

              {/* Menu */}

              <div className="flex-1 p-5">

                <NavLink
                  to="/"
                  onClick={() => setOpenMenu(false)}
                  className={({ isActive }) =>
                    `mb-3 flex items-center gap-3 rounded-2xl px-5 py-4 font-semibold transition ${
                      isActive
                        ? "bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white"
                        : "hover:bg-slate-100 text-slate-700"
                    }`
                  }
                >
                  🏠 Home
                </NavLink>

                <NavLink
                  to="/builder"
                  onClick={() => setOpenMenu(false)}
                  className={({ isActive }) =>
                    `mb-3 flex items-center gap-3 rounded-2xl px-5 py-4 font-semibold transition ${
                      isActive
                        ? "bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white"
                        : "hover:bg-slate-100 text-slate-700"
                    }`
                  }
                >
                  🤖 Builder
                </NavLink>

                <NavLink
                  to="/billing"
                  onClick={() => setOpenMenu(false)}
                  className={({ isActive }) =>
                    `mb-3 flex items-center gap-3 rounded-2xl px-5 py-4 font-semibold transition ${
                      isActive
                        ? "bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white"
                        : "hover:bg-slate-100 text-slate-700"
                    }`
                  }
                >
                  💳 Billing
                </NavLink>

              </div>

              {/* Logout */}

              <div className="border-t p-5">

                <button
                  onClick={async () => {
                    try {
                      await axios.get(
                        "http://localhost:8000/api/auth/logout",
                        {
                          withCredentials: true,
                        }
                      );

                      setUser(null);
                      setOpenMenu(false);

                      window.location.href = "/login";

                    } catch (err) {
                      console.log(err);
                    }
                  }}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-red-50 py-4 font-semibold text-red-500 transition hover:bg-red-100"
                >
                  <LogOut size={18} />
                  Logout
                </button>

              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;