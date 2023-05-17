import { fieldErrorsText, locationErrorsText, typeErrorsText } from "../../Errors/errorList"
import { modals } from "../../Modals/modals"
import { storeUpdate } from "../rootReducers"
import { setNewErrorAction } from "./errorActions"


const openModalAction = (modalID, data = null) => {
   const modalIDs = Object.keys(modals)
   if (!modalIDs.includes(modalID)) return setNewErrorAction(locationErrorsText.app, fieldErrorsText.modal, typeErrorsText.invalid)
   const modal = { id: modalID, data }
   return storeUpdate({ ['modal']: modal })
}

export const closeModalAction = () => storeUpdate({ ['modal']: { id: '', data: null } })

export const openCategoriesModalAction = () => (dispatch, getState) => dispatch(openModalAction('categories', getState().app.categories))

export const openDeleteImageModalAction = (imageId) => openModalAction('deleteImage', imageId)