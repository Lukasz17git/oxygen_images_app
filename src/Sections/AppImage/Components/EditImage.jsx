import { basePath } from "../../../../basePath"
import ActionIcon from "../../../Components/ActionIcon"


const EditImage = ({ edit, setEdit }) => {
   return (
      <ActionIcon
         className="br-100% w-32 h-32 bg-overlay"
         src={`${basePath}CriticalIcons/${edit ? 'close' : 'edit'}.svg`}
         iconClassName={`w-${edit ? '18' : '14'} h-${edit ? '18' : '14'}`}
         onClick={() => setEdit(c => !c)}
      />
   )
}
export default EditImage