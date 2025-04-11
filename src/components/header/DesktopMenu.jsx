import NavLink from "./NavLink";

export default function DesktopMenu() {
  return (
    <nav className="flex gap-2">
      <NavLink to="/" text="Главная" />
      <NavLink to="/calculator" text="Расчёт рейв-карты" />
      <NavLink to="/about" text="О проекте" />
      <NavLink to="/posts" text="Посты" />
    </nav>
  );
}
