import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-slate-900 py-5">
      <div className="mx-auto max-w-[300px]">
        <div className="font-headings text-7xl font-semibold text-slate-300">
          <p>whisper</p>
          <p>me</p>
          <p>forever</p>
        </div>
        <div className="mt-4 max-w-[264px] font-mono text-2xs tracking-widest text-gray-400">
          <p></p>
          <p>you think a phenomenal life is your life</p>
          <p className="mt-2">
            a phenomenal life is what you do with other people's life with your
            life
          </p>
          <p className="mt-1 flex w-full justify-end italic">- Eric Thomas</p>
        </div>

        <div className="mt-16">
          <p className="font-mono text-base uppercase tracking-wide text-gray-300">
            CORE CONCEPTS
          </p>
          <ul className="mt-2 space-y-1 font-body text-2xs text-gray-200">
            <li>The camera is only a tool to express how I feel</li>
            <li>No matter how you look, there's beauty that can be captured</li>
            <li>Trends are fun and exciting, but classic is forever</li>
            <li>I'm just a regular guy with a camera</li>
          </ul>
        </div>

        <div className="mt-16">
          <p className="font-mono text-base uppercase tracking-wide text-gray-300">
            Frequently Asked Questions
          </p>
        </div>
        <div className="mt-6">
          <p className="font-serif text-xs text-gray-300">
            Do You Even Know What You're Doing?
          </p>
          <p className="mt-4 font-body text-2xs text-gray-200">No</p>
        </div>
        <div className="mt-6">
          <p className="font-serif text-xs text-gray-300">
            How Do I Get In Touch?
          </p>
          <p className="mt-4 font-body text-2xs text-gray-200">
            The best way to get in touch is through instagram @whispermeforever
            Send me a DM, and if I feel like I can create with you, I will give
            you a reply. I can't work with every single one of you. There has to
            be interest mutuallys.
          </p>
        </div>
        <div className="mt-6">
          <p className="font-serif text-xs text-gray-300">
            How are your sessions like?
          </p>
          <p className="mt-4 font-body text-2xs text-gray-200">
            I usually come up with ideas, or if you have an idea, I'll
            definitely try to work with you. A lot of it is just freestyling and
            mostly coming up with things on the spot. I never left a shoot
            without at least some photos that I didn't like so far.
          </p>
        </div>
        <div className="mt-6">
          <p className="font-serif text-xs text-gray-300">
            Do You Do This For A Living?
          </p>
          <p className="mt-4 font-body text-2xs text-gray-200">
            No I do not. I'm actually a Software Engineer, but a Digital Nomad
            Lifestyle got me into creatives and allowed me to experience variety
            of things in life. Yet, I do have a passion in this area as well as
            Interior Design.
          </p>
        </div>
        <div className="mt-6">
          <p className="font-serif text-xs text-gray-300">
            How did you get into photography?
          </p>
          <p className="mt-4 font-body text-2xs text-gray-200">
            I self taught and I played with cameras here and there for about 3-4
            years before I launched this brand.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
