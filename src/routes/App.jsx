import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import FetchItems from "../Components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../Components/LoadingSpinner";
import Hero from "../Components/Hero";

function App() {
  const location = useLocation();
  const fetchStatus = useSelector((store) => store.fetchStatus);

  function LayoutContent() {
    return (
      <>
        <Header />
        {location.pathname === "/" && <Hero />}
        <Outlet />
        <Footer />
      </>
    );
  }

  return (
    <>
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <LayoutContent />}
    </>
  );
}

export default App;
