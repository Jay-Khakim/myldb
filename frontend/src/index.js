import React from 'react'
import  ReactDOM  from 'react-dom/client'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
   } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css';

import reportWebVitals from './reportWebVitals';
import App from './App'
import App3 from './App3'
import MainScreen from './screens/MainScreen';
import LandingPageScreen from './screens/LandingPageScreen';
import './index.css'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route index={true} path="/" element={<LandingPageScreen />} />
        <Route path="/main" element={<App />} />
      </Route>
     

  ));
  
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>
);
reportWebVitals();
