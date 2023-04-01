import { useState } from "react";
import "../App.css";
import { motion, AnimatePresence } from "framer-motion";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import InstagramIcon from "../assets/images/Instagram_Glyph_White.svg";
import { Link } from "react-router-dom";

export default function MainTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="fixed left-2 top-2 text-white flex space-x-2 text-xs text-opacity-80 tracking-wider">
        <Link to="/">Home</Link>
        <Link to="/terms">Terms</Link>
      </div>
      <p className="text-white text-4xl opacity-90 fixed right-3 top-2 cursor-pointer">
        <a href="https://instagram.com/whispermeforever" target="_blank">
          <img
            src={InstagramIcon}
            alt="Instagram"
            className="w-4 h-4 fill-white"
          />
        </a>
      </p>
      <div className="flex justify-center max-w-[400px] p-10 flex-col">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
            }}
            className="font-headings text-7xl font-semibold text-slate-300"
          >
            <p>whisper</p>
            <p>me</p>
            <p>forever</p>
          </motion.div>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 2 }}
            className="mt-4 font-mono text-base tracking-widest text-gray-400"
          >
            <p></p>
            <p>you think a phenomenal life is your life</p>
            <p className="mt-2">
              a phenomenal life is what you do with other people's life with
              your life
            </p>
            <p className="mt-1 flex w-full justify-end italic">- Eric Thomas</p>
          </motion.div>

          <div>
            <div className="flex items-center mt-4">
              <p className="font-serif text-gray-100 text-xs ml-1 inline-block">
                <LocationMarkerIcon className="text-white w-4 h-4 inline-block mr-1"></LocationMarkerIcon>
                Vancouver, Canada
              </p>
            </div>
          </div>
        </div>

        {children}
      </div>
    </>
  );
}
