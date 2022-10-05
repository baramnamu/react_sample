import { useEffect, useState } from 'react';

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
    <h2>Loading...</h2>
  ) : (
    <div>
      {movieData.movies.map((m) => (
        <div key={m.id}>
          <img src={m.medium_cover_image} alt={'medium_cover_image'} />
          <h3>{m.title}</h3>
          <p>{m.summary}</p>
          <ul>
            {m.genres.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movie;
