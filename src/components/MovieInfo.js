import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './MovieInfo.module.css';

export default function MovieInfo({ id, title, year, mediumCoverImg, summary, genres }) {
  return (
    <div className={style.movie}>
      <img src={mediumCoverImg} alt={title} className={style.movie__img} />
      <Link to={`/movie/${id}`}>
        <h3 className={style.movie__title}>{title}</h3>
      </Link>
      <h4 className={style.movie__year}>{year}</h4>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul className={style.movie_genres}>
        {genres.map((g, i) => (
          <li key={i}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
MovieInfo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  mediumCoverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
