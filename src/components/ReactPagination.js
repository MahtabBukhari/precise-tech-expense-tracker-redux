import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import ExpenseList from './expenseList';

const ReactPagination = ({itemsPerPage}) => {

    const {expenseList:list,query} = useSelector(state=>state.expenses)
    const filterList = list.filter(item=> item.title.includes(query))

  const [currentPage, setCurrentPage]=useState(1)
    // const [pageOffset, setPageOffset] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);

 
  console.log(currentItems)

    useEffect(() => {

    //   const firstPageIndex = (currentPage - 1) * PageSize;
    // const lastPageIndex = firstPageIndex + PageSize;
    // return data.slice(firstPageIndex, lastPageIndex);

      // const endOffset = pageOffset + itemsPerPage;

        const firstPageIndex = (currentPage - 1) * itemsPerPage;
        const lastPageIndex = firstPageIndex + itemsPerPage;

      setCurrentItems(filterList.slice(firstPageIndex, lastPageIndex));

      setPageCount(Math.ceil(filterList.length / itemsPerPage));
    }, [itemsPerPage,currentPage]);

 
   const handlePageChange = (event) => {
      
       console.log(event.selected)
       if(event.selected++){
        setCurrentPage(currentPage+1);
        console.log(currentPage+1)

       } else if(event.selected --){
        setCurrentPage(currentPage-1);
        console.log(currentPage-1)
       }else{
        console.log('abc')
       }
      
       
  


  };

    return (
      <>
      <ExpenseList currentItems={currentItems}/>
        {/* <Items currentItems={currentItems} /> */}
      <div style={{marginLeft:"25%",}}>
      <ReactPaginate
         
          previousLabel="Previous"
          nextLabel="Next"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={4}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
          // forcePage={pageOffset}
      />
        </div>  
        
      
      </>
    );
  }
  
export default ReactPagination
