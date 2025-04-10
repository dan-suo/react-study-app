import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import LoadingSpinner from '../components/ui/LoadingSpinner.jsx';

// Lazy loading of pages
const HomePage = lazy(() => import('../pages/HomePage.jsx'));
const AboutPage = lazy(() => import('../pages/AboutPage.jsx'));
const PostsPage = lazy(() => import('../pages/PostsPage.jsx'));
const RegisterPage = lazy(() => import('../pages/RegisterPage.jsx'));
const CalculatorPage = lazy(() => import('../pages/CalculatorPage.jsx'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={ <LoadingSpinner /> }>
                        <HomePage />
                    </Suspense>
                ),
            },
            {
                path: 'about',
                element: (
                    <Suspense fallback={ <LoadingSpinner />}>
                        <AboutPage />
                    </Suspense>
                ),
            },
            {
                path: 'posts',
                element: (
                    <Suspense fallback={ <LoadingSpinner />}>
                        <PostsPage />
                    </Suspense>
                )
            },
            {
                path: 'register',
                element: (
                    <Suspense fallback={ <LoadingSpinner />}>
                        <RegisterPage />
                    </Suspense>
                )
            },
            {
                path: 'calculator',
                element: (
                    <Suspense fallback={ <LoadingSpinner />}>
                        <CalculatorPage />
                    </Suspense>
                )
            }
        ],
    },
]);