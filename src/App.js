import Footer from "./sections/Footer";
import Navbar from "./sections/Navbar";
import Form from "./sections/Form";
import Complements from "./sections/Complements";
import CarouselSection from "./sections/Events";
import WhtButton from './components/WhtButton'
import BigCarousel from './components/BigCarousel'
import PerfectTent from "./sections/PerfectTent";

import "react-responsive-carousel/lib/styles/carousel.min.css";


function App() {
  return (
  
    <div>
      <Navbar />
      <WhtButton/>
      <BigCarousel/>
      <PerfectTent/>
      <Complements/>
      <CarouselSection />
      <Form />
      <Footer />
    </div>

  );
}

export default App;
