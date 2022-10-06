import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>  // React.StrictMode를 사용하면 디버그에는 용이하지만 useEffect가 두번씩 실행되는 문제가 있다
  <>
    <BrowserRouter>
      <Routes>
        <Route path="react_sample/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
