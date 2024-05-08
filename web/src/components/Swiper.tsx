import { useEffect, useRef } from "react";
import { register, type SwiperContainer } from "swiper/element/bundle";
import type { SwiperOptions } from "swiper/types";

register();

export default function Slideshow() {
  const swiperElRef: any = useRef(null);

  useEffect(() => {
    const swiperEl: SwiperContainer = swiperElRef.current;
    const swiperParams: SwiperOptions = {
      // navigation: true,
      pagination: true,
      height: 327,
    };

    swiperEl.addEventListener("swiperslidechange", (e) => {
      console.log(e);
      console.log("slide changed");
    });

    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  }, []);

  return (
    <div className="mx-6 mt-6 mb-4">
      <swiper-container ref={swiperElRef}>
        <swiper-slide>
          <div className="img-wrapper">
            <img src="https://a0.muscache.com/im/pictures/4edb6563-e42d-4320-8f5a-d822d3b02cea.jpg?im_w=720" />
            <div className="gradient"></div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="img-wrapper">
            <img src="https://a0.muscache.com/im/pictures/e10534e4-5c9a-46d5-a5d8-8efd32af3f2e.jpg?im_w=720" />
            <div className="gradient"></div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="img-wrapper">
            <img src="https://a0.muscache.com/im/pictures/12928731-c51a-4bfd-97b5-56008e0ce8ad.jpg?im_w=720" />
            <div className="gradient"></div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
}
