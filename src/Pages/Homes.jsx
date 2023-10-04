// import React from 'react'
import { useFetch } from '../Hooks/useFetch'
import Slider from '../Components/Slider'
import Wrapper from '../Components/Wrapper'
import Loader from '../Components/Loader'
import ErrorMsg from '../Components/ErrorMsg'
import Moviecard from '../Components/Movie_card'
import Pagination from '../Components/pagination'
import { useContext } from 'react'
import { AppDataContext } from '../Components/AppContext/AppContext'


const Homes = () => {

    const { state: { page } } = useContext(AppDataContext)


    const [Data, loading, error] = useFetch('movie/popular', { page })

    // console.log('dataaaa', Data);

    const { results, total_pages } = Data



    return (
        < div className='main'>


            < Slider page={page} />
            {/* this a slider component for side we created on other jsx */}
            {loading && <Loader />}
            {error && <ErrorMsg> {error} </ErrorMsg>}

            {!loading && !error && (

                <Wrapper>
                    <div className="gallery"  >
                        {results?.map((movie) => {
                            return <Moviecard key={movie.id} movie={movie} />
                        })}
                    </div>

                    <Pagination page={page} total_pages={total_pages} />
                </Wrapper>
            )}



        </div >
    )
}

export default Homes