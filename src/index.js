import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/home';
import Html from './pages/html';
import Css from './pages/css';
import JavaScript from './pages/javascript';


const router = createBrowserRouter([
  {
    path: "/React-ptoject1",
    element: <Home/>,
    errorElement : <h1 style={{backgroundColor: 'red', textAlign: 'center'}}> Sorry the Page Not Found</h1>
  },
  {
    path: "/html",
    element: <Html/>,
  },
  {
    path: "/css",
    element: <Css/>,
  },
  {
    path: "/javascript",
    element: <JavaScript/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);


