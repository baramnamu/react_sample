import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function MovieInfo({ id, title, mediumCoverImg, summary, genres }) {
  return (
    <div id={'movie#' + id}>
      <img src={mediumCoverImg} alt={title} />
      <Link to={`/movie/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{summary}</p>
      <ul>
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
