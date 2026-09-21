import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { lazy } from 'react';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
// const Home = lazy(() => import('../pages/Home.jsx'));
const NotFound = lazy(() => import('../pages/NotFound.jsx'));
const ThankYou = lazy(() => import('../pages/ThankYou.jsx'));
import TagManager from 'react-gtm-module';


const trackPageView = (pathname, email, phone) => {
    const eventKey = `tracked-${pathname}`;

    if (!sessionStorage.getItem(eventKey)) {
        TagManager.dataLayer({
            dataLayer: {
                event: 'page_view',
                page: {
                    url: window.location.href,
                    title: document.title,
                    path: pathname,
                },
                userData: {
                    email: email || null,
                    phone: phone || null,
                },
            },
        });
        sessionStorage.setItem(eventKey, true);
    } 
};

const routeLoader = async ({ request }) => {
    const url = new URL(request.url);

    const formData = JSON.parse(localStorage.getItem("formData"));
    const email = formData?.Email || null;
    const phone = formData?.Mobile || null;

    trackPageView(url.pathname, email, phone);

    return null;
};
const router = () => createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<Layout />}>
                <Route index path='/' element={<Home />} loader={routeLoader} />
                <Route path='/thank-you' element={<ThankYou />} loader={routeLoader} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </>
    )
);

export default router;