

const ActionIcon = ({ src, className, imageClassName, onClick }) => {

   const name = src.slice(src.lastIndexOf('/'), src.lastIndexOf('.'))
   console.log(name)

   return (
      <button className={`frcc ${className}`} aria-label={name}>
         <img
            className={imageClassName}
            src={src}
            alt={name}
            loading='lazy'
            onClick={onClick} />
      </button>
   )
}
export default ActionIcon