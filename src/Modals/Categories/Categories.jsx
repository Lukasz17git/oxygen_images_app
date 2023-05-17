import { createSelectorFromStringPath } from "maraj"
import { useTypedSelector } from "../../Store/store"
import ModalContainer from "../ModalContainer"
import NewCategory from "./Components/NewCategory"
import EditCategory from "./Components/EditCategory"
import CancelModalButton from "../CancelModalButton"
import Save from "./Components/Save"

const Categories = ({ closeModal, modalDataPath, getModalData }) => {

   const categoriesNumber = useTypedSelector(createSelectorFromStringPath(modalDataPath + '.length'))
   const arrayHolder = Array(categoriesNumber).fill()

   return (
      <ModalContainer closeModal={closeModal} title='Categories'>
         <div className='fc g-24 p-16 pt-24'>
            <NewCategory getModalData={getModalData} />
            <div className="h-200 max-h-[60vh] fc g-4 oya">
               {arrayHolder.map((_, index) => <EditCategory key={index} modalDataPath={modalDataPath} index={index} />)}
            </div>
            <div className="frca fw g-8 w-100%">
               <CancelModalButton closeModal={closeModal} />
               <Save closeModal={closeModal} />
            </div>
         </div>
      </ModalContainer>
   )
}
export default Categories