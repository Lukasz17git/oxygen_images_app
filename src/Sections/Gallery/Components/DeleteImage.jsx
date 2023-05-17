import { useDispatch } from "react-redux"
import ActionIcon from "../../../Components/ActionIcon"
import { openDeleteImageModalAction } from "../../../Store/Actions/modalActions"


const DeleteImage = ({ imageId }) => {

   const dispatch = useDispatch()
   const handleClick = () => dispatch(openDeleteImageModalAction(imageId))

   return (
      <ActionIcon
         className="br-100% w-32 h-32 bg-overlay"
         src={`/CriticalIcons/delete.svg`}
         iconClassName='w-18 h-18'
         onClick={handleClick} />
   )
}
export default DeleteImage