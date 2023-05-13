import { useDispatch } from "react-redux"
import { useTypedSelector } from "../Store/store"
import { setValue } from "../Store/rootReducers"

const Error = () => {

   const error = useTypedSelector(state => state.error)

   const locationErrorText = error && error.location
   const fieldErrorText = error && error.field
   const typeErrorText = error && error.type

   const dispatch = useDispatch()
   const clearError = () => dispatch(setValue('error', null))

   return (!error && (
      <button className='pos-f z-999 transform-to-center bg-white br-16 p-10 max-w-[26rem] btw-4 bc-red s-modal sm:p-14' onClick={clearError}>
         <div className="frcc g-12 br-12 bg-red tc-white tupper py-16 px-32">
            <strong className="ts-30 tc">Error:</strong>
            <img className="w-32 h-32" src="/Icons/error.svg" loading="lazy" alt="error" />
         </div>
         {locationErrorText && <ErrorDescription title="Lugar:" text={locationErrorText} />}
         {fieldErrorText && <ErrorDescription title="En:" text={fieldErrorText} />}
         {typeErrorText && <ErrorDescription title="Tipo de error:" text={typeErrorText} />}
      </button>
   ))
}

const ErrorDescription = ({ title, text }) => {
   return (
      <div className="m-16 frc g-12 oh">
         <b className="ts-17">{title}</b>
         <span>{text}</span>
      </div>
   )
}
export default Error