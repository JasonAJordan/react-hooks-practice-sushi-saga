import React from "react";

function MoreButton({nextPage}) {

  // function handleNextPage(){
  //   nextPage()
  // }

  return <button onClick={nextPage}>More sushi!</button>;
}

export default MoreButton;
