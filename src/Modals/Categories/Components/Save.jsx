import { useDispatch } from "react-redux"
import Button from "../../../Components/Button"
import { saveCategoryChangesAction } from "../../../Store/Actions/galleryActions"


const Save = ({ closeModal }) => {

   const dispatch = useDispatch()
   const saveChanges = () => {
      dispatch(saveCategoryChangesAction())
      closeModal()
   }

   return (
      <Button
         text='Save'
         onClick={saveChanges} />
   )
}
export default Save