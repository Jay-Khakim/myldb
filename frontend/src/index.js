import React from 'react'
import  ReactDOM  from 'react-dom/client'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
    Navigate,
   } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {Provider} from 'react-redux'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
import PrivateRoute from './components/PrivateRoute';
import MainScreen from './screens/MainScreen';
import LandingPageScreen from './screens/LandingPageScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import BookScreen from './screens/BookScreen';
import AddBookScreen from './screens/AddBookScreen';
import UpdateBookScreen from './screens/UpdateBookScreen';
import QuotesScreen from "./screens/QuotesScreen";
import './index.css'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route index={true} path="/" element={<LandingPageScreen />} />
        <Route path='' element={<App/>}>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />

          <Route path='' element={<PrivateRoute/>}>
            <Route path="/main" element={<MainScreen />} />
            <Route path="/main/book/:id" element={<BookScreen />} />
            <Route path="/main/book/:id/update" element={<UpdateBookScreen />} />
            <Route path="/main/book/create" element={<AddBookScreen />} />
            <Route path="/main/quotes" element={<QuotesScreen />} />
          </Route>
          {/* <Route path="*" render={() => <Navigate to="/main" />} /> */}
        </Route>
      </Route>
    
     

  ));
  
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
  <HelmetProvider>
    <Provider store = {store} >
      <RouterProvider router={router}/>
    </Provider>
  </HelmetProvider>
</React.StrictMode>
);
reportWebVitals();
