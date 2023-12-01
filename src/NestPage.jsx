import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NestPage() {
  return (
    <>
      <h1>Nestされたページだよ</h1>
      <Link to={"/"}>ホーム</Link>
      <Link to={"/page1"}>ページ1</Link>
      <Link to={"/page2"}>ページ2</Link>
    </>
  );
}
