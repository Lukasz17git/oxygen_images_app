import { fieldErrors, locationErrors, typeErrors } from "../../Errors/errorList"
import { setNewError } from "../../Errors/handleError"
import { modalIDs } from "../../Modals/modals"
import { setValue } from "../rootReducers"

const openModal = (modalID, data = null) => {
   if (!modalIDs.includes(modalID)) return setNewError(locationErrors.app, fieldErrors.modal, typeErrors.invalid)
   const modal = { id: modalID, data }
   return setValue('modal', modal)
}

export const openCategoriesModal = () => openModal('categories')