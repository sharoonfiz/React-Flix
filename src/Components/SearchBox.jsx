import React, { useState } from 'react'
import { useFetch } from '../Hooks/useFetch'
import { useNavigate } from 'react-router-dom'


const SearchBox = () => {

    const navigate = useNavigate()

    const [query, setQuery] = useState('')



    const [data] = useFetch(`search/movie`, { query })

    console.log(data);
    const { results } = data;

    return (
        <div className='searchBox' >

            <input className='searchField' value={query} type="search" onChange={(e) => setQuery(e.target.value)} />

            <div className="resultBox">

                <ul>
                    {results?.map((search) => (
                        <li onClick={() => navigate(`movie/${search.id}`)} >
                            <img src={`https://image.tmdb.org/t/p/w500/${search?.poster_path}`} alt="" />

                            <div>
                                <h3>{search?.title} </h3>
                                <p>{search?.release_date} </p>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>


        </div>
    )
}

export default SearchBox


{/* <ul>
{results?.map((search) => (
    (

        <li key={search.id} onClick={() => navigate(`movie/${search.id}`)}  >
            <img src={`https://image.tmdb.org/t/p/w500/${search?.poster_path}`} alt="" />

            <div>
                <h4>{search?.title} </h4>
                <p>{search?.release_date} </p>
            </div>
        </li>
    )
))}
</ul> */}