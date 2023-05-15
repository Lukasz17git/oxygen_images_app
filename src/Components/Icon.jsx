

const Icon = ({ className = '', src, onClick }) => {
   const name = src.slice(src.lastIndexOf('/') + 1, src.lastIndexOf('.'))
   return (
      <img
         className={className}
         src={src}
         alt={name}
         loading='lazy' />
   )
}
export default Icon