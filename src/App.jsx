import './App.css'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app min-h-screen flex flex-col">
      <header className="navbar bg-primary text-primary-content">
        <div className="container mx-auto">
          <a className="normal-case text-xl">Шапка сайта</a>
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

export default App
