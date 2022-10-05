import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Todo from './routes/Todo';
import Coin from './routes/Coin';
import Movie from './routes/Movie';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Todo />,
      },
      {
        path: '/todo',
        element: <Todo />,
      },
      {
        path: '/coin',
        element: <Coin />,
      },
      {
        path: '/movie',
        element: <Movie />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>  // React.StrictMode를 사용하면 디버그에는 용이하지만 useEffect가 두번씩 실행되는 문제가 있다
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
