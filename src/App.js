import "./App.scss";
import Card from "./component/card/index";
import { createContext, useRef, useState, useEffect } from "react";
import CardList from "./component/cardlist";

export const mycontext = createContext();
function App() {
  const ref = useRef();
  const [list, setList] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [selectColor, setSelectColor] = useState({});

  useEffect(() => {
    fetch("https://demo2965432.mockable.io/highon/colors")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setApiData([...data.data]);
        setSelectColor(data.data[0]);
      });
  }, []);

  const addCards = () => {
    const classArr = ref.current.className;
    if (classArr.includes("show")) {
      ref.current.className = "cardDetails hide";
    } else {
      ref.current.className = "cardDetails show";
    }
  };
  return (
    <mycontext.Provider
      value={{
        value: [apiData, setApiData],
        value2: [selectColor, setSelectColor],
        value3: [list, setList],
        value4: addCards,
      }}
    >
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
            <div className="cardDetails hide" ref={ref}>
              {apiData.length === 0 ? "" : <Card />}
            </div>
          </div>
          {apiData.length === 0 ? "" : <CardList />}
        </div>
      </div>
    </mycontext.Provider>
  );
}

export default App;
