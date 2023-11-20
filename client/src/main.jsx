import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App.jsx';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About'
import Contact from './pages/Contact';
import FAQPage from './pages/FAQPage';
import ShippingReturnsPage from './pages/ShippingReturnsPage';
import StorePolicyPage from './pages/StorePolicyPage';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OrderHistory from './pages/OrderHistory';
import Success from './pages/Success';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/orderHistory',
        element: <OrderHistory />
      }, {
        path: '/products/:id',
        element: <Detail />
      }, {
        path: '/success',
        element: <Success />
      }, {
        path: '/shop',
        element: <Shop />
      }, {
        path: '/about',
        element: <About />
      }, {
        path: '/contact',
        element: <Contact />
      },{
        path: '/faqpage',
        element: <FAQPage />
      },{
        path: '/shippingreturnspage',
        element: <ShippingReturnsPage />
      },{
        path: '/storepolicypage',
        element: <StorePolicyPage />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
