//import Header from "./Components/Header";
import PageRouter from "./PageRouter/PageRouter";
import Footer from "./Components/Footer";
//import NavbarTest from "./Pages/NavbarTest";
import Nav from "./Pages/Navbar"

function App() {
  return (
    <>
      {/* <Header /> */}
     {/*  <NavbarTest/> */}
      <Nav/>
      <PageRouter className="my-20" />
      <Footer />
    </>
  );
}

export default App;
