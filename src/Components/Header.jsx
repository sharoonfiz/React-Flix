import SearchBox from "./SearchBox";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useContext } from "react";
import { AppDataContext } from "./AppContext/AppContext";



function Header() {


  const { state } = useContext(AppDataContext)



  return (
    <header className="header">

      <Wrapper>
        <div class="appHeader">

          <div class="headerLeft">

            <h1 className="headerLeft">
              <Link to='/' >
                <img src={logo} alt="" width={100} />
              </Link>
            </h1>

            <Link to="/favourites" >
              <div className="favCount">

                <span className="count" > {state?.favourites?.length} </span>
                <h3>Favourites</h3>
              </div>
            </Link>

          </div>


          <SearchBox />

        </div>
      </Wrapper>

    </header>
  );
}

export default Header;
