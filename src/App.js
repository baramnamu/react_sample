import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './routes/Home';
import Todo from './routes/Todo';
import Coin from './routes/Coin';
import Movie from './routes/Movie';
import MovieDetail from './routes/MovieDetail';

const App = function () {
  return (
    <div style={{ display: 'flex', width: '100%', height: 'auto' }}>
      <div className="left_menu_container">
        <Menu />
      </div>
      <div className="contents_container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="todo" element={<Todo />} />
          <Route path="coin" element={<Coin />} />
          <Route path="movie" element={<Movie />} />
          <Route path="movie/:movieId" element={<MovieDetail />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
