
import { useParams } from 'react-router-dom'
import { useFetch } from '../Hooks/useFetch'


const MovieInfo = () => {

    const params = useParams()
    const { id } = params
    console.log(id);


    const [data] = useFetch(`movie/${id}`)

    console.log(data);


    const backdrop = {
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${data?.backdrop_path})`,
    };


    return (
        <div className='moviePage' style={backdrop} >
            <div className="wrapper">

                <div class="movieContent">

                    <div class="moviePoster">
                        <img src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} alt="" />
                    </div>

                    <div class="movieInfo">

                        <div class="movieTitle">
                            <h1>{data?.title} </h1>
                            <h2>{data?.tagline} </h2>
                        </div>


                        <div class="moviePlot">
                            <h3>{data?.overview} </h3>
                        </div>

                        <div class="movieDetails">
                            <div class="movieDetailsItem">

                                <h3>Languages</h3>
                                <div>
                                    {data?.spoken_languages?.map((lang) => (
                                        (
                                            <span key={lang.iso_639_1} >{lang.english_name} </span>
                                        )
                                    ))}
                                </div>

                            </div>
                        </div>

                        <div class="movieDetails">
                            <div class="movieDetailsItem">

                                <h3>Genres</h3>
                                <div>
                                    {data?.genres?.map((genre) => (
                                        (
                                            <span key={genre.id} >{genre.name} </span>
                                        )
                                    ))}
                                </div>

                            </div>
                        </div>



                        <div class="movieDetails">
                            <div class="movieDetailsItem">
                                <h3>RunTime</h3>
                                <span>{data?.runtime} mins </span>

                            </div>
                        </div>

                        <div class="movieDetails">
                            <div class="movieDetailsItem">
                                <h3>Rating</h3>
                                <span>{data?.vote_average} </span>

                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default MovieInfo