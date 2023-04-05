import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { About } from './pages/About';
import { Container } from 'react-bootstrap';
import { ShoppingCartProvider } from './context/ShoppingCartContext';


const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='store' element={<Store />} />
      <Route path='about' element={<About />} />
    </Route>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <RouterProvider router={router} />
    </ShoppingCartProvider>
  </React.StrictMode>,
)
