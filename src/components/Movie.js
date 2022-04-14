import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({coverImg, title, year, summary, genres, id}){ //movie component가 이 정보들을 parent component로부터 받아옴
  return (
      <div>
        <img src={coverImg} alt={title} />
        <h2>
          <Link to={`/movie/${id}`}>{title} ({year})</Link>
        </h2>
        <p>{summary}</p>
        <ul>
          {genres.map((g) => (<li key={g}>{g}</li>))}
        </ul>
      </div>
    );
  }

  Movie.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
  }

export default Movie; 