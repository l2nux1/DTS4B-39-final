import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './containers/Login';
import Forget from './containers/ForgetPass';
import NotFound from './containers/NotFound';
import Register from './containers/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './containers/Home';
import ListTrendingMovie from './containers/ListTrendingMovie';
import ListPopularMovie from './containers/ListPopularMovie';
import ListNowPlayingMovie from './containers/ListNowPlayingMovie';
import ListUpComingMovie from './containers/ListUpComingMovie';
import FindMovieResults from './containers/FindMovieResults';

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<ProtectedRoute loginOnly={true}><App /></ProtectedRoute>}>
      <Route path="/" element={<ProtectedRoute loginOnly={true}><Home /></ProtectedRoute>} />
      <Route path="popular" element={<ProtectedRoute loginOnly={true}><ListPopularMovie /></ProtectedRoute>} />
      <Route path="trending" element={<ProtectedRoute loginOnly={true}><ListTrendingMovie /></ProtectedRoute>} />
      <Route path="now-playing" element={<ProtectedRoute loginOnly={true}><ListNowPlayingMovie /></ProtectedRoute>} />
      <Route path="upcoming" element={<ProtectedRoute loginOnly={true}><ListUpComingMovie /></ProtectedRoute>} />
      <Route path="find" element={<ProtectedRoute loginOnly={true}><FindMovieResults /></ProtectedRoute>} />
    </Route>
    <Route path="login" element={<ProtectedRoute loginOnly={false}><Login /></ProtectedRoute>} />
    <Route path="register" element={<ProtectedRoute loginOnly={false}><Register /></ProtectedRoute>} />
    <Route path="forget" element={<ProtectedRoute loginOnly={false}><Forget /></ProtectedRoute>} />
    <Route path="*" element={<NotFound />} />
  </>

))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
