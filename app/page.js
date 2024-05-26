import Impress from './Impress/Impressout'
import Horizontally from "./layouts/Horizonatally";
import Card from "./layouts/Card";
import Advert from './layouts/Advert'
import Branches from './Subsideries/Branches'
export default function Home() {
  return (
    <>
      <Impress />
      <Advert />
      <Horizontally />
      <Card />
      <Branches />
    </>
  );
}
