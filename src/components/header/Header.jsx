import Logo from "./Logo";
import ThemeSelector from './ThemeSelector';
import useMediaQuery from 'react-responsive';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';

export default function Header() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex gap-8">
        <Logo isMobile={isMobile}/>
      </div>
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
    </div>
  );
}
