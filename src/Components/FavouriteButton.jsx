import { AppDataContext } from "./AppContext/AppContext"
import HeartFill from "../assets/heart-filled.svg";
import HeartLine from "../assets/heart-lined.svg";
import { useContext } from "react";




const FavouriteButton = ({ movie }) => {

    const { state, dispatch } = useContext(AppDataContext)

    let filtered = state.favourites.some((initialMovie) => initialMovie.id === movie.id)



    const handleFavourite = () => {

        filtered ? dispatch({ type: "REMOVE_FAVOURITE", payload: movie.id })
            :
            dispatch({ type: "MOVE_FAVOURITE", payload: movie })
    }


    return (


        <div className='favButton' onClick={() => handleFavourite()} >

            {filtered ? <img src={HeartFill} alt="" /> : <img src={HeartLine} alt="" />}


        </div>


    )
}

export default FavouriteButton