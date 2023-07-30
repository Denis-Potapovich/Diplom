import CarouselComp from "../HeaderComp/Carousel/CarouselComp";
import MainHits from "../HitsComp/HitsComp";
import Catalog from "../CatalogComp/CatalogComp";
import Viewed from "../ViewedComp/ViewedComp";

export default function HomePage(): JSX.Element {
  return (
    <>
      <CarouselComp></CarouselComp>
      <MainHits></MainHits>
      <Catalog></Catalog>
      <Viewed></Viewed>
    </>
  );
}
