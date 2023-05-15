import Error from "./Errors/Error";
import Modal from "./Modals/Modal";
import Router from "./Router/Router";
import Footer from "./Sections/Footer/Footer";
import Navbar from "./Sections/Navbar/Navbar";
// import Modal from "./Modals/Modal";



function App() {
   return (
      <>
         <Navbar />
         <Router />
         <Footer />
         <Modal />
         <Error />
      </>
   );
}

export default App;
