"use client";
import { useRouter } from "next/navigation";
import React from "react";
const Page = () => {
  const routers = useRouter();
  routers.push("/");
  return (
    <div>
      <h1>salom</h1>
    </div>
  );
};

export default Page;
