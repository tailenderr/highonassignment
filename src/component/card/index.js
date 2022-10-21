import "./index.scss";
import { useState, useContext, useMemo } from "react";
import { mycontext } from "../../App";

const Card = () => {
  const { value, value2, value3, value4 } = useContext(mycontext);
  const [apiData, setApiData] = value;
  const [selectColor, setSelectColor] = value2;
  const [list, setList] = value3;
  const addCards = value4;
  const [name, setName] = useState(selectColor.name);
  const [description, setDescription] = useState("");
  const [selectId, setSelectedId] = useState("");

  // function to select current color and save in list state recieved from props
  const changeName = useMemo(() => {
    setName(selectColor.name);
  }, [selectColor]);
  function handleSelect(index) {
    setSelectColor(apiData[index]);
  }
  const saveChanges = () => {
    setList((old) => [
      ...old,
      {
        ...selectColor,
        name: `${name}`,
        description: `${description}`,
      },
    ]);
    addCards();
  };
  // component to select and save card
  return (
    <div className="selectedCardContainer">
      <h1>Select the color</h1>
      <div className="colorTagBox">
        <span
          style={{ backgroundColor: apiData[0].code }}
          onClick={() => {
            handleSelect(0);
          }}
        ></span>
        <span
          style={{ backgroundColor: apiData[1].code }}
          onClick={() => {
            handleSelect(1);
          }}
        ></span>
        <span
          style={{ backgroundColor: apiData[2].code }}
          onClick={() => {
            handleSelect(2);
          }}
        ></span>
        <span
          style={{ backgroundColor: apiData[3].code }}
          onClick={() => {
            handleSelect(3);
          }}
        ></span>
        <span
          style={{ backgroundColor: apiData[4].code }}
          onClick={() => {
            handleSelect(4);
          }}
        ></span>
      </div>
      <h2>Give a Title</h2>
      <input
        className="editColorName"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h2>Desciption</h2>
      <input
        className="editColorDescription"
        placeholder="write about color"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />

      <div className="buttonContainer">
        <button onClick={saveChanges} style={{ color: selectColor.code }}>
          Save
        </button>
        <button onClick={addCards}>Cancel</button>
      </div>
    </div>
  );
};

export default Card;
