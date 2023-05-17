import CancelModalButton from "../CancelModalButton"
import ModalContainer from "../ModalContainer"
import Delete from "./Components/Delete"


const DeleteImage = ({ closeModal, getModalData }) => {
   return (
      <ModalContainer closeModal={closeModal} title='Delete Image'>
         <div className='fc g-24 p-16 pt-24'>
            <strong className="block tc px-32">Are you sure you want to delete the image?</strong>
            <div className="frca fw g-8 w-100%">
               <CancelModalButton closeModal={closeModal} />
               <Delete closeModal={closeModal} getModalData={getModalData} />
            </div>
         </div>
      </ModalContainer>
   )
}
export default DeleteImage