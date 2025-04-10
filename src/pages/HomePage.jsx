import { useEffect, useState } from "react";
import LoadingSpinner from '../components/ui/LoadingSpinner'
import { Link } from "react-router-dom";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />; 
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-2 mt-8">Рассчитайте свою рейв-карту</h1>
      <p className="text-xl mb-5">
        Узнай себя лучше
      </p>
      <Link 
        to="/calculator" 
        className="btn btn-primary btn-lg"
      >
        Начать расчёт
      </Link>
    </div>
  );
}
