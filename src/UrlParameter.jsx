import { Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UrlParameter() {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <>
      <h1>urlパラメータページです。</h1>
      <p>パラメーターは {id} です。</p>
    </>
  );
}
