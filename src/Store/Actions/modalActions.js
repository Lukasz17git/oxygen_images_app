import { fieldErrorsText, locationErrorsText, typeErrorsText } from "../../Errors/errorList"
import { modals } from "../../Modals/modals"
import { setValue } from "../rootReducers"
import { setNewErrorAction } from "./errorActions"

const modalIDs = Object.keys(modals)

const openModalAction = (modalID, data = null) => {
   if (!modalIDs.includes(modalID)) return setNewErrorAction(locationErrorsText.app, fieldErrorsText.modal, typeErrorsText.invalid)
   const modal = { id: modalID, data }
   return setValue('modal', modal)
}

export const closeModalAction = () => setValue('modal', { id: '', data: null })

export const openCategoriesModalAction = () => openModalAction('categories')
