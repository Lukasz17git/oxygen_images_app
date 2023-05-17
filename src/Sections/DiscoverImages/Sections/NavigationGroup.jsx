import NavigationButton from "../Components/NavigationButton"


const NavigationGroup = ({ page, totalPages, onClickNavigation }) => {

   // const initialNavigationValue = page > 3 ? page - 2 : 1

   const initialNavigationValue = (totalPages - page) < 2
      ? totalPages < 5 ? 1 : totalPages - 4
      : page > 3 ? page - 2 : 1

   const navigationButtons = Array(totalPages > 5 ? 5 : totalPages).fill(initialNavigationValue)
   const shouldDisplayDots = totalPages > 5 && totalPages - page > 2


   return (
      <div className="frcc g-8 p-16">
         {navigationButtons.map((_, index) => (
            <NavigationButton
               key={index}
               value={initialNavigationValue + index}
               isCurrentPage={page == (initialNavigationValue + index)}
               onClick={onClickNavigation}
            />
         ))}
         {shouldDisplayDots && (
            <>
               <div className="frcc g-2">
                  <span className="bg-main-extralight w-4 h-4 br-4"></span>
                  <span className="bg-main-extralight w-4 h-4 br-4"></span>
                  <span className="bg-main-extralight w-4 h-4 br-4"></span>
               </div>
               <NavigationButton
                  value={totalPages}
                  isCurrentPage={page == totalPages}
                  onClick={onClickNavigation}
               />
            </>
         )}
      </div>
   )
}
export default NavigationGroup