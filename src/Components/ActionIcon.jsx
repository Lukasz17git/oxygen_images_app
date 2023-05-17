

const ActionIcon = ({ src, className = '', iconClassName, onClick, ariaLabel }) => {

   const name = src.slice(src.lastIndexOf('/') + 1, src.lastIndexOf('.'))

   return (
      <button className={`frcc ${className}`} aria-label={ariaLabel ?? name} onClick={onClick} >
         <img
            className={iconClassName}
            src={src}
            alt={name}
            loading='lazy' />
      </button>
   )
}
export default ActionIcon