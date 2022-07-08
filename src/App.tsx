import { useState } from "react";
import "./App.css";
import TextIntro from "./components/TextIntro";
import { motion, AnimatePresence } from "framer-motion";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import InstagramIcon from "./assets/images/Instagram_Glyph_White.svg";

function App() {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-slate-900 py-10">
      <AnimatePresence>
        {isComplete === false ? (
          <motion.div>
            <TextIntro
              onComplete={() => {
                setIsComplete(true);
              }}
            ></TextIntro>
          </motion.div>
        ) : (
          <Main />
        )}
      </AnimatePresence>
    </main>
  );
}

function Main() {
  return (
    <>
      <p className="text-white text-4xl opacity-90 fixed right-3 top-2 cursor-pointer">
        <a href="https://instagram.com/whispermeforever" target="_blank">
          <img
            src={InstagramIcon}
            alt="Instagram"
            className="w-4 h-4 fill-white"
          />
        </a>
      </p>
      <div className="flex justify-center max-w-[400px] p-10">
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

          <div className="mt-16">
            <p className="font-mono text-base uppercase tracking-wide text-gray-300">
              MY PHILOSOPHY
            </p>
            <ul className="mt-2 space-y-1 font-body text-xs text-gray-200">
              <li>The camera is only a tool to express how I feel</li>
              <li>
                No matter how you look, there's beauty that can be captured
              </li>
              <li>Trends are fun and exciting, but classic is forever</li>
              <li>I'm just a regular guy with a camera</li>
              <li>I love Pho.</li>
            </ul>
          </div>

          <div className="mt-16">
            <p className="font-mono text-base uppercase tracking-wide text-gray-300">
              Frequently Asked Questions
            </p>
          </div>
          <div className="mt-6">
            <p className="font-serif text-base text-gray-300">
              Do You Even Know What You're Doing?
            </p>
            <p className="mt-4 font-body text-xs text-gray-200">No</p>
          </div>
          <div className="mt-6">
            <p className="font-serif text-base text-gray-300">
              How Do I Get In Touch?
            </p>
            <p className="mt-4 font-body text-xs text-gray-200">
              The best way to get in touch is through instagram
              @whispermeforever Send me a DM, and if I feel like I can create
              with you, I will give you a reply. I can't work with every single
              one of you. There has to be interest both ways otherwise it won't
              be fun at all.
            </p>
          </div>
          <div className="mt-6">
            <p className="font-serif text-base text-gray-300">
              How are your sessions like?
            </p>
            <p className="mt-4 font-body text-xs text-gray-200">
              I usually come up with ideas, or if you have an idea, I'll
              definitely try to work with you. A lot of it is just freestyling
              and mostly coming up with things on the spot. I never left a shoot
              without at least some photos that I didn't like so far.
            </p>
          </div>
          <div className="mt-6">
            <p className="font-serif text-base text-gray-300">
              Do You Do This For A Living?
            </p>
            <p className="mt-4 font-body text-xs text-gray-200">
              No I do not. I'm actually a Software Engineer, but a Digital Nomad
              Lifestyle got me into creatives and allowed me to experience
              variety of things in life. Yet, I do have a passion in this area
              as well as Interior Design.
            </p>
          </div>
          <div className="mt-6">
            <p className="font-serif text-base text-gray-300">
              How did you get into photography?
            </p>
            <p className="mt-4 font-body text-xs text-gray-200">
              I self taught and I played with cameras here and there for about
              3-4 years before I launched this brand.
            </p>
          </div>
          <div className="mt-6">
            <p className="font-serif text-base text-gray-300">
              Are You A Team?
            </p>
            <p className="mt-4 font-body text-xs text-gray-200">
              Nope, I'm a one man business at the moment :)
            </p>
          </div>
          <div className="mt-6">
            <p className="font-serif text-base text-gray-300">
              Where are you from?
            </p>
            <p className="mt-4 font-body text-xs text-gray-200">
              I was born in Seoul, South Korea. Grew up in Vancouver, Canada
              since I was 5 years old.
            </p>
          </div>
          <div className="text-center text-white text-2xs opacity-80 font-serif mt-16 tracking-widest">
            dedicated to the one and only
            <p>© whispermeforever | 2022</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
