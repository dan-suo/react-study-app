import { FaStar } from "react-icons/fa";
import { FcEngineering } from "react-icons/fc";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <FcEngineering className="text-2xl" />
      <span className="font-bold text-xl">HumDesign</span>
    </div>
  );
}