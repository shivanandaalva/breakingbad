import React, { useEffect,useState } from "react";
const Details=(props)=>{
    const {index}=props;
    const [data, setData] = useState([]);

    const fetchURL = "https://www.breakingbadapi.com/api/characters/"+index;
    const getItems = () => fetch(fetchURL).then(res => res.json());
    
      useEffect(() => {
         getItems().then(data =>
             setData(data)
         )
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
              console.log(data);
          })
      }, [index]);
    

return(
   <div className="container" >
       <div className="image" >
         
       <img src={data[0]?.img} />
       </div>
        <div className="details">
    <p>Name: {data[0]?.name}</p>
    <p>DOB: {data[0]?.birthday}</p>
    <p>Occupation: {data[0]?.occupation}</p>
    <p>Nickname: {data[0]?.nickname}</p>
    <p>Portrayed: {data[0]?.portrayed}</p>
    <p>Season Appeared: {data[0]?.appearance}</p>
    </div>
 
    </div>

  
   
)

}

export default Details;