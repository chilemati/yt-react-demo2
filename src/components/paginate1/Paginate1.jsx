import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';

// Example items, to simulate fetching from another resources.


function Paginate1({ itemsPerPage,items }) {
    let redir = useNavigate();
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

//   const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item,i) => (
          <div className='border group relative border-red-600 w-[285px] min-h-[301px] '  key={i} >
            <h3>Item #{item.name}</h3>
            <div className={classNames('flexCenter hidden group-hover:flex absolute top-0 left-0  w-full min-h-[301px] bg-[#3A3A3A]',{})}>
               <button className="shadow  mr-2">Share</button> 
               <button onClick={()=> redir('/product/'+item.id)} className="shadow text-white mr-2">Compare</button> 
               <button className="shadow mr-2">Like</button> 
            </div>
          </div>
        ))}
    </>
  );
}

  return (
    <>
      <div className='flexCenter gap-8'>
      <Items currentItems={currentItems} />

      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className='flexCenter gap-4'
      />
    </>
  );
}

export default Paginate1