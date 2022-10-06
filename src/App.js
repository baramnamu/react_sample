import { Outlet } from 'react-router-dom';
import Menu from './components/Menu';

const App = function () {
  return (
    <div style={{ display: 'flex', width: '100%', height: 'auto' }}>
      <div className="left_menu_container">
        <Menu />
      </div>
      <div className="contents_container">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
