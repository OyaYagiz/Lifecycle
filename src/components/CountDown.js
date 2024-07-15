import {useEffect, useState} from "react";

const CountDown = () => {
    const [number, setNumber] = useState(10);
    useEffect(() =>{

     const intervalId = setInterval(() => {
        setNumber((prev) => (prev !== 0 ? prev - 1 : 0));
     }, 1000);

     return () => clearInterval(intervalId);
   },[]);
    const handleClick = () => {
        // setNumber(number + 1);
        // setNumber(number + 1);
        // setNumber(number + 1);

        setNumber((enson) => enson + 1);
        setNumber((enson) => enson + 1);
        setNumber((enson) => enson + 1);
    };

  return (
    <div>
      <h1 
      style={{
        fontSize: '90px', 
        textAlign: 'center',
        }}>
        {number}
      </h1>
      <button onClick={handleClick} className="btn btn-primary">
        Arttır
        </button>
    </div>
  );
}

export default CountDown;
