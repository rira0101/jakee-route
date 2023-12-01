import { Link, Outlet, useLocation } from "react-router-dom";

export default function Page2() {
  const state = useLocation();
  console.log(state);
  return (
    <>
      <h1>ページ2だよ</h1>
      <ul>
        <li>
          <Link to={"/"}>ホーム</Link>
        </li>
        <li>
          <Link to={"/page1"}>ページ1</Link>
        </li>
        <li>
          <Link to={"nest"}>ネストしたページ</Link>
          <Link to={"999"}>URLパラメータ</Link>
          <Link to={"999?name=hogehoge"}>Queryパラメータ</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
