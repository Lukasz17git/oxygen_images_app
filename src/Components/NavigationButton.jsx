
const NavigationButton = ({ value, isCurrentPage, onClick }) => {

   return (
      <button
         onClick={() => onClick(value)}
         role="navigation"
         className={`min-w-32 h-32 p-8 br-4 frcc tf-extrabold tc-main-light bg-grey-light ${isCurrentPage ? 'bc-main-extralight bw-1 oc-main-extralight ow-1' : ''}`}
      >
         {value}
      </button>
   )
}
export default NavigationButton