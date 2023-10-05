import React from 'react'
import { useContext } from 'react'
import { AppDataContext } from '../Components/AppContext/AppContext'
import Wrapper from '../Components/Wrapper'
import Moviecard from '../Components/Movie_card'





const Favourites = () => {

    const { state } = useContext(AppDataContext)






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