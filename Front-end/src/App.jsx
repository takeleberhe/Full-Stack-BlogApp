import Header from "./Components/Header";
import PageRouter from "./PageRouter/PageRouter";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Header />
      <PageRouter className="my-20" />
      <Footer />
    </>
  );
}

export default App;
