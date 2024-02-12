// import React, { useState, axios, useEffect  } from 'react'
// import { useParams } from 'react-router-dom';
// import MyHistory from './MyHistory'

// export default function UserHome() {
//   const {id} = useParams();

// const [myDetails, setMyDetails] =useState({
//   first_name: '',
//   last_name: '',
//   phone: '',
//   // idNumber: '',
//   password: '',
//   email: '',
// });

// const details = async () => {
 

//   try {
//     const response = await axios.post(`http://localhost:9999/api/user/${id}`, {
     
//     });
//     if (Array.isArray(response.data) && response.data.length > 0) {
//       const first_name = response.data[0].first_name;
//       const last_name = response.data[0].last_name;
//       const phone = response.data[0].phone;
//       const password = response.data[0].password;
//       const email = response.data[0].email;
//       // setUserExists(userId);
//       // nav(`/user/${userId}`);
//       // console.log(response.data);
//       // console.log(userId);
//     } else {
//       console.error('User not found');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// useEffect(  () =>{



// },[myDetails])

//   return (<>
//     <div style={{backgroundColor: "red"}}>UserHome</div>
//     <div>{myDetails}</div>
//     <MyHistory/>
//     </>
//   )
// }





import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MyHistory from './MyHistory';

export default function UserHome() {
  const { id } = useParams();
  const [myDetails, setMyDetails] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    password: '',
    email: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:9999/api/user/${id}`);
        if (Array.isArray(response.data) && response.data.length > 0) {
          const userData = response.data[0];
          setMyDetails({
            first_name: userData.first_name,
            last_name: userData.last_name,
            phone: userData.phone,
            password: userData.password,
            email: userData.email,
          });
        } else {
          console.error('User not found');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div style={{ backgroundColor: 'red' }}>UserHome</div>
      <div>
        <p>First Name: {myDetails.first_name}</p>
        <p>Last Name: {myDetails.last_name}</p>
        <p>Phone: {myDetails.phone}</p>
        <p>Email: {myDetails.email}</p>
      </div>
      <MyHistory />
    </>
  );
}
