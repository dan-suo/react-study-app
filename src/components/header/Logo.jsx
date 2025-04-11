import { FcEngineering } from "react-icons/fc";
import ThemeSelector from './ThemeSelector';

export default function Logo({isMobile}) {
  return (
    <div className="flex items-center gap-2">
      <FcEngineering className="text-2xl" />
      <span className="font-bold text-xl">HumDesign</span>
      <ThemeSelector isMobile={isMobile} />
    </div>
  );
}