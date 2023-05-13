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

   return (error && (
      <button className='error-container  inline bg-main tc-black s-lg bw-2 bdot text-opacity-100 pos-f z-50 t-100p b-100' onClick={clearError}>
         <div className="error-title">
            <h2>Error:</h2>
            <img className="i-error" src="/Icons/error.svg" loading="lazy" alt="error" />
         </div>
         {locationErrorText && (
            <div className="error-description">
               <b>Lugar:</b>
               <span>{locationErrorText}</span>
            </div>
         )}
         {fieldErrorText && (
            <div className="error-description">
               <b>En:</b>
               <span>{fieldErrorText}</span>
            </div>
         )}
         {typeErrorText && (
            <div className="error-description">
               <b>Tipo de error:</b>
               <span>{typeErrorText}</span>
            </div>
         )}
      </button>
   ))
}
export default Error