import { Link } from "react-router-dom";
import FavouriteButton from "./FavouriteButton";


function Moviecard({ movie }) {

  // here we can do like this also ({movie : {id,title,rating,poster_path} })

  const { title, vote_average, poster_path, id } = movie;



  return (
    <div className="movieCard"  >

      <Link to={`movie/${id}`}>
        <img
          className="moviePoster"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}  // doubt why we have templete litreals in poster_path
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
