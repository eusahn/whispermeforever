import { useState } from "react";
import "../App.css";
import TextIntro from "./TextIntro";
import { motion, AnimatePresence } from "framer-motion";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import InstagramIcon from "../assets/images/Instagram_Glyph_White.svg";
import MainTemplate from "./MainTemplate";

export default function TermWrapper() {
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
          <Terms />
        )}
      </AnimatePresence>
    </main>
  );
}

function Terms() {
  return (
    <>
      {" "}
      <MainTemplate>
        <>
          <div className="mt-16">
            <p className="font-body text-sm text-gray-200">
              You're probably here because you booked a session with me or
              interested in doing so :) Read over this as{" "}
              <span className="italic">you will have to sign/agree</span> to it
            </p>
            <p className="font-body text-sm text-gray-200 mt-4">
              {" "}
              If you have any questions, feel free to reach out to me on
              instagram
            </p>
          </div>

          <div className="mt-16">
            <p className="font-mono text-base uppercase tracking-wide text-gray-300">
              Terms & Conditions (Beach Series)
            </p>
          </div>
          <div className="mt-6">
            <p className="font-serif text-base text-gray-300">
              Session Details
            </p>
            <p className="mt-4 font-body text-xs text-gray-200">
              The session will take place on an agreed time and will last
              approximately 40 minutes. The date of the session may be changed
              up to two times by the Client with at least 1 day of notice given
              to the Photographer.
            </p>
          </div>
          <div className="mt-6">
            <p className="font-serif text-base text-gray-300">
              Payment Details
            </p>
            <p className="mt-4 font-body text-xs text-gray-200">
              The cost of the session will be $150 CAD, payable in full prior to
              the start of the session. Payment can be made via Stripe or in
              Paypal. If the Client cancels the session, they will be refunded
              80% of the original amount paid.
            </p>
          </div>
          <div className="mt-6">
            <p className="font-serif text-base text-gray-300">
              Editing and Delivery of Photos
            </p>
            <p className="mt-4 font-body text-xs text-gray-200">
              The Photographer will provide the Client with 5 edited digital
              photos after the session. This may take several weeks. The photos
              will be delivered via a web gallery.
            </p>
          </div>
          <div className="mt-6">
            <p className="font-serif text-base text-gray-300">Copyright</p>
            <p className="mt-4 font-body text-xs text-gray-200">
              The Photographer retains the copyright to all images created
              during the session. The Client may not reproduce, sell, or publish
              any of the images without the Photographer's written permission.
            </p>
          </div>
          <div className="mt-6">
            <p className="font-serif text-base text-gray-300">Model Release</p>
            <p className="mt-4 font-body text-xs text-gray-200">
              The Client grants the Photographer permission to use the images
              from the session for marketing, advertising, or any other lawful
              purpose. The Client also grants the Photographer permission to use
              the images for display on the Photographer's website, blog,
              portfolio, or social media accounts.
            </p>
          </div>
          <div className="mt-6">
            <p className="font-serif text-base text-gray-300">
              Cancellation Policy
            </p>
            <p className="mt-4 font-body text-xs text-gray-200">
              In the event that the Client needs to cancel the session, a notice
              of at least [Notice Period] must be given to the Photographer. If
              the session is cancelled without sufficient notice, the Client
              will forfeit 20% of the session fee.
            </p>
          </div>
          <div className="mt-6">
            <p className="font-serif text-base text-gray-300">Liability</p>
            <p className="mt-4 font-body text-xs text-gray-200">
              The Photographer is not responsible for any injury, damage, or
              loss to the Client or the Client's property during the session.
              The Client assumes full responsibility for their own safety and
              the safety of any individuals accompanying them to the session.
            </p>
          </div>
          <div className="mt-6">
            <p className="font-serif text-base text-gray-300">Governing Law</p>
            <p className="mt-4 font-body text-xs text-gray-200">
              This Agreement shall be governed by and construed in accordance
              with the laws of the Province of British Columbia, Canada.
            </p>
          </div>

          <div className="text-center text-white text-2xs opacity-80 font-serif mt-16 tracking-widest">
            dedicated to the one and only
            <p>© whispermeforever | 2022</p>
          </div>
        </>
      </MainTemplate>
    </>
  );
}
