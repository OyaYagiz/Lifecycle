import { useEffect, useState, useRef } from "react";
import Loader from "./Loader";
import UserTable from "./UserTable";

const FilterUser = () => {
    const [users, setUsers] = useState(null);

    const [filtredUsers,setFiltredUsers] = useState(null);

    const inputRef = useRef();

    useEffect(() => {
    fetch('https://dummyjson.com/users')
    .then((res) =>res.json())
    .then((data) => {
      setUsers(data.users);
      setFiltredUsers(data.users);
    });
    }, []);

    console.log(users);

    const handleClick =() => {
      const text = inputRef.current.value.toLowerCase();
      
      const filtred = users.filter((user) => 
      user.firstName.toLowerCase().includes(text)
      ||
      user.lastName.toLowerCase().includes(text)
    );

    setFiltredUsers(filtred);
    };
    
    return (
    <div>
      <div className="d-flex gap-4 mb-4">
        <input ref={inputRef} className="form-control" type="text" />
        <button onClick={handleClick} className="btn btn-primary">Ara</button>
      </div>

      {users === null ? (
      <Loader /> 
    ):
    ( 
      <UserTable users={filtredUsers}/>
    )}
    </div>
  )
};

export default FilterUser;