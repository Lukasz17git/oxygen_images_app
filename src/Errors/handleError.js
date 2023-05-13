import { setNewError } from "../Store/Reducers/errorReducers"
import { locationErrorsText, fieldErrorsText, typeErrorsText } from "./errorList"

// const errorTemplate = { location: '', field: '', type: '', isLocalError: false }

const unknownError = { location: locationErrorsText.app, type: typeErrorsText.unknown }
const serverError = { location: locationErrorsText.app, type: typeErrorsText.server }
const runningWithoutServerError = { location: locationErrorsText.app, field: fieldErrorsText.server, type: typeErrorsText.missing }

export const newError = (location, field, type) => ({
   ...location && { location },
   ...field && { field },
   ...type && { type },
   isLocalError: true
})

const handleError = (dispatch, error) => {


   if (typeof error !== 'object') return dispatch(setNewError(unknownError))

   if (error.isLocalError) return dispatch(setNewError(error))

   if (error.status === 500) return dispatch(setNewError(serverError))

   if (error.message === 'Failed to fetch') return dispatch(setNewError(runningWithoutServerError))

   const data = error.data
   if (!data || typeof data !== 'object' || Array.isArray(data)) return dispatch(setNewError(unknownError))

   //errors comming from custom server, which currently isnt our case, but ll be easy to implement using this line
   return dispatch(setNewError(error.data))
}

export default handleError