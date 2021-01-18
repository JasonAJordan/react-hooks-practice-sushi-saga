import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({index, sushi, nextPage, eatSushi}) {

  let sushisMapped = sushi.slice(index, (index+4)).map((sushi)=> {
    return (
    <Sushi 
    img_url = {sushi.img_url}
    name = {sushi.name}
    price = {sushi.price}
    id = {sushi.id}
    key = {sushi.id}
    eaten = {sushi.eaten}
    eatSushi={eatSushi}
    />)
  } )

  return (
    <div className="belt">
      {sushisMapped}
      <MoreButton nextPage={nextPage}/>
    </div>
  );
}

export default SushiContainer;
