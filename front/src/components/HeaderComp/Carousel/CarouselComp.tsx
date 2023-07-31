import "bootstrap/dist/css/bootstrap.min.css";

import Carousel from "react-bootstrap/Carousel";

export default function CarouselComp() {
  return (
    <div className="carousel-main-wrapper">
      <Carousel>
        <Carousel.Item>
          <img src="assets/slider/big_fin_11_3_23.jpg" alt=""></img>
        </Carousel.Item>
        <Carousel.Item>
          <img src="assets/slider/big_new_11_3_23.jpg" alt=""></img>
        </Carousel.Item>
        <Carousel.Item>
          <img src="assets/slider/big_fin_11_3_23.jpg" alt=""></img>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
