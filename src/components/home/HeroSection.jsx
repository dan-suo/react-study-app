import { Link } from 'react-router-dom';

export default function HeroSection() {
    return (
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 mt-4 sm:mt-8">
          Рассчитайте свою рейв-карту
        </h1>
        <p className="text-lg sm:text-xl mb-5">Узнай себя лучше</p>
        <Link to="/calculator" className="btn btn-primary btn-lg">
          Начать расчёт
        </Link>
      </div>
    );
  }