import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavLink({ to, text, mobile = false }) {
  // Общие настройки анимации
  const hoverScale = 1.03;
  const tapScale = 0.98;

  return mobile ? (
    <Link to={to} className="px-4 py-2 hover:bg-base-200 block">
      {text}
    </Link>
  ) : (
    <motion.div
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: tapScale }}
      transition={{
        type: "tween", 
        duration: 0.2,
      }}
    >
      <Link
        to={to}
        className="btn-ghost font-normal ml-8 text-lg hover:text-orange-300"
      >
        {text}
      </Link>
    </motion.div>
  );
}
