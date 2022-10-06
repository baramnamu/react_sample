import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <Link to={``}>
        <h3>Home</h3>
      </Link>
      <Link to={`todo`}>
        <h3>TO-DO</h3>
      </Link>
      <Link to={`coin`}>
        <h3>Coin</h3>
      </Link>
      <Link to={`movie`}>
        <h3>Movie</h3>
      </Link>
    </>
  );
};

export default Menu;
