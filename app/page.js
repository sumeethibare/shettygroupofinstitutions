import Impressout from "./layouts/Impressout";
import Horizontally from "./layouts/Horizonatally";
import Card from "./layouts/Card";
import Advert from './layouts/Advert';
import Branches from './Subsideries/Branches';
import Footer from './Footer/Footer';
import About from './about/About'
export default function Home() {
  return (
    <>
      <Impressout />
      <Advert />
      <Horizontally />
      <Card />
      <About />
      <Branches />
      <Footer/>
    </>
  );
}
