import { useDispatch } from "react-redux"
import Button from "../../../Components/Button"
import { removeImageFromGalleryAction } from "../../../Store/Actions/galleryActions"


const Delete = ({ closeModal, getModalData }) => {

   const dispatch = useDispatch()
   const deleteImage = () => {
      dispatch((dispatch, getState) => {
         const imageId = getModalData(getState)
         dispatch(removeImageFromGalleryAction(imageId))
      })
      closeModal()
   }

   return (
      <Button
         text='Delete'
         onClick={deleteImage} />
   )
}
export default Delete