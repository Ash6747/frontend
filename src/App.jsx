import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import router from './routes/route';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);


  return (
    <QueryClientProvider client={queryClient}>
      {/* <Suspense fallback={<p>Loading...</p>}> */}
        <RouterProvider router={router()} />
      {/* </Suspense> */}
    </QueryClientProvider>
  )
}

export default App
