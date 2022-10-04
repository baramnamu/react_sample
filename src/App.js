import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Todo from './routes/Todo';

const router = createBrowserRouter([{ path: '/', element: <Todo /> }]);

const App = function () {
  return <RouterProvider router={router} />;
};

export default App;
