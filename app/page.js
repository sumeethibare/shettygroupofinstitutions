import Impress from './Impress/Impressout'
import Advert from './layouts/Advert'
import Horizontally from "./layouts/Horizonatally";
import About from './about/About'
import Card from "./management/Card";
import Footer from './base/Footer';
export default function Home() {
  return (
    <>
      <Impress />
      <Advert />
      <Horizontally />
      <About />
      <Card />
      <Footer />
    </>
  );
}
