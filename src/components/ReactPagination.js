import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import ExpenseList from './expenseList';

const ReactPagination = ({itemsPerPage}) => {

    const {expenseList:list,query} = useSelector(state=>state.expenses)
    
    const filterList = list.filter(item=> item.title.includes(query))

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
  console.log(currentItems)
    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(filterList.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(filterList.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,filterList]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % filterList.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  
    return (
      <>
      <ExpenseList currentItems={currentItems}/>
        {/* <Items currentItems={currentItems} /> */}
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }
  
export default ReactPagination
