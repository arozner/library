import React, { useState }  from 'react'
import Book_Id from './Book_Id'
import Books from './Books'
import Lending from './Lending'
import Lender_Id from './Lender_Id'
export default function Home() {

  const [data, setData] = useState("");
  const [loans, setLoans] = useState("");
  const [books, setBooks] = useState("");
  const [customers, setCustomers] = useState("");

const borrowed= async()=>{
  try {
    const response = await axios.get('http://localhost:9999/api/loans/over'
     
    );

    setLoans(response.data);
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};






// useEffect(() => {
//   console.log(userExists);
// }, [userExists]);


  return (<>
    <div>Home</div>
    <Books/>
    <Book_Id/>
     <Lending/>
     <Lender_Id/>
    </>
  )
}
