import FunctionComp from "./components/functionComp";
import Pagination from "./components/classComp";
import UserPage from "./components/UserPage";
import CountDown from "./components/CountDown";
import RefExample from "./newComponents/refExample";
import { useState } from "react";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  console.log(isVisible);
  return (
    <div className="container">
      <button 
      className="btn btn-danger mb-5"
      onClick={() => setIsVisible(!isVisible)}>Gizle / Göster</button>
      {isVisible && (
      <>
      {/* <Pagination /> */}
      {/*<FunctionComp /> */}
      {/*<UserPage />*/}
      {/* <CountDown /> */}
      <RefExample />
      </>
    )}
    </div>
  )
};

export default App;
