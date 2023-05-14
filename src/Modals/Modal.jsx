import { useTypedSelector } from "../Store/store"
import { modals } from "./modals"
import useDispatchErrorWrappedThunk from "../Hooks/useDispatchErrorWrappedThunk"
import { closeModalAction } from "../Store/Actions/modalActions"

const Modal = () => {
   const modalId = useTypedSelector(state => state.modal.id)
   const ActiveModal = modalId && modals[modalId]

   const { dispatchErrorWrappedThunk, dispatch } = useDispatchErrorWrappedThunk()

   const closeModal = () => dispatch(closeModalAction())
   const getModalData = (getState) => getState().modal.data

   return ActiveModal && <ActiveModal
      closeModal={closeModal}
      modalDataPath={'modal.data'}
      getModalData={getModalData}
      dispatchErrorWrappedThunk={dispatchErrorWrappedThunk}
   />
}
export default Modal