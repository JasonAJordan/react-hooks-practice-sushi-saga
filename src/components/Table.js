import React from "react";

function Table({ plates, money}) {
  // renders an empty plate for every element in the array ?array why not a count?


  const emptyPlates = plates.map((_, index) => (
    <div className="empty-plate" style={{ top: -7 * index }} />
  ));

  //   const emptyPlates = plates.do((i, index) => (
  //   <div className="empty-plate" style={{ top: -7 * index }} />
  // ));

  return (
    <>
      <h1 className="remaining">
        You have: ${money} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
