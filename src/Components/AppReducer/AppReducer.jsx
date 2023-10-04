export const initialState = {
    page: 1,
    favourites: []
}


export const reducerCallBack = (state, action) => {

    const { type, payload } = action

    switch (type) {
        case "MOVE_FAVOURITE":

            return { ...state, favourites: [...state.favourites, payload] }

        case "REMOVE_FAVOURITE":

            return { ...state, favourites: state.favourites.filter((movie) => movie.id !== payload) }

        case "PREV_PAGE":

            return { ...state, page: state.page - 1 }

        case "NEXT_PAGE":

            return { ...state, page: state.page + 1 }

    }

}

