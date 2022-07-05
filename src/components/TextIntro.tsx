import { motion } from "framer-motion";

export default function TextIntro(props: { onComplete: () => void }) {
  return (
    <div className="text-white font-body text-center opacity-90">
      <motion.div
        className="relative inline-block w-[0px] overflow-x-hidden whitespace-nowrap font-mono"
        initial={{ opacity: 0 }}
        animate={{
          width: "100%",
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
        onAnimationComplete={props.onComplete}
      >
        now i see
        <motion.div className="text-2xs font-body">
          @whispermeforever
        </motion.div>
      </motion.div>
    </div>
  );
}
