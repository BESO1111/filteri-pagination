
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Paginationn from "../Paginationn";

function Productsdata() {
  let [dataa, setdata] = useState([]);
  let [valuee, setvaluee] = useState("");
  let[curentpage,setcurentpage]=useState(1)
  let[postsperpage,setpostsperpage]=useState(6);
  useEffect(() => {
    let getdata = async () => {
      let data = await axios.get(`https://dummyjson.com/products`);
      console.log("shemodis", data.data.products);
      setdata(data.data.products);
    };

    getdata();
  }, []);



  // პაგინაციის მეთოდი თუ როგორ გავაკეთოთ გადაგვერდება

  
let indexoflastpost=curentpage*postsperpage;
let indexoffirstposts=indexoflastpost-postsperpage;
let curentposts=dataa.slice(indexoffirstposts,indexoflastpost);

let paginate=(pagenumber)=>setcurentpage(pagenumber)

  return (
    <div className="App">

    
      <input type="text" onChange={(e) => setvaluee(e.target.value)} />
{/*  სერჩის მეთoდი თუ როგორ დავსერჩოთ დატიდან წამოღებული ინფორმაციააა .--------------------------------------------------------------
-------------
---------------
---------------
-------------------
-----------
-----------
------------
----------
*/} <div className="fleqsi">
      {curentposts
        .filter((value) => {
          if (valuee === "") 
          return value;
          else if (value.title.toLowerCase().includes(valuee.toLowerCase())) {
            return value;
          } else if (
            value.description.toLowerCase().includes(valuee.toLowerCase())
          ) {
            return value;
          }
        })

        .map((item) => (
          <div className="mainDiv">
            <p> {item.title} </p>
            <img src={item.images[0]} />
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}

       
        </div>
        <Paginationn postsperpage={postsperpage} totalposts={dataa.length} paginate={paginate}/>
    </div>
  );
}

export default Productsdata;
