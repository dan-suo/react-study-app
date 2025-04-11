import { FiMenu } from 'react-icons/fi';
import NavLink from './NavLink';

export default function MobileMenu() {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <FiMenu className="text-xl" />
      </label>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink to="/" text="Главная" mobile /></li>
        <li><NavLink to="/calculator" text="Расчёт" mobile /></li>
        <li><NavLink to="/about" text="О проекте" mobile /></li>
      </ul>
    </div>
  );
}