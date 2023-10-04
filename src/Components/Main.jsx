


import React from 'react'

const Main = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}



export default Main;

// here map will fire  <movieCard /> many time depends on how many array we have in the popularMovie

// const [popMovie, setPopMovies] = useState([]);
//
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(false);

// console.log(popMovie);



// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       let { data } = await axios({
//         method: "get",
//         url: "https://api.themoviedb.org/3/movie/popular/",
//         params: {
//           api_key: `682d7961af84689049309c71f76b4eb1`,
//           page,
//         },
//       });
//       setPopMovies(data.results);
//       setTotalPages(data.total_pages);
//       setTimeout(() => {
//         setLoading(false);
//       }, 2000);

//     } catch (error) {
//       console.log(error.message);
//       setError(error.message);
//       setLoading(false);
//     }
//   };

//   fetchData();
// }, [page]);