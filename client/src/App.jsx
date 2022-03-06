import { useEffect, useState } from "react"
import "./app.css";
import Table from "./Table";
import { Users } from "./user";
import axios from "axios";


//// BASIC SEMVER ////
// function App() {
//     const [query, setQuery] = useState("")
//     return (
//         <div className="app">
//             <input
//                 type="text"
//                 placeholder="Search..."
//                 className="search"
//                 onChange={(e) => setQuery(e.target.value.toLowerCase())}
//             />
//             <ul className="list">
//                 {Users.filter((asd) =>
//                     asd.first_name.toLowerCase().includes(query)
//                 ).map((user) => (
//                     <li key={user.id} className="listItem">
//                         {user.first_name}
//                         {user.last_name}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }


//// SEARCH ON A DATABASE ////
// function App() {
//     const [query, setQuery] = useState("")
//     const keys = ["first_name", "last_name", "email"]
//     // console.log(Users[0]["email"])
//     const search = (data) => {
//         return data.filter((item) =>
//             keys.some(key => item[key].toLowerCase().includes(query))
//         )
//     };

//     return (
//         <div className="app">
//             <input
//                 type="text"
//                 placeholder="Search..."
//                 className="search"
//                 onChange={(e) => setQuery(e.target.value.toLowerCase())}
//             />
//             {<Table data={search(Users)} />}
//         </div>
//     );
// }


//// API SEARCH ////
function App() {
    const [query, setQuery] = useState("")
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get(`http://localhost:5000?q=${query}`);
            setData(res.data);
        };
        fetchUsers();
    }, [query])

    // console.log(query)
    return (
        <div className="app">
            <input
                type="text"
                placeholder="Search..."
                className="search"
                onChange={(e) => setQuery(e.target.value)}
            />
            {<Table data={data} />}
        </div>
    );
}

export default App;