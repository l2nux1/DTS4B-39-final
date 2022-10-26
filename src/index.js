import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './containers/Login';
import NotFound from './containers/NotFound';
import Register from './containers/Register';
import ForgetPass from './containers/ForgetPass';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import ListTile from './containers/ListTile';
import Home from './containers/Home';
import ListTrendingMovie from './containers/ListTrendingMovie';
import ListPopularMovie from './containers/ListPopularMovie';
import ListNowPlayingMovie from './containers/ListNowPlayingMovie';
import ListUpComingMovie from './containers/ListUpComingMovie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProtectedRoute loginOnly={true}><App /></ProtectedRoute>} />
      <Route path="login" element={<ProtectedRoute loginOnly={false}><Login /></ProtectedRoute>} />
      <Route path="register" element={<ProtectedRoute loginOnly={false}><Register /></ProtectedRoute>} />
      <Route path="forget" element={<ProtectedRoute loginOnly={false}><ForgetPass /></ProtectedRoute>} />
      <Route path="popular" element={<ProtectedRoute loginOnly={true}><Navbar /><ListPopularMovie /></ProtectedRoute>} />
      <Route path="trending" element={<ProtectedRoute loginOnly={true}><Navbar /><ListTrendingMovie /></ProtectedRoute>} />
      <Route path="now-playing" element={<ProtectedRoute loginOnly={true}><Navbar /><ListNowPlayingMovie /></ProtectedRoute>} />
      <Route path="upcoming" element={<ProtectedRoute loginOnly={true}><Navbar /><ListUpComingMovie /></ProtectedRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);