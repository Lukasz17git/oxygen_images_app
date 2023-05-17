import { newError } from "../../Errors/handleError"
import { storeUpdate } from "../rootReducers"

// this using TS would be a function overload, with two definitions, one that
// has one argument and the type of argument is an my Error Custom Object
// and the second one is providing the error values and creating a new Custom Error Obj
export const setNewErrorAction = (locationOrError, field, type) => {
   if (typeof locationOrError === 'object') return storeUpdate({ ['error']: locationOrError })
   return storeUpdate({ ['error']: newError(locationOrError, field, type) })
}

export const clearErrorAction = () => storeUpdate({ ['error']: null })