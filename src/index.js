import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './containers/Login';
import Detail from './containers/Detail';
import NotFound from './containers/NotFound';
import Register from './containers/Register';
import ForgetPass from './containers/ForgetPass';
import reportWebVitals from './reportWebVitals';
import ProtectedRoute from './components/ProtectedRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <ProtectedRoute loginOnly={false}>
          <App />
        </ProtectedRoute>} />
      <Route path="login" element={
        <ProtectedRoute loginOnly={false}>
          <Login />
        </ProtectedRoute>} />
      <Route path="register" element={
        <ProtectedRoute loginOnly={false}>
          <Register />
        </ProtectedRoute>} />
      <Route path="forget" element={
        <ProtectedRoute loginOnly={false}>
          <ForgetPass />
        </ProtectedRoute>} />
      <Route path="detail" element={
        <ProtectedRoute loginOnly={false}>
          <Detail />
        </ProtectedRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
