import { useDispatch } from "react-redux"
import { changeImageDescriptionAction } from "../../../Store/Actions/imageActions"


const DescriptionEdit = ({ description, imageId }) => {

   const dispatch = useDispatch()
   const handleChange = (e) => dispatch(changeImageDescriptionAction(imageId, e.target.value))

   return (
      <div className="pos-a l-8 b-8 w-[calc(100%-1rem)] h-[50%] ">
         <b className="pos-a -t-22 l-4">Description:</b>
         <textarea
            className="w-100% h-100% bg-overlay py-8 px-8 br-8 bbr-16"
            value={description}
            onChange={handleChange}
         />
      </div>
   )
}
export default DescriptionEdit