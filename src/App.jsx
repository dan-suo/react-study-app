import "./App.css";
import { Outlet } from "react-router-dom";
import Header from './components/header/Header';

function App() {
  return (
    <div className="app min-h-screen flex flex-col">
      <header className="bg-base-200 py-2 px-6 shadow-sm">
        <Header />
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
