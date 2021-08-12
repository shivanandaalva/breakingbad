import React, { useEffect,useState,button  } from "react";
import './App.css';
import {Grid} from '@material-ui/core';
import ReactPaginate from 'react-paginate';
import Characters from "./components/Characters.js";
import Details from "./components/Details.js"

function App(){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [index,updateindex]=useState();
  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 10;
const offset = currentPage * PER_PAGE;
 



  const fetchURL = "https://www.breakingbadapi.com/api/characters";
    const getItems = () => fetch(fetchURL).then(res => res.json());


  useEffect(() => {
    setLoading(true);
  

     getItems().then(data => setData(data))
   
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  if (loading) {
    return <p>loading...</p>;
  }

 
  const pageCount = Math.ceil(data.length / PER_PAGE);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
}

const currentPageData = data
.slice(offset, offset + PER_PAGE)
.map((item,index ) =>  <Characters key={index} updatelist={item} updateindex={updateindex}/>);

  return (
    <div className="App">
      <h1>Breaking Bad </h1>
      {index && <Details index={index}/>}
      
      <Grid container spacing={2} className="grid" >
   {currentPageData}
     
          </Grid>
          <ReactPaginate 
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>

  );
}


export default App;