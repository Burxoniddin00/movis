"use client";
import { Allswiper } from "@/components/AllSwiper";
import Mainn from "@/components/CompanetMayin";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [move4, setmove4] = useState([]);
  const [move3, setmove3] = useState([]);
  const [move5, setmove5] = useState([]);

  useEffect(() => {
    async function s() {
      const ress = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=95ecf50d83cc6a4046e34273fb02582d`
      );
      setmove3(await ress.json());
      const res4 = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=95ecf50d83cc6a4046e34273fb02582d`
      );
      setmove4(await res4.json());
      const res5 = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=95ecf50d83cc6a4046e34273fb02582d`
      );
      setmove5(await res5.json());
    }
    s();
  }, []);

  return (
    <>
      <Mainn />
      <Allswiper />
    </>
  );
}
