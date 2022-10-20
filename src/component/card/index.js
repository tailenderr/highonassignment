import "./index.scss";
import { useState, useEffect } from "react";
const Card = ({ setList }) => {
  const [apiData, setApiData] = useState([]);
  const [selectColor, setSelectColor] = useState({});

  useEffect(() => {
    fetch("https://demo2965432.mockable.io/highon/colors")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setApiData(...[data.data]);
        setSelectColor(data.data[0]);
        console.log(data.data[0]);
      });
  }, []);
  // function to select current color and save in list state recieved from props
  const handleSelect = () => {};
  // console.log(apiData[0]);
  return (
    // component to select and save card
    <div className="selectedCardContainer">
      <h1>Select the color</h1>
      <div className="colorTagBox">
        <span
          style={{ backgroundColor: apiData[0].code }}
          onClick={() => {
            handleSelect();
          }}
        ></span>
        <span style={{ backgroundColor: apiData[1].code }}></span>
        <span style={{ backgroundColor: apiData[2].code }}></span>
        <span style={{ backgroundColor: apiData[3].code }}></span>
        <span style={{ backgroundColor: apiData[4].code }}></span>
      </div>
      <h2>Give a Title</h2>
      <input className="editColorName" value={selectColor.name} />
      <h2>Desciption</h2>
      <input className="editColorDescription" />
    </div>
  );
};

export default Card;
