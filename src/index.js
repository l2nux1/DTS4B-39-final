import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './containers/Login';
//import Forget from './containers/ForgetPass';
import NotFound from './containers/NotFound';
import Register from './containers/Register';
import Home from './containers/Home';
import ListTrendingMovie from './containers/ListTrendingMovie';
import ListPopularMovie from './containers/ListPopularMovie';
import ListNowPlayingMovie from './containers/ListNowPlayingMovie';
import ListUpComingMovie from './containers/ListUpComingMovie';
import FindMovieResults from './containers/FindMovieResults';
import DetailPageMovie from './containers/DetailPage';
import PrivateComponent from './components/PrivateComponent';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route path="/" element={
      <PrivateComponent loginOnly={false}>
        <Home />
      </PrivateComponent>
    } />

    <Route path="popular" element={
      <PrivateComponent loginOnly={false}>
        <ListPopularMovie />
      </PrivateComponent>
    } />

    <Route path="trending" element={
      <PrivateComponent loginOnly={false}>
        <ListTrendingMovie />
      </PrivateComponent>
    } />

    <Route path="now-playing" element={
      <PrivateComponent loginOnly={false}>
        <ListNowPlayingMovie />
      </PrivateComponent>
    } />

    <Route path="upcoming" element={
      <PrivateComponent loginOnly={false}>
        <ListUpComingMovie />
      </PrivateComponent>
    } />

    <Route path="find" element={
      <PrivateComponent loginOnly={false}>
        <FindMovieResults />
      </PrivateComponent>
    } />

    <Route path="detail" element={
      <PrivateComponent loginOnly={true}>
        <DetailPageMovie />
      </PrivateComponent>
    } />

    <Route path="login" element={
      <PrivateComponent loginOnly={false}>
        <Login />
      </PrivateComponent>
    } />
    <Route path="register" element={
      <PrivateComponent loginOnly={false}>
        <Register />
      </PrivateComponent>
    } />
    <Route path="*" element={<NotFound />} />
  </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
