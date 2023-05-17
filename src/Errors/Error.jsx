import { useDispatch } from "react-redux"
import { useTypedSelector } from "../Store/store"
import { clearErrorAction } from "../Store/Actions/errorActions"

const Error = () => {

   const error = useTypedSelector(state => state.error)

   const locationErrorText = error && error.location
   const fieldErrorText = error && error.field
   const typeErrorText = error && error.type

   const dispatch = useDispatch()
   const closeErrorModal = () => dispatch(clearErrorAction())

   return (error && (
      <button
         className='pos-f z-999 transform-to-center t-[45%] bg-white br-16 p-10 max-w-[26rem] bw-0 btw-4 bc-red s-modal sm:p-12'
         onClick={closeErrorModal}
      >
         <div className="frcc g-16 br-12 bg-red tc-white tupper py-16 px-32">
            <h2>Error:</h2>
            <img className="w-32 h-32" src="/Icons/error.svg" loading="lazy" alt="error" />
         </div>
         {locationErrorText && <ErrorDescription title="Place:" text={locationErrorText} />}
         {fieldErrorText && <ErrorDescription title="In:" text={fieldErrorText} />}
         {typeErrorText && <ErrorDescription title="Error type:" text={typeErrorText} />}
      </button>
   ))
}

const ErrorDescription = ({ title, text }) => {
   return (
      <div className="m-16 frc g-12 oh">
         <b className="ts-17" aria-expanded={true}>{title}</b>
         <span>{text}</span>
      </div>
   )
}
export default Error