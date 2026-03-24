import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import { BrowserRouter,Route,Routes } from "react-router-dom";
import CartPage from "./redux/CartPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />  

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Product" element={<Product/>}/>
          <Route path="/Cartpage" element={<CartPage/>}/>
         </Routes>
        <Footer/>
      </BrowserRouter>
      {/* <Navbar /> */}
      {/* <Main/> */}
      {/* <About/> */}
    
      {/* <Footer /> */}
    </div>
  );
}

export default App;
