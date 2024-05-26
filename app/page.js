import Impress from './Impress/Impressout'
import Horizontally from "./layouts/Horizonatally";
import Card from "./layouts/Card";
<<<<<<< HEAD
import Advert from './layouts/Advert'
import Branches from './Subsideries/Branches'
=======
import Advert from './layouts/Advert';
import Branches from './Subsideries/Branches';
import Footer from './Footer/Footer';
import About from './about/About'
>>>>>>> refs/remotes/origin/main
export default function Home() {
  return (
    <>
      <Impress />
      <Advert />
      <Horizontally />
      <Card />
      <Branches />
      <Footer/>
    </>
  );
}
