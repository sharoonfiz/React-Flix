import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useFetch } from "../Hooks/useFetch";
import { Link } from "react-router-dom";


function Slider({ page }) {
  // const [sliderImg, setSliderImg] = useState([]);

  // console.log(sliderImg);  

  const [data] = useFetch('movie/now_playing', { page })

  const { results } = data;



  let splideOptions = {
    heightRatio: 0.5,
    pagination: false,
    speed: 500,
    cover: true,
    padding: "15vw",
    breakpoints: {
      640: {
        heightRatio: 0.54,
        arrows: false,
        pagination: true,
        padding: "0",
      },
    },
  };

  return (
    <div className="movieSlider">
      <Splide options={splideOptions}>

        {results?.map((item) => (

          <SplideSlide key={item.id}>

            <Link to={`movie/${item.id}`} >
              <img
                src={`https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`}
                alt={item.title}
              />


              <div className="slideCaption">
                <h2>{item.title}</h2>
              </div>
            </Link>

          </SplideSlide>

        ))}
      </Splide>
    </div>
  );
}

export default Slider;

// useEffect(() => {
//   const fetchData = async () => {
//     let { data } = await axios({
//       method: "get",
//       url: "https://api.themoviedb.org/3/movie/now_playing",
//       params: {
//         api_key: "682d7961af84689049309c71f76b4eb1",
//       },
//     });
//     setSliderImg(data.results);
//   };

//   fetchData();
// }, []);