// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function UpdateComponent() {
//   const [data, setData] = useState({
//     imePrezime: "",
//     name: "",
//     description: "",
//   });

//   useEffect(() => {
//     fetchData(); // Fetch existing data
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`/api/clan/${dat.id}`);
//       setData(response.data); // Set the fetched data
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`/api/items/${data.imePrezime}`, data);
//       console.log("Item updated successfully");
//       // Optionally, you can navigate or show a success message here
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Update Component</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={data.name}
//           onChange={handleInputChange}
//         />
//         <textarea
//           name="description"
//           value={data.description}
//           onChange={handleInputChange}
//         ></textarea>
//         {/* Add other fields */}
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// }

// export default UpdateComponent;
