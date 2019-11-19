import React, { useState } from 'react';
import useInfiniteScroll from "./useInfiniteScroll";

const List = () => {
  const [listItems, setListItems] = useState(Array.from(Array(3).keys(), n => n + 1));
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  

  function fetchMoreListItems() {
    setTimeout(() => {
      setListItems(prevState => ([...prevState, ...Array.from(Array(3).keys(), n => n + prevState.length + 1)]));
      setIsFetching(false);
    }, 2000);
  }


  return (
    
      <div >
        {listItems.map(listItem => 
        <div className={"video"} >
          <h4> Video conferencia Ponta Porã X Dourados </h4>
          <p>
        
            rem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis eu dui id felis porta placerat. Praesent ac iaculis
            metus. Nullam gravida ac nunc nec viverra. Praesent ligula
            odio, mattis eget scelerisque non.{" "}
          </p>
        </div>)}
         {isFetching && 'Buscando videos para mais tarde...'}
      </div>
     
  
  );
};

export default List;