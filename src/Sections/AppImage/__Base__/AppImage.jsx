

const AppImage = ({ children, className, smallUri, bigUri, alt_description }) => {
   return (
      <div className={`pos-r ${className}`}>
         <img
            className="block max-w-100% max-h-[960px] h-100% br-16 s-modal"
            src={smallUri}
            srcSet={`${bigUri} 700w, ${smallUri} 400w`}
            loading="lazy"
            alt={alt_description} />
         <div className="pos-a l-0 t-0 w-100% h-100% p-4 z-1 animate-fade animate-duration-400 animate-delay-200">
            {children}
         </div>
      </div>
   )
}

export default AppImage