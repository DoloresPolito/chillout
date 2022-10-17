import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <Carousel autoPlay>
    <div>
      <img alt="" src="https://unsplash.it/400/300/?image=514" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img alt="" src="https://unsplash.it/400/300/?image=512" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img alt="" src="https://unsplash.it/400/300/?image=511" />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>
);
