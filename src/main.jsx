import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Donation from './components/Donation';
import Statistics from './components/Statistics';
import Home from './components/Home';
import DonationDetails from './components/DonationDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [{
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/donation",
      element: <Donation></Donation>,
      loader: () => fetch('/data.json')
    },
    {
      path: "/statistics",
      element: <Statistics></Statistics>,
      loader: () => fetch('/data.json') 
    },
    {
      path: '/:id',
      element: <DonationDetails></DonationDetails>,
      loader: () => fetch('/data.json')
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
