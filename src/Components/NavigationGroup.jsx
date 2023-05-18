import NavigationButton from "./NavigationButton"


const NavigationGroup = ({ page, totalPages, onClickNavigation }) => {

   const initialNavigationValue = (totalPages - page) < 2
      ? totalPages < 5 ? 1 : totalPages - 4
      : page > 3 ? page - 2 : 1

   const navigationButtons = Array(totalPages > 5 ? 5 : totalPages).fill(initialNavigationValue)

   const shouldDisplayStartDots = totalPages > 5 && page > 3
   const shouldDisplayEndDots = totalPages > 5 && totalPages - page > 2


   return (
      <div className="frcc g-8 p-16">
         {shouldDisplayStartDots && (
            <>
               <NavigationButton
                  value={1}
                  onClick={onClickNavigation}
               />
               <NavigationDots />
            </>
         )}
         {navigationButtons.map((_, index) => (
            <NavigationButton
               key={index}
               value={initialNavigationValue + index}
               isCurrentPage={page == (initialNavigationValue + index)}
               onClick={onClickNavigation}
            />
         ))}
         {shouldDisplayEndDots && (
            <>
               <NavigationDots />
               <NavigationButton
                  value={totalPages}
                  onClick={onClickNavigation}
               />
            </>
         )}
      </div>
   )
}

const NavigationDots = () => (
   <div className="frcc g-2">
      <span className="bg-grey-dark w-4 h-4 br-4"></span>
      <span className="bg-grey-dark w-4 h-4 br-4"></span>
      <span className="bg-grey-dark w-4 h-4 br-4"></span>
   </div>
)

export default NavigationGroup