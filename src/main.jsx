import React, { lazy, Suspense } from 'react';
import "./index.css"
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoaderDesign from './Loader/LoaderDesign';
// import './dateServer/server'

// import { makeServer } from './dateServer/server';

// if (process.env.NODE_ENV === "development") {
//   makeServer({ environment: "development" })
// }

const App = lazy(() => wait(2000).then(() => import('./App')));
const ShowCase = lazy(() => wait(2000).then(() => import('./showCase/ShowCase')));
const ProductDetailPage = lazy(() => wait(2000).then(() => import('./components/productListing/DetailPages/ProductDetailPage')));
const ErrorPage = lazy(() => wait(2000).then(() => import('./pages/error/ErrorPage')));
function wait(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoaderDesign />}>
        <Routes>
          <Route index element={<App />} />
          <Route path='/' element={<App />} />
          <Route path='delivery' element={<ShowCase />} />
          <Route path='dining' element={<ShowCase />} />
          <Route path='nightlife' element={<ShowCase />} />
          <Route path='proandproplus' element={<ShowCase />} />
          <Route path='/restaurants/:restaurantsdetails' element={<ProductDetailPage />} />
          <Route path='/restaurants/:restaurantsdetails/:page' element={<ProductDetailPage />} />
          <Route path='/places/:places' element={<ShowCase />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
