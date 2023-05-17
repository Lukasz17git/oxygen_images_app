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
   app: {
      searchedImages: [],
      categories: JSON.parse(localStorage.getItem('categories')) ?? [],
      searchInput: '',
      categoriesFilter: [],
      orderBy: '',
      savedImages: JSON.parse(localStorage.getItem('savedImages')) ?? {}, //object-map of images (initial image)
      lastSearchedImages: JSON.parse(localStorage.getItem('lastSearchedImages')) ?? [],
      lastSavedImages: JSON.parse(localStorage.getItem('lastSavedImages')) ?? [],
      lastRemovedImages: JSON.parse(localStorage.getItem('lastRemovedImages')) ?? []
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


/* LOCAL STORE SUBSCRIPTION */

const previousStoreAppState = (({ savedImages, categories, lastSearchedImages, lastSavedImages, lastRemovedImages }) => ({
   savedImages, categories, lastSearchedImages, lastSavedImages, lastRemovedImages
}))(store.getState().app)

const updateLocalStore = () => {

   console.log('running subscription')

   for (const storeSectionKey in previousStoreAppState) {
      const currentState = store.getState().app[storeSectionKey]
      if (currentState !== previousStoreAppState[storeSectionKey]) {
         console.log('state changed inside', storeSectionKey)
         previousStoreAppState[storeSectionKey] = currentState
         localStorage.setItem(storeSectionKey, JSON.stringify(currentState))
      }
   }
}

store.subscribe(updateLocalStore)

/**
 * Aplying types to the useSelector hook
 * @typedef {ReturnType<typeof store.getState>} RootState
 * @type {import("react-redux").TypedUseSelectorHook<RootState>}
 */
export const useTypedSelector = useSelector;

export default store