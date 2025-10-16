import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function SharedAnimatedBackground() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.div
        className={cn(
          "absolute right-[15%] bottom-[20%] h-60 w-60 rounded-full blur-2xl opacity-20",
          "bg-[radial-gradient(closest-side,#FFD700,transparent_70%)]",
        )}
        animate={{ x: [0, -30, 20, 0], y: [0, -15, 25, 0] }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}
