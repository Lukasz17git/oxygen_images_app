

const Image = ({ image }) => {

   const { smallUri, bigUri, alt_description } = image

   return (
      <img
         className="block max-w-100% max-h-100% object-contain br-16 s-modal"
         src={smallUri}
         srcSet={`${bigUri} 700w, ${smallUri} 400w`}
         loading="lazy"
         alt={alt_description} />
   )
}

export default Image