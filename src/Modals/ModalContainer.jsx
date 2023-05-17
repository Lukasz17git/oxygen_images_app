import ActionIcon from "../Components/ActionIcon"
import useA11yEscKey from "../Hooks/useA11yModalKeyboard"

const ModalContainer = ({ children, closeModal, title }) => {
   useA11yEscKey(closeModal)
   return (
      <div className='pos-f z-10 frcc t-0 l-0 w-100% h-100vh p-8 bg-main-dark bgo-30 sm:p-16' >
         <div className='pos-a w-100% h-100% l-0 t-0 -z-1' onClick={closeModal} />
         <section className='bg-white s-modal br-16 p-12 max-w-[calc(100vw-1.25rem)] w-fit sm:p-16 sm:min-w-[27rem] sm:max-w-[48rem]'>
            <div className='frcc g-16 bg-main tc-white br-12 pos-r py-16 px-60'>
               <h2 className="tc lh-1.25">{title}</h2>
               <ActionIcon src='/CriticalIcons/close-modal.svg' className='pos-a r-8 bg-main h-32 w-32' iconClassName='w-24 h-24' onClick={closeModal} />
            </div>
            {children}
         </section>
      </div>
   )
}

export default ModalContainer