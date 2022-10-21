import "./index.scss";
import { useContext, useRef, useState } from "react";
import { mycontext } from "../../App";
const CardList = () => {
  const { value3 } = useContext(mycontext);
  const [list, setList] = value3;
  const ref = useRef();
  const [hideshow, setHideShow] = useState("See More");
  //   map function to show list of added cards
  const display = () => {
    hideshow == "See More" ? setHideShow("See Less") : setHideShow("See More");
    const classArr = ref.current.className;
    if (classArr.includes("display")) {
      ref.current.className = "cardFooter notDisplay";
    } else {
      ref.current.className = "cardFooter display";
    }
  };
  return (
    <>
      {list.length === 0
        ? ""
        : list.map((item) => {
            console.log(item);
            return (
              <div className="card">
                <div className="cardHead">
                  <div
                    className="colorBlock"
                    style={{ backgroundColor: item.code }}
                  ></div>
                  <div className="cardInfo">{item.description}</div>
                </div>
                <div className="cardFooter notDisplay" ref={ref}>
                  <div className="footerContainer">
                    <div className="footerContent">
                      <div>{item.data[0].quality}</div>
                      <div className="traitContainer">
                        {item.data[0].traits.map((trait) => {
                          return <div className="traitName">{trait}</div>;
                        })}
                      </div>
                    </div>
                    <div className="footerContent">
                      <div>{item.data[1].quality}</div>
                      <div className="traitContainer">
                        {item.data[1].traits.map((trait) => {
                          return <div className="traitName">{trait}</div>;
                        })}
                      </div>
                    </div>
                    <div className="footerContent">
                      <div>{item.data[2].quality}</div>
                      <div className="traitContainer">
                        {item.data[2].traits.map((trait) => {
                          return <div className="traitName">{trait}</div>;
                        })}
                      </div>
                    </div>
                    <div className="footerContent">
                      <div>{item.data[3].quality}</div>
                      <div className="traitContainer">
                        {item.data[3].traits.map((trait) => {
                          return <div className="traitName">{trait}</div>;
                        })}
                      </div>
                    </div>
                  </div>

                  <button
                    className="titleButton"
                    style={{ backgroundColor: item.code }}
                  >
                    TITLE
                  </button>
                </div>

                <div className="displayButton" onClick={display}>
                  {hideshow}
                </div>
              </div>
            );
          })}
    </>
  );
};

export default CardList;
