import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";

export default function NewMove({ props }) {
  return (
    <>
      <div className="mb-8">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {props.results ? (
            props.results.map((res, i) => (
              <div key={res.id}>
                <SwiperSlide className="cursor-pointer">
                  <Link href={"/products/" + res.id}>
                    <Image
                      width={285}
                      height={200}
                      src={`https://image.tmdb.org/t/p/original/${res.poster_path}`}
                      alt="move"
                    />
                  </Link>
                </SwiperSlide>
              </div>
            ))
          ) : (
            <h1 className="text-wrap">sds</h1>
          )}
        </Swiper>
      </div>
    </>
  );
}
