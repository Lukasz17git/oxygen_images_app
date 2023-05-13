import { applyMiddleware, legacy_createStore } from 'redux'
import thunk from "redux-thunk";
import { useSelector } from "react-redux";
import { functionUpdateKey, resetStoreKey } from "./rootReducers";


const initialState = {
   error: null,
   modal: {
      id: '',
      data: null
   },
   route: "/",
   app: {
      searchedValues: [], //array of strings
      savedImages: [], //array of image (initial image)
      removedImages: [] // array of image (initial image)
   }
}

const rootReducer = (state = initialState, action) => {
   if (action.type === functionUpdateKey) return action.functionUpdate(state)
   if (action.type === resetStoreKey) return initialState
   return state
}

/**
 * Aplying types to the store
 * @type {import("redux").Store<typeof initialState>}
 */
const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

/**
 * Aplying types to the useSelector hook
 * @typedef {ReturnType<typeof store.getState>} RootState
 * @type {import("react-redux").TypedUseSelectorHook<RootState>}
 */
export const useTypedSelector = useSelector;

export default store