import { Link } from "react-router-dom";
import FavouriteButton from "./FavouriteButton";


function Moviecard({ movie }) {



  const { title, vote_average, poster_path, id } = movie;



  return (
    <div className="movieCard"  >

      <Link to={`movie/${id}`}>
        <img
          className="moviePoster"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
        />
      </Link>

      <div className="movieCardFooter">

        <div className="movieCardDetails">

          <h2 className="movieCardTitle">{title} </h2>
          <p className="movieCardRating">{vote_average} </p>

        </div>

        <FavouriteButton movie={movie} />

      </div>

    </div>
  );
}

export default Moviecard;
