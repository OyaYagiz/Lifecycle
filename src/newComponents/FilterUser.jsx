import { useEffect, useState } from "react";
import Loader from "./Loader";
import UserTable from "./UserTable";
const FilterUser = () => {
    const [users, setUsers] = useState(null);
    useEffect(() => {
    fetch('https://dummyjson.com/users')
    .then((res) =>res.json())
    .then((data) => setUsers(data.users));
    }, []);

    console.log(users);
    
    return <div>
      {users === null ? <Loader /> : <UserTable users={users}/>}
    </div>;
};

export default FilterUser;