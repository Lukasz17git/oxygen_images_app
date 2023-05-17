import Button from "../Components/Button"


const CancelModalButton = ({ closeModal }) => {

   return (
      <Button
         className='bg-transparent !tc-main'
         text='Cancel'
         onClick={closeModal} />
   )
}
export default CancelModalButton