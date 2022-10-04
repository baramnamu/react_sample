import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Todo from './routes/Todo';
import Coin from './routes/Coin';

const router = createBrowserRouter([
  { path: '/', element: <Todo /> },
  { path: '/coin', element: <Coin /> },
]);

const App = function () {
  return <RouterProvider router={router} />;
};

export default App;
