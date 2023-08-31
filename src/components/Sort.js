// import React from "react";
// import axios from "axios";
// import OneFriend from "./OneFriend";

// import { useState, useEffect } from "react";

// const Sort = () => {
//   const [data, setItems] = useState([]);
//   const [sortType, setSortType] = useState();

//   useEffect(() => {
//     let token = window.sessionStorage.getItem("auth_token");
//     axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
//     axios.get("api/clan").then((response) => {
//       console.log(response.data);
//       setItems(response.data.data);
//     });
//   }, [data]);

//   const handleSort = (type) => {
//     const pod = data.imePrezime;
//     console.log(pod);
//     setSortType(type);
//   };

//   const sortedItems = data.sort((a, b) =>
//     a[sortType].localeCompare(b[sortType])
//   );

//   return (
//     <div>
//       <div>
//         <button onClick={() => handleSort(data.id)}>Sort by ID</button>
//         <button onClick={() => handleSort(data.imePrezime)}>
//           Sort by Name
//         </button>
//         {/* Add more sorting criteria buttons if needed */}
//       </div>
//       <ul>
//         {/* {sortedItems.map((dat) => (
//           <OneFriend dat={dat} key={dat.id} />
//         ))} */}
//       </ul>
//     </div>
//   );
// };

// export default Sort;
