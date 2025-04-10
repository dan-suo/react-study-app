import "./App.css";
import { Outlet } from "react-router-dom";
import NavLink from "./components/header/NavLink";
import Logo from "./components/header/Logo";

function App() {
  return (
    <div className="app min-h-screen flex flex-col">
      <header className="bg-base-200 py-2 px-6 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-8">
          <Logo />
          <select
            className="select select-xs w-24 my-2"
            onChange={(e) =>
              document.documentElement.setAttribute(
                "data-theme",
                e.target.value
              )
            }
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
          </div>
          <nav className="flex gap-2">
            <NavLink to="/" text="Главная" />
            <NavLink to="/calculator" text="Расчёт рейв-карты" />
            <NavLink to="/about" text="О проекте" />
            <NavLink to="/posts" text="Посты" />
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <Outlet /> {/* Контент страниц будет здесь */}
      </main>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Футер</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
