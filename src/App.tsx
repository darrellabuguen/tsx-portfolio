import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Pages from "./components/Pages";

function App() {
  const pages = ["Home", "About", "Projects", "Resume"];
  return (
    <>
      <Navigation
        page={pages}
        page_class="nav-link"
      />
      <Pages />
      <Footer />
    </>
  )
}

export default App
