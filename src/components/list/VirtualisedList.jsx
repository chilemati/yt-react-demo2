

import React from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
// import "./styles.css";
import Render from './Render';


const VirtualisedList = ({data}) => {

    const Row = ({ index, style }) => (
      <div className='even:bg-gray-200 odd:bg-transparent px-2 py-4  ' style={style}  >
        {/* Row {index} */}
        <Render data={data} />
      </div>
    );
    return (
      <div className=' border-2 w-full  ' >
        VirtualisedList
        <AutoSizer  >
          {({ height, width }) => (
            <List
              className="List "
              height={150}
              itemCount={data.length}
              itemSize={35}
              width={'98vw'}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
      </div>
    );
  };
  
  export default VirtualisedList;