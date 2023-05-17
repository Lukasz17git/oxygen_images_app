import { useDispatch } from "react-redux"
import { useTypedSelector } from "../../../Store/store"
import { selectOrderByAction } from "../../../Store/Actions/galleryActions"


const OrderBy = () => {

   const selectedOrder = useTypedSelector(store => store.app.orderBy)

   const dispatch = useDispatch()
   const selectOrderBy = (e) => dispatch(selectOrderByAction(e.target.value))

   return (
      <select
         className="h-40 w-94 br-4 px-4 bg-grey-light lg:ml-a"
         value={selectedOrder}
         onChange={selectOrderBy}
      >
         <option value=''>Order By</option>
         <option value='created_at-max'>Date +</option>
         <option value='created_at-min'>Date -</option>
         <option value='width-max'>Width +</option>
         <option value='width-min'>Width -</option>
         <option value='height-max'>Height +</option>
         <option value='height-min'>Height -</option>
         <option value='likes-max'>Likes +</option>
         <option value='likes-min'>Likes -</option>
      </select>
   )
}
export default OrderBy