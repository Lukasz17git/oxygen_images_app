import ActionIcon from "../Components/ActionIcon"

const ModalContainer = ({ children, closeModal, title }) => {
   return (
      <div className='pos-f z-10 frcc t-0 l-0 w-100p h-100h p-8 bg-gray-2 sm:p-16' >
         <div className='pos-a w-100p h-100p l-0 t-0 -z-1' onClick={closeModal} />
         <section className='bg-white br-16 p-12 max-w-[calc(100vw-1.25rem)] w-fit sm:p-16 sm:min-w-[27rem] sm:max-w-[48rem]'>
            <div className='frc g-16 bg-main tc-white br-12 pos-r py-16 px-60'>
               <h2 className="tc lh-1.25">{title}</h2>
               <ActionIcon src='/public/CriticalIcons/close.svg' className='pos-a r-12' iconClassName='w-20 h-20' onClick={closeModal} />
            </div>
            {children}
         </section>
      </div>
   )
}

export default ModalContainer