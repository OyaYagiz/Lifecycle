import FunctionComp from "./components/functionComp";
import Pagination from "./components/classComp";
import { useState } from "react";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  console.log(isVisible);
  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>Gizle / Göster</button>
      {isVisible && (
      <>
      <FunctionComp />
      </>
    )}
    </>
  )
};

export default App;
