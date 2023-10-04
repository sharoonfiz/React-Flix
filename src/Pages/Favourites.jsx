import React from 'react'
import { useContext } from 'react'
import { AppDataContext } from '../Components/AppContext/AppContext'
import Wrapper from '../Components/Wrapper'
import Moviecard from '../Components/Movie_card'
// import { Link } from 'react-router-dom'




const Favourites = () => {

    const { state } = useContext(AppDataContext)

    // const { favourites } = state




    return (

        <Wrapper>
            <div className="gallery">
                {state?.favourites?.map((movie) => (
                    (

                        <Moviecard key={movie.id} movie={movie} />

                    )
                ))}
            </div>
        </Wrapper>

    )
}

export default Favourites