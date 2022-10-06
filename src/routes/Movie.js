import { useEffect, useState } from 'react';
import MovieInfo from '../components/MovieInfo';
import style from './Movie.module.css';

const Movie = () => {
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState({});
  const getMovies = async () => {
    const jsonResponse = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')).json();
    // console.log(jsonResponse.data);
    setMovieData(jsonResponse.data);
    setLoading(false);
  };

  useEffect(() => {
    // const data = fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    getMovies();
  }, []);

  return loading ? (
    <div className="centering_container">
      <h2>Loading...</h2>
    </div>
  ) : (
    <div className={style.movies}>
      {movieData.movies.map((m) => (
        <MovieInfo
          key={m.id}
          id={m.id}
          title={m.title}
          year={m.year}
          mediumCoverImg={m.medium_cover_image}
          summary={m.summary}
          genres={m.genres}
        />
      ))}
    </div>
  );
};

export default Movie;
