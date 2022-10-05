import { useEffect, useState } from 'react';
import MovieInfo from '../components/MovieInfo';

const Movie = () => {
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState({});
  const getMovies = async () => {
    const jsonResponse = await (
      await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')
    ).json();
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
    <h2>Loading...</h2>
  ) : (
    <>
      {movieData.movies.map((m) => (
        <MovieInfo
          key={m.id}
          id={m.id}
          title={m.title}
          mediumCoverImg={m.medium_cover_image}
          summary={m.summary}
          genres={m.genres}
        />
      ))}
    </>
  );
};

export default Movie;
