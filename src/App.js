import Footer from "./sections/Footer";
import Cover from "./sections/Cover";
import Navbar from "./sections/Navbar";
import Form from "./sections/Form";
import Complements from "./sections/Complements";
import ComplementsCards from "./sections/ComplementsCards";
import CarouselSection from "./sections/Events";
import WhtButton from './components/WhtButton'

import "react-responsive-carousel/lib/styles/carousel.min.css";


function App() {
  return (
  
    <div>
      <Navbar />
      <WhtButton/>
      <Cover />
      <Complements/>
      <CarouselSection />
      <Form />
      <Footer />
    </div>

  );
}

export default App;
