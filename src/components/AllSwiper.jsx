import React, { useEffect, useState } from "react";
import Sinfelswiper from "./swiperMayin";
import NewMove from "./nweMovi";

export const Allswiper = () => {
  const [move3, setmove3] = useState([]);
  const [move5, setmove5] = useState([]);
  const [move1, setmove1] = useState([]);
  const [move2, setmove2] = useState([]);
  useEffect(() => {
    async function x() {
      const ress = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=95ecf50d83cc6a4046e34273fb02582d`
      );
      setmove3(await ress.json());
      const ress1 = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=95ecf50d83cc6a4046e34273fb02582d`
      );
      setmove1(await ress1.json());
      const res5 = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=95ecf50d83cc6a4046e34273fb02582d`
      );
      setmove5(await res5.json());
      const res2 = await fetch(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=95ecf50d83cc6a4046e34273fb02582d`
      );
      setmove2(await res2.json());
    }
    x();
  }, []);
  return (
    <div>
      <div className="pl-16 mx-auto">
        <h2 className="main__swiper__name">Kemal, İzlemeye Devam Et</h2>
        <Sinfelswiper props={move1} />
        <h2 className="main__swiper__name">Gündemdekiler</h2>
        <Sinfelswiper props={move5} />
        <h2 className="main__swiper__name">Netflix Orijinal İçerikleri</h2>
        <NewMove props={move3} />
      </div>
      <div>
        <h2 className="main__swiper__name">Yeniden İzle</h2>
        <Sinfelswiper props={move2} />
      </div>
      <div className="ml-16">
        <h2 className="main__swiper__name">Listem</h2>
        <Sinfelswiper props={move3} />
      </div>
    </div>
  );
};
