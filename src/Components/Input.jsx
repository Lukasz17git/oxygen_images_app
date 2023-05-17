

const Input = ({ value, onChange, label, placeholder, onKeyDown, className = '', inputClassName = '', labelClassName }) => {

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
         <span className={labelClassName}>
            {label}
         </span>
      </label>
   )
}

export default Input