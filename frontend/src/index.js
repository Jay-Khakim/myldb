import React from 'react'
import  ReactDOM  from 'react-dom/client'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
   } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css';

import reportWebVitals from './reportWebVitals';
import App from './App'
// import App3 from './App3'
import MainScreen from './screens/MainScreen';
import LandingPageScreen from './screens/LandingPageScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import BookScreen from './screens/BookScreen';
import './index.css'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route index={true} path="/" element={<LandingPageScreen />} />
        <Route path='' element={<App/>}>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/main" element={<MainScreen />} />
          <Route path="/main/book/:id" element={<BookScreen />} />
        </Route>
      </Route>
     

  ));
  
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
  <Provider store = {store} >
    <RouterProvider router={router}/>
  </Provider>
</React.StrictMode>
);
reportWebVitals();
