import { Link, useNavigate } from "react-router-dom";

export default function Page1() {
  const arr = [...Array(100).keys()];
  console.log(arr);
  const history = useNavigate();

  const onClickHome = () => history("/page2", { state: { arr } });
  // TODO stateにarrを入れてpage2へ遷移したい
  return (
    <>
      <h1>ページ1だよ</h1>
      <ul>
        <li>
          <Link to={"/"}>ホーム</Link>
        </li>
        <li>
          <Link to={"/page2"}>ページ2</Link>
        </li>
        <button onClick={onClickHome}>jsでHomeに遷移</button>
      </ul>
    </>
  );
}
