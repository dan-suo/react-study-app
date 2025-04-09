import { useEffect, useState } from "react";
import LoadingSpinner from '../components/ui/LoadingSpinner'

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />; 
  }

  return <div>Страница о нас</div>;
}