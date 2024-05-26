import Impressout from "./layouts/Impressout";
import Horizontally from "./layouts/Horizonatally";
import Card from "./layouts/Card";
import Advert from './layouts/Advert'
export default function Home() {
  return (
    <>
      <Impressout />
      <Advert />
      <Horizontally />
      <Card />
    </>
  );
}
