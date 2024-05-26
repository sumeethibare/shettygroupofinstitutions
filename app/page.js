import Impress from './Impress/Impressout'
import Advert from './layouts/Advert'
import Horizontally from "./layouts/Horizonatally";
import Card from "./layouts/Card";
import Branches from './Subsideries/Branches';
import Footer from './base/Footer';
export default function Home() {
  return (
    <>
      <Impress />
      <Advert />
      <Horizontally />
      <Card />
      <Branches />
      <Footer />
    </>
  );
}
