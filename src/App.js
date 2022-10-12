import Footer from "./sections/Footer";
import Cover from "./sections/Cover";
import Navbar from "./sections/Navbar";
import Form from "./sections/Form";
import Complements from "./sections/Complements";
import CarouselSection from "./sections/CarouselSection";
import WhtButton from './components/WhtButton'


function App() {
  return (
  
    <div>
      <Navbar />
      <WhtButton/>
      <Cover />
      <Complements />
      <CarouselSection />
      <Form />
      <Footer />
    </div>

  );
}

export default App;
