import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const Comp = ({ children }) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow((p) => !p)}>Toggle</button>
      <br />
      {show && children}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Comp>
      <App />
    </Comp>
  </StrictMode>,
  rootElement
);
