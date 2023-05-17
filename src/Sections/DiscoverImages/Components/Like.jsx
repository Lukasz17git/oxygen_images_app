import { useDispatch } from "react-redux"
import ActionIcon from "../../../Components/ActionIcon"
import { dislikeSearchedImageAction, likeSearchedImageAction } from "../../../Store/Actions/discoverActions"
import { basePath } from "../../../../basePath"


const Like = ({ isLiked, imageIndex }) => {

   const dispatch = useDispatch()
   const handleClick = () => dispatch(isLiked ? dislikeSearchedImageAction(imageIndex) : likeSearchedImageAction(imageIndex))
   return (
      <ActionIcon
         className="br-100% w-32 h-32 bg-overlay"
         src={`${basePath}CriticalIcons/${isLiked ? 'liked' : 'like'}.svg`}
         iconClassName='w-21 h-21 mt-1'
         onClick={handleClick} />
   )
}
export default Like