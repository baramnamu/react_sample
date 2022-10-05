import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MovieDetail.module.css';

export default function MovieDetail() {
  const params = useParams('movieId');
  const [loading, setLoading] = useState(true);
  const [movieDetailData, setMovieDetailData] = useState({});

  useEffect(() => {
    (async () => {
      const jsonResponse = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${params.movieId}`)
      ).json();
      // console.log(jsonResponse);
      setMovieDetailData(jsonResponse.data.movie);
      setLoading(false);
    })();
  }, [params]);

  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <>
      <div
        style={{
          backgroundImage: `url("${movieDetailData.background_image_original}")`,
          opacity: 0.5,
          width: '100%',
          height: '100%',
          position: 'fixed',
          zIndex: -1,
        }}
      ></div>
      <div className={styles.Centering}>
        <h2>{movieDetailData.title_long}</h2>
        <img src={movieDetailData.large_cover_image} alt={movieDetailData.title}></img>
        <p style={{ textAlign: 'left', padding: '10px 20px' }}>{movieDetailData.description_full}</p>
        <ul style={{ textAlign: 'left' }}>
          <li>Year: {movieDetailData.year}</li>
          <li>IMDB Code: {movieDetailData.imdb_code}</li>
          <li>Rating: {movieDetailData.rating}</li>
          <li>Run Time: {movieDetailData.runtime}</li>
        </ul>
        <a href={movieDetailData.url} target={'_blank'} rel="noreferrer">
          Link page to get more detail info about this movie...
        </a>
      </div>
    </>
  );
}
