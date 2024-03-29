import Navbar from "./components/Navbar";
import Categories from "./components/categories";
import Sidecategories from "./components/Sidecategories";
import Saleimage from "./components/Saleimage";
import Recommended from "./components/Recommended";
import Topics from "./components/Topics";
import Mostpopular from "./components/Mostpopular";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Categories></Categories>
      <Sidecategories></Sidecategories>
      <Saleimage></Saleimage>
      <Recommended></Recommended>
      <Topics></Topics>
      <Mostpopular></Mostpopular>
      <Footer></Footer>
    </div>
  );
}

export default App