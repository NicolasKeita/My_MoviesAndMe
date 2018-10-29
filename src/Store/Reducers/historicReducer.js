const initialState = {
  historicFilms: []
}

function manageHistoricFilms(state = initialState, action) {
  let nextState = undefined
  let filmIndex = undefined
  
  switch (action.type) {
    case "TOGGLE_FILMDETAIL":
      filmIndex = state.historicFilms.findIndex(item => item.id === action.value.id)
      if (filmIndex === -1) {
        nextState = {
          ...state,
          historicFilms: [...state.historicFilms, action.value]
        }
      }
      return (nextState ? nextState : state)
    case "REMOVE_HISTORIC_FILM":
      filmIndex = state.historicFilms.findIndex(item => item.id === action.value.id)
      if (filmIndex !== -1) {
        state.historicFilms.splice(filmIndex, 1)
        nextState = {
          ...state,
          historicFilms: state.historicFilms
        }
      }
      return (nextState ? nextState : state)
    case "RESET_HISTORIC":
      nextState = {
        ...state,
        historicFilms: []
      }
      return (nextState ? nextState : state)
    default:
      return (state)
  }
}

export default manageHistoricFilms
