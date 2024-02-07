import React, { useState } from "react";

function App() {
  const [state, setState] = useState("");

  let AllbtnClicked = "";

  const onClicking = (event) => {
    let btnClicked = event.target.value;
    AllbtnClicked = state + btnClicked;

    let symbols = "+-/*.";
    
    for (let i = 0; i < AllbtnClicked.length; i++) {
      if (
        symbols.includes(AllbtnClicked[i]) &&
        symbols.includes(AllbtnClicked[i + 1])
      ) {
        AllbtnClicked = AllbtnClicked.slice(0, -1);
        alert("Two symbols should not be together");
      }
    }
    setState(AllbtnClicked);
  };


  const onClickingDelete = () => {
    let deletedArray = state.slice(0, -1);
    setState(deletedArray);
  };

  const Output = () => {
    let Total = eval(state).toString();
    setState(Total);
  };

  return (
    <div className="container">
      <div className="display-calc-value">{state}</div>
      <div className="buttons">
        <button value="ac" onClick={() => setState("")}>
          AC
        </button>
        <button value="del" onClick={onClickingDelete}>
          Del
        </button>
        <button value="+" onClick={onClicking}>
          +
        </button>
        <button value="1" onClick={onClicking}>
          1
        </button>
        <button value="2" onClick={onClicking}>
          2
        </button>
        <button value="3" onClick={onClicking}>
          3
        </button>
        <button value="4" onClick={onClicking}>
          4
        </button>
        <button value="5" onClick={onClicking}>
          5
        </button>
        <button value="6" onClick={onClicking}>
          6
        </button>
        <button value="7" onClick={onClicking}>
          7
        </button>
        <button value="8" onClick={onClicking}>
          8
        </button>
        <button value="9" onClick={onClicking}>
          9
        </button>
        <button value="0" onClick={onClicking}>
          0
        </button>
        <button value="-" onClick={onClicking}>
          -
        </button>
        <button value="/" onClick={onClicking}>
          /
        </button>
        <button value="*" onClick={onClicking}>
          *
        </button>
        <button value="=" onClick={Output}>
          =
        </button>
        <button value="." onClick={onClicking}>
          .
        </button>
      </div>
    </div>
  );
}

export default App;
