import { useContext } from "react";
import { AppDataContext } from "./AppContext/AppContext";

function Pagination({ page, total_pages }) {

  const { dispatch } = useContext(AppDataContext)


  const handlePrev = () => {
    dispatch({ type: "PREV_PAGE", payload: '' })
  }

  const handleNext = () => {
    dispatch({ type: "NEXT_PAGE", payload: '' })
  }

  return (
    <div className="pagination">

      <button disabled={page <= 1} onClick={() => handlePrev()} >
        PREV
      </button>

      <p> {page} of {total_pages} </p>

      <button onClick={() => handleNext()} >
        NEXT
      </button>


    </div>
  );
}

export default Pagination;
