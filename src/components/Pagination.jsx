import { useState } from 'react';
import ReactPaginate from 'react-paginate'
function Pagination (props) {
    let [page , setPage] = useState(" ")

    let handlePageClick = (data) =>{
        setPage(data.selected)
        console.log("pagination"+ page);
        props.sendToParent(page)
    }
    return ( 
        <div>
           <ReactPaginate
                previousLabel={'Previous'} //label representation 
                nextLabel={"Next"}  
                breakLabel={"..."}  
                pageCount={10} //no. of pages
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}  //bootstrap stying
                pageLinkClassName={"page-link"}  
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}   //represents active page selected
                
            />       
        </div>
     );
}
 
export default Pagination;