import { useEffect } from "react"


const useA11yEscKey = (closeHandler) => {

   useEffect(() => {
      const handleEscKeyPress = (e) => e.key === 'Escape' && closeHandler()
      window.addEventListener('keydown', handleEscKeyPress)
      return () => window.removeEventListener('keydown', handleEscKeyPress)
   }, [closeHandler])

}

export default useA11yEscKey