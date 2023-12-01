import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Homeだよ</h1>
      <ul>
        <li>
          <Link to={"/page1"}>ページ1</Link>
        </li>
        <li>
          <Link to={"/page2"}>ページ2</Link>
        </li>
      </ul>
    </>
  );
}
