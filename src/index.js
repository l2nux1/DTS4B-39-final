import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './containers/Login';
import NotFound from './containers/NotFound';
import Register from './containers/Register';
import ForgetPass from './containers/ForgetPass';
import ProtectedRoute from './components/ProtectedRoute';
import ListTile from './containers/ListTile';
import Home from './containers/Home';
import ListTrendingMovie from './containers/ListTrendingMovie';
import ListPopularMovie from './containers/ListPopularMovie';
import ListNowPlayingMovie from './containers/ListNowPlayingMovie';
import ListUpComingMovie from './containers/ListUpComingMovie';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/" element={<Home />} />
    <Route path="popular" element={<ListPopularMovie />} />
    <Route path="trending" element={<ListTrendingMovie />} />
    <Route path="now-playing" element={<ListNowPlayingMovie />} />
    <Route path="upcoming" element={<ListUpComingMovie/>} />
    <Route path="*" element={<NotFound />} />
  </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);