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
import './index.css'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/main" element={<MainScreen />} />
      </Route>

  ));
  
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>
);
reportWebVitals();
