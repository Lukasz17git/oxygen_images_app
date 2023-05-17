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

let previousStoreSavedImagesState = store.getState().app.savedImages
let previousStoreCategoriesState = store.getState().app.categories
let previousStoreLastSearchedImagesState = store.getState().app.lastSearchedImages
let previousStoreLastSavedImagesState = store.getState().app.lastSavedImages
let previousStoreLastRemovedState = store.getState().app.lastRemovedImages

const updateLocalStore = () => {
   const savedImages = store.getState().app.savedImages
   const categories = store.getState().app.categories
   const lastSearchedImages = store.getState().app.lastSearchedImages
   const lastSavedImages = store.getState().app.lastSavedImages
   const lastRemovedImages = store.getState().app.lastRemovedImages

   if (savedImages !== previousStoreSavedImagesState) {
      previousStoreSavedImagesState = savedImages
      localStorage.setItem('savedImages', JSON.stringify(savedImages))
   }
   if (categories !== previousStoreCategoriesState) {
      previousStoreCategoriesState = categories
      localStorage.setItem('categories', JSON.stringify(categories))
   }
   if (lastSearchedImages !== previousStoreLastSearchedImagesState) {
      previousStoreLastSearchedImagesState = lastSearchedImages
      localStorage.setItem('lastSearchedImages', JSON.stringify(lastSearchedImages))
   }
   if (lastSavedImages !== previousStoreLastSavedImagesState) {
      previousStoreLastSavedImagesState = lastSavedImages
      localStorage.setItem('lastSavedImages', JSON.stringify(lastSavedImages))
   }
   if (lastRemovedImages !== previousStoreLastRemovedState) {
      previousStoreLastRemovedState = lastRemovedImages
      localStorage.setItem('lastRemovedImages', JSON.stringify(lastRemovedImages))
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