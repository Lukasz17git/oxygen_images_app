
const NavigationButton = ({ value, isCurrentPage, onClick }) => {

   return (
      <button
         onClick={() => onClick(value)}
         role="navigation"
         className={`min-w-32 h-32 p-8 br-4 frcc tf-extrabold ${isCurrentPage ? 'bg-grey-dark' : 'bg-grey-light'}`}
      >
         {value}
      </button>
   )
}
export default NavigationButton