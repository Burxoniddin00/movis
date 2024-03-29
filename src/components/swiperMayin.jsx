import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";

const Sinfelswiper = ({props}) => {

  return (
    <>
      {props.results ? (
        <div className="mb-8">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={5}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {props.results.map((res, i) => (
              <div key={i}>
                <SwiperSlide className="cursor-pointer">
                  <Link href={"/products/" + res.id}>
                    <Image
                      id={i}
                      width={285}
                      height={50}
                      className="swiper__img"
                      src={`https://image.tmdb.org/t/p/original/${res.backdrop_path}`}
                      alt="move"
                    />
                  </Link>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
          {/* <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={5}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
           
          </Swiper> */}
        </div>
      ) : (
        <h1 className="text-white">Not</h1>
      )}
    </>
  );
};

export default Sinfelswiper;
