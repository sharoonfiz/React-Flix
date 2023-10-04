
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Favourites from './Pages/Favourites';
import Homes from './Pages/Homes';
import MovieInfo from './Pages/MovieInfo';
import './Styles/index.scss'

function App() {


  return (
    <div className='App'>

      <Layout>
        <Routes>

          <Route path='/' element={<Homes />} />
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/movie/:id' element={<MovieInfo />} />


        </Routes>

      </Layout>


    </div>
  )
}

export default App;
