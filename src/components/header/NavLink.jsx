import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NavLink({ to, text }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Link to={to} className="btn-ghost font-normal text-lg hover:text-orange-300 ml-8">
        {text}
      </Link>
    </motion.div>
  );
}
