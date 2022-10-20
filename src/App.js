import "./App.scss";
import Card from "./component/card/index";
import { useRef, useState } from "react";
import CardList from "./component/cardlist";

function App() {
  const ref = useRef();
  // const [apiData, setApiData] = useState([]);
  // const [selectColor, setSelectColor] = useState({});
  // useEffect(() => {
  //   fetch("https://demo2965432.mockable.io/highon/colors")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setApiData(...[data.data]);
  //       setSelectColor(data.data[0]);
  //       console.log(data.data[0]);
  //     });
  // }, []);
  const [list, setList] = useState([]);
  const addCards = () => {
    const classArr = ref.current.className;
    if (classArr.includes("show")) {
      ref.current.className = "cardDetails hide";
    } else {
      ref.current.className = "cardDetails show";
    }
  };
  return (
    <div className="appLayout">
      <div className="appContainer">
        <input placeholder="search" type="text" />
        <br />
        <br />
        <div className="createCardContainer">
          <div className="createCardHeader" onClick={addCards}>
            <span></span>
            <span></span>
            Create a colour card
          </div>
          <div className="cardDetails show" ref={ref}>
            <Card setList={setList} />
          </div>
        </div>
        <CardList />
      </div>
    </div>
  );
}

export default App;
