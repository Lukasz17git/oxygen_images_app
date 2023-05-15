

const Input = ({ value, onChange, label, placeholder, className, inputClassName, onKeyDown }) => {

   return (
      <label className={`input ${className}`}>
         <input
            className={inputClassName}
            value={value}
            onChange={onChange}
            type='text'
            placeholder={placeholder}
            onKeyDown={onKeyDown}
         />
         <span>
            {label}
         </span>
      </label>
   )
}

export default Input